"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  // Pricing values
  const startupMonthly = 149;
  const startupAnnual = Math.round(startupMonthly * 12 * 0.8); // 20% off

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your business needs with no hidden fees.
          </p>

          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                !annual
                  ? "bg-primary/20 text-white"
                  : "text-muted-foreground hover:text-white",
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                annual
                  ? "bg-primary/20 text-white"
                  : "text-muted-foreground hover:text-white",
              )}
            >
              Annual{" "}
              <Badge
                variant="outline"
                className="ml-1 border-green-500/50 text-green-400 text-xs"
              >
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Startup Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="relative group"
            >
              <div className="relative z-10 h-full rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:border-white/20 hover:bg-black/30">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Startup</h3>
                  <div className="flex items-center justify-center">
                    {annual ? (
                      <span className="text-4xl font-bold">
                        ${startupAnnual}
                        <span className="text-muted-foreground ml-2 text-base">
                          /year
                        </span>
                      </span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">
                          ${startupMonthly}
                        </span>
                        <span className="text-muted-foreground ml-2">
                          /month
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span>AI Calls</span>
                    <span className="font-bold">500</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span>Minutes</span>
                    <span className="font-bold">750</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Human-like AI conversations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Basic analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Email notifications for leads</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Standard support (email)</span>
                  </li>
                </ul>

                <Button className="w-full bg-white text-black hover:bg-white/90">
                  Get Started
                </Button>
              </div>

              <div className="absolute -z-10 inset-0 bg-gradient-to-b from-indigo-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </motion.div>

            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group md:-mt-4"
            >
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit">
                <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none px-3 py-1">
                  Most Popular
                </Badge>
              </div>

              <div className="relative z-10 h-full rounded-xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/40 to-black/40 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:border-indigo-500/50">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Standard</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">Contact Us</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span>AI Calls</span>
                    <span className="font-bold">4,000</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span>Minutes</span>
                    <span className="font-bold">6,000</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>All Startup features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority lead notifications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>CRM integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority support (email & chat)</span>
                  </li>
                </ul>

                <a href="mailto:vrishi@kazdesk.in">
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-glow-purple">
                    Contact Sales
                  </Button>
                </a>
              </div>

              <div className="absolute -z-10 inset-0 bg-gradient-to-b from-indigo-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative z-10 h-full rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:border-white/20 hover:bg-black/30">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">Contact Us</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span>AI Calls</span>
                    <span className="font-bold">10,000+</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span>Minutes</span>
                    <span className="font-bold">15,000+</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>All Standard features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom AI voice training</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced integrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom analytics & reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>

                <a href="mailto:vrishi@kazdesk.in">
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 hover:bg-primary/10"
                  >
                    Contact Sales
                  </Button>
                </a>
              </div>

              <div className="absolute -z-10 inset-0 bg-gradient-to-b from-indigo-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team can build a tailored plan specifically for your business
              needs. Get in touch to discuss your requirements.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary/10"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}
