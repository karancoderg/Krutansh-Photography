"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { submitContactForm } from "@/lib/actions/contact"
import { Button } from "@/components/ui/Button"

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  date: z.string().optional(),
  details: z.string().min(10, "Please provide some details about your inquiry"),
  honeypot: z.string().max(0),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    const result = await submitContactForm(data)
    
    if (result.success) {
      setSubmitStatus("success")
      reset()
    } else {
      setSubmitStatus("error")
      setErrorMessage(result.error || "Failed to submit. Please try again.")
    }
    
    setIsSubmitting(false)
  }

  const whatsappFallback = "https://wa.me/1234567890?text=Hi%20Krutansh,%20I'm%20trying%20to%20reach%20out%20regarding%20a%20booking."

  if (submitStatus === "success") {
    return (
      <div className="p-8 border border-brand-charcoal bg-brand-black/50 text-center rounded-sm">
        <h3 className="font-serif text-2xl text-brand-gold mb-4">Inquiry Received</h3>
        <p className="text-brand-silver">
          Thank you for reaching out. We will review your details and get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm uppercase tracking-widest text-brand-silver">Name</label>
          <input
            id="name"
            {...register("name")}
            className="w-full bg-transparent border-b border-brand-charcoal py-3 px-0 focus:outline-none focus:border-brand-gold transition-colors text-brand-white"
            placeholder="Jane Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm uppercase tracking-widest text-brand-silver">Email</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full bg-transparent border-b border-brand-charcoal py-3 px-0 focus:outline-none focus:border-brand-gold transition-colors text-brand-white"
            placeholder="jane@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm uppercase tracking-widest text-brand-silver">Phone (Optional)</label>
          <input
            id="phone"
            {...register("phone")}
            className="w-full bg-transparent border-b border-brand-charcoal py-3 px-0 focus:outline-none focus:border-brand-gold transition-colors text-brand-white"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="text-sm uppercase tracking-widest text-brand-silver">Event Date</label>
          <input
            id="date"
            type="date"
            {...register("date")}
            className="w-full bg-transparent border-b border-brand-charcoal py-3 px-0 focus:outline-none focus:border-brand-gold transition-colors text-brand-white"
            style={{ colorScheme: 'dark' }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="details" className="text-sm uppercase tracking-widest text-brand-silver">Inquiry Details</label>
        <textarea
          id="details"
          {...register("details")}
          rows={5}
          className="w-full bg-transparent border-b border-brand-charcoal py-3 px-0 focus:outline-none focus:border-brand-gold transition-colors text-brand-white resize-none"
          placeholder="Tell us about your event, location, and vision..."
        />
        {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details.message}</p>}
      </div>

      {submitStatus === "error" && (
        <div className="p-4 bg-red-950/30 border border-red-900/50 text-red-200 text-sm rounded-sm">
          <p>{errorMessage}</p>
          <p className="mt-2">
            Alternatively, you can reach out directly via{" "}
            <a href={whatsappFallback} target="_blank" rel="noopener noreferrer" className="text-brand-gold underline underline-offset-4">
              WhatsApp
            </a>.
          </p>
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full md:w-auto">
        {isSubmitting ? "Submitting..." : "Send Inquiry"}
      </Button>
    </form>
  )
}
