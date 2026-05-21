import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { AnimatedText } from "@/components/ui/AnimatedText"
import { GoldDivider } from "@/components/ui/GoldDivider"
import { ContactForm } from "@/components/forms/ContactForm"

export const metadata = {
  title: "Contact",
  description: "Inquire about our luxury photography services and check availability.",
}

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto">
          <AnimatedText 
            text="Inquire" 
            el="h1" 
            className="font-serif text-5xl md:text-7xl mb-8" 
          />
          <GoldDivider className="mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-10">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-brand-silver mb-4">Availability</h3>
                <p className="text-brand-white">Now booking for 2024 and 2025.</p>
                <p className="text-brand-silver text-sm mt-2">Available for travel worldwide.</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-widest text-brand-silver mb-4">Direct Contact</h3>
                <p className="text-brand-white">hello@krutansh.com</p>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
