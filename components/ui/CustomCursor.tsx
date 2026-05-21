"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = React.useState(false)

  React.useEffect(() => {
    // Check if user prefers reduced motion or is on a touch device
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

    if (prefersReducedMotion || isTouchDevice) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "pointer"
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  if (typeof window !== "undefined" && 
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches || 
       ("ontouchstart" in window || navigator.maxTouchPoints > 0))) {
    return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-gold mix-blend-difference md:block"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? "rgba(212, 175, 55, 0.2)" : "transparent",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    />
  )
}
