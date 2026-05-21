import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { AnimatedText } from "@/components/ui/AnimatedText"
import { GoldDivider } from "@/components/ui/GoldDivider"

export const metadata = {
  title: "Portfolio",
  description: "Explore the luxurious, cinematic photography portfolio of Krutansh.",
}

export default function PortfolioPage() {
  return (
    <Section>
      <Container>
        <AnimatedText 
          text="Portfolio" 
          el="h1" 
          className="font-serif text-5xl md:text-7xl mb-8" 
        />
        <GoldDivider className="mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
           {[1, 2, 4, 5].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-charcoal mb-6">
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              </div>
              <h2 className="font-serif text-2xl text-brand-white mb-2">The Santorini Elopement</h2>
              <p className="text-sm text-brand-silver uppercase tracking-widest">Wedding • 2023</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
