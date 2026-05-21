import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { AnimatedText } from "@/components/ui/AnimatedText"
import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <>
      <Section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-0">
        <div className="absolute inset-0 bg-brand-charcoal opacity-20" />
        <Container className="relative z-10 text-center">
          <AnimatedText 
            text="Cinematic Editorial Photography" 
            el="h1"
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-white tracking-tight"
          />
          <AnimatedText 
            text="Capturing the profound beauty of human connection."
            el="p"
            className="mt-6 text-lg md:text-xl text-brand-silver max-w-2xl mx-auto"
          />
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button asChild size="lg">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-black">
        <Container>
          <SectionLabel>Selected Works</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative aspect-[3/4] overflow-hidden bg-brand-charcoal">
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-brand-silver/50 z-0">
                  Image {i}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-brand-black/90 to-transparent">
                  <h3 className="font-serif text-xl text-brand-white">Wedding Collection</h3>
                  <p className="text-brand-gold text-sm uppercase tracking-widest mt-2">View Gallery</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild variant="ghost">
              <Link href="/portfolio">Explore all collections &rarr;</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
