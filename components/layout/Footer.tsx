import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { GoldDivider } from "@/components/ui/GoldDivider"

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-black pt-20 pb-10">
      <Container>
        <GoldDivider className="mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <Link href="/" className="font-serif text-2xl text-brand-gold tracking-wider">
              KRUTANSH
            </Link>
            <p className="mt-4 text-brand-silver max-w-sm">
              Capturing timeless moments with an editorial and cinematic noir aesthetic. Available worldwide.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-4 text-sm uppercase tracking-widest text-brand-silver">
            <Link href="/portfolio" className="hover:text-brand-white transition-colors">Portfolio</Link>
            <Link href="/services" className="hover:text-brand-white transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-brand-white transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-16 text-center text-xs text-brand-silver/50">
          © {new Date().getFullYear()} Krutansh Photography. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
