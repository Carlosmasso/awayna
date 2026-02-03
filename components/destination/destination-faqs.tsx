"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Destination } from "@/lib/destinations-data"

interface DestinationFaqsProps {
  destination: Destination
}

export function DestinationFaqs({ destination }: DestinationFaqsProps) {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Preguntas frecuentes
          </h2>
          <p className="text-muted-foreground">
            Resolvemos tus dudas sobre este viaje
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {destination.faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-10 text-center p-6 rounded-2xl bg-card border border-border">
            <p className="text-foreground mb-2">
              Tienes mas preguntas?
            </p>
            <p className="text-muted-foreground mb-4">
              Escribenos y te respondemos en menos de 24 horas
            </p>
            <a 
              href="mailto:hola@awayna.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
