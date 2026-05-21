"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 bg-brand-black/80 backdrop-blur-md border-b border-brand-charcoal"
    >
      <Container className="h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl text-brand-gold tracking-wider hover:text-brand-gold-muted transition-colors">
          KRUTANSH
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-brand-silver">
          <Link href="/portfolio" className="hover:text-brand-white transition-colors">Portfolio</Link>
          <Link href="/services" className="hover:text-brand-white transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
        </nav>
      </Container>
    </motion.header>
  )
}
