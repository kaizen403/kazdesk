"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Upload,
  FileText,
  Settings,
  Play,
  BarChart,
  PhoneCall,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <Upload className="h-6 w-6" />,
    title: "Upload Your Client List",
    description:
      "Import your customer database with names, phone numbers and relevant details.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Create Your Call Script",
    description:
      "Design conversation flows or upload product documents to train our AI.",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Configure Campaign Settings",
    description:
      "Set call schedules, follow-up rules, and success criteria for your campaign.",
  },
  {
    icon: <Play className="h-6 w-6" />,
    title: "Launch Your Campaign",
    description:
      "Start your AI calls and monitor them in real-time with our dashboard.",
  },
  {
    icon: <PhoneCall className="h-6 w-6" />,
    title: "AI Makes Human-Like Calls",
    description:
      "Our AI naturally engages with customers, responding intelligently to their questions.",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Track Results & Optimize",
    description:
      "Analyze call outcomes, conversion rates, and customer feedback to improve future campaigns.",
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (!containerRef.current) return;

    const createConnectors = () => {
      const container = containerRef.current;
      if (!container) return;

      const connectorContainer = container.querySelector(
        ".connector-container",
      );
      if (!connectorContainer) return;

      // Clear existing connectors
      connectorContainer.innerHTML = "";

      const stepElements = container.querySelectorAll(".step-item");

      stepElements.forEach((el, index) => {
        if (index === stepElements.length - 1) return;

        const rect1 = el.getBoundingClientRect();
        const rect2 = stepElements[index + 1].getBoundingClientRect();

        const containerRect = container.getBoundingClientRect();

        const x1 = rect1.left + rect1.width / 2 - containerRect.left;
        const y1 = rect1.top + rect1.height - containerRect.top;
        const x2 = rect2.left + rect2.width / 2 - containerRect.left;
        const y2 = rect2.top - containerRect.top;

        const connector = document.createElement("div");
        connector.className =
          "absolute border-dashed border-l-2 border-primary/30 transition-all duration-1000";

        if (window.innerWidth >= 768) {
          // Horizontal layout on larger screens
          connector.style.left = `${x1}px`;
          connector.style.top = `${rect1.height / 2 + rect1.top - containerRect.top}px`;
          connector.style.width = `${x2 - x1}px`;
          connector.style.height = "2px";
          connector.classList.remove("border-l-2");
          connector.classList.add("border-t-2");
        } else {
          // Vertical layout on smaller screens
          connector.style.left = `${x1}px`;
          connector.style.top = `${y1}px`;
          connector.style.height = `${y2 - y1}px`;
          connector.style.width = "2px";
        }

        connectorContainer.appendChild(connector);
      });
    };

    createConnectors();

    const handleResize = () => {
      createConnectors();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Get started with AI-powered calls in just a few simple steps.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative flex flex-col md:flex-row md:flex-wrap justify-center gap-6 md:gap-16 mt-12 md:mt-24"
        >
          <div className="connector-container absolute inset-0 pointer-events-none"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "step-item relative z-10 flex-1 min-w-[280px] max-w-[340px] mx-auto md:mx-0",
                index % 2 !== 0 ? "md:mt-40" : "",
              )}
            >
              <div className="relative z-10 bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:bg-black/30 group">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-glow-sm">
                  {step.icon}
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </div>

              <div className="absolute -z-10 left-1/2 -translate-x-1/2 -bottom-4 w-32 h-2 bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0 blur-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
  );
}

