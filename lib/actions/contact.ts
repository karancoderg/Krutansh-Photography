"use server"

import { z } from "zod"
import { Resend } from "resend"
import { Redis } from "@upstash/redis"
import { headers } from "next/headers"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  date: z.string().optional(),
  details: z.string().min(10, "Please provide more details"),
  honeypot: z.string().max(0, "Spam detected"),
})

export type ContactFormData = z.infer<typeof contactSchema>

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) 
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null

export async function submitContactForm(data: ContactFormData) {
  try {
    const validatedData = contactSchema.parse(data)

    if (validatedData.honeypot) {
      return { success: true }
    }

    if (redis) {
      const ip = (await headers()).get("x-forwarded-for") || "unknown"
      const rateLimitKey = `rate_limit_contact:${ip}`
      
      const requests = await redis.incr(rateLimitKey)
      if (requests === 1) {
        await redis.expire(rateLimitKey, 3600)
      }

      if (requests > 3) {
        throw new Error("Too many requests. Please try again later.")
      }
    }

    if (resend) {
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["krutansh@example.com"],
        subject: `New Inquiry from ${validatedData.name}`,
        text: `
          Name: ${validatedData.name}
          Email: ${validatedData.email}
          Phone: ${validatedData.phone || 'N/A'}
          Date: ${validatedData.date || 'N/A'}
          
          Details:
          ${validatedData.details}
        `,
      })
    } else {
      console.warn("Resend API key missing. Form submission logged to console:", validatedData)
    }

    return { success: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed" }
    }
    return { success: false, error: error instanceof Error ? error.message : "Something went wrong" }
  }
}
