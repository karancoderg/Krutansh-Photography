"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  el?: React.ElementType
  className?: string
  once?: boolean
}

export function AnimatedText({
  text,
  el: Wrapper = "p",
  className,
  once = true,
}: AnimatedTextProps) {
  const item: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <Wrapper className={cn(className)}>
      <span className="block overflow-hidden">
        <motion.span
          className="block"
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once, margin: "-50px" }}
        >
          {text}
        </motion.span>
      </span>
    </Wrapper>
  )
}
