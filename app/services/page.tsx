import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { AnimatedText } from "@/components/ui/AnimatedText"
import { GoldDivider } from "@/components/ui/GoldDivider"

export const metadata = {
  title: "Services & Investment",
  description: "Photography packages, bespoke pricing, and investment details.",
}

export default function ServicesPage() {
  return (
    <Section>
      <Container>
        <AnimatedText 
          text="Investment" 
          el="h1" 
          className="font-serif text-5xl md:text-7xl mb-8" 
        />
        <GoldDivider className="mb-16" />
        
        <div className="max-w-3xl mx-auto space-y-24">
          <div className="text-center">
            <h2 className="font-serif text-4xl text-brand-gold mb-6">Bespoke Wedding Coverage</h2>
            <p className="text-brand-silver leading-relaxed mb-8">
              Every love story is unique, and your documentation should reflect the nuance, elegance, and profound depth of your celebration. We offer bespoke collections tailored to multi-day luxury events and intimate editorial elopements.
            </p>
            <p className="text-sm uppercase tracking-widest text-brand-white">Starting at $8,000</p>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-4xl text-brand-gold mb-6">Editorial & Fine Art</h2>
            <p className="text-brand-silver leading-relaxed mb-8">
              Whether it's a brand campaign, an editorial feature, or a private fine art commission, we bring a cinematic, narrative-driven approach to every frame, ensuring your vision is captured with striking sophistication.
            </p>
            <p className="text-sm uppercase tracking-widest text-brand-white">Custom Quoted</p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
