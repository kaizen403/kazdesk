"use client";

import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  MessageSquare,
  FileText,
  LineChart,
  Users,
  Phone,
  Sparkles,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "Human-like AI Conversations",
    description:
      "Our AI engages in natural conversations indistinguishable from human agents, providing personalized interactions.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Client List Management",
    description:
      "Easily upload and manage your client lists with phone numbers, names, and custom attributes for targeted outreach.",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Custom Call Scripts",
    description:
      "Create tailored scripts for different campaigns, from product launches to customer feedback and reminders.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Document Integration",
    description:
      "Upload product PDFs and documentation to train the AI on your specific offerings and details.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Smart Scheduling",
    description:
      "AI automatically schedules follow-up calls and manages time zones for optimal engagement.",
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Real-time Analytics",
    description:
      "Track performance metrics and gain actionable insights to optimize your AI call campaigns.",
  },
];

export function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mx-auto rounded-full bg-slate-800/70 backdrop-blur-md border border-slate-700/60 px-4 py-1 mb-6">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-xs text-slate-200 tracking-wide">
              Powerful Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
            Everything You Need
          </h2>
          <p className="text-slate-300 text-lg">
            Our platform provides all the tools necessary to automate and
            optimize your customer interactions.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="relative group"
            >
              <div className="h-full rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 transition-all duration-300 hover:border-blue-500/50">
                <div className="relative z-10">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <div className="text-blue-400">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>

                <AnimatePresence>
                  {hoveredFeature === index && (
                    <m.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent blur-xl"
                    />
                  )}
                </AnimatePresence>
              </div>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
            Get Started Today
          </button>
        </m.div>
      </div>
    </section>
  );
}
