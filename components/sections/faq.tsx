"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How does the AI sound on calls?",
    answer:
      "Our AI uses state-of-the-art voice synthesis technology that sounds remarkably human-like. The voice is natural, with appropriate pauses, intonation, and even conversational fillers. Most recipients can't tell they're speaking with an AI.",
  },
  {
    question: "Can the AI understand different accents and dialects?",
    answer:
      "Yes, our AI is trained on diverse speech patterns and can understand various accents and dialects. It continuously improves through machine learning to better recognize different ways of speaking.",
  },
  {
    question: "How do I onboard my customer data?",
    answer:
      "Onboarding is simple. You can upload your customer data via CSV, Excel, or through our API. The platform accepts various formats and can be integrated with most CRM systems for seamless data transfer.",
  },
  {
    question: "What kind of documentation can I upload to train the AI?",
    answer:
      "You can upload product brochures, FAQs, technical specifications, pricing guides, and any other documents relevant to your campaign. Our AI processes these documents to understand your products and services for more accurate conversations.",
  },
  {
    question: "How does the AI handle objections or complex questions?",
    answer:
      "The AI is trained to handle common objections and can escalate complex inquiries when needed. It can identify when a human representative should take over and can schedule callbacks for situations that require specialized attention.",
  },
  {
    question: "What analytics and insights do I get?",
    answer:
      "Our platform provides comprehensive analytics including call outcomes, conversion rates, customer sentiment, call duration, best performing scripts, optimal calling times, and more. All data can be exported or viewed through customizable dashboards.",
  },
  {
    question: "Is the service compliant with regulations like TCPA?",
    answer:
      "Yes, our platform is designed with compliance in mind. The AI identifies itself as an automated assistant at the beginning of calls, respects do-not-call lists, adheres to calling time restrictions, and records consent appropriately.",
  },
  {
    question: "Can I customize the voice and personality of the AI?",
    answer:
      "Absolutely. You can select from various voice options or even create a custom voice that matches your brand. You can also adjust the conversation style to be more professional, friendly, concise, or detailed based on your preferences.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our AI call center solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden px-6"
                >
                  <AccordionTrigger className="text-left py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Still have questions? Our team is here to help.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium">
                Contact us at support@kazdesk.in
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}

