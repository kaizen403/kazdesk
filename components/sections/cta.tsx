"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneCall, ArrowRight, Sparkles } from "lucide-react";

export function Cta() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative z-10 max-w-5xl mx-auto rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90 -z-10">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>

          {/* Animated particles/glow effects */}
          <div className="absolute top-0 left-0 right-0 w-full h-1/2 overflow-hidden">
            <div className="absolute -top-20 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 py-16 px-6 md:py-20 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-indigo-500/20 border border-indigo-500/30">
                  <Sparkles className="h-4 w-4 mr-2 text-indigo-400" />
                  <span className="text-sm font-medium">Get Started Today</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Transform Your Customer Engagement with AI Calls
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join innovative businesses using AI to elevate their customer
                  interactions. Book a demo to see our platform in action.
                </p>

                <div className="flex items-center space-x-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-glow-purple"
                  >
                    Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <a href="mailto:vrishi@kazdesk.in">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary/20 hover:bg-primary/10"
                    >
                      <PhoneCall className="mr-2 h-4 w-4" /> Contact Sales
                    </Button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-6">Request Information</h3>
                <form
                  action="mailto:vrishi@kazdesk.in"
                  method="POST"
                  encType="text/plain"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="Name"
                        placeholder="Your name"
                        className="bg-white/5 border-white/10 focus:border-indigo-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="Company"
                        placeholder="Your company"
                        className="bg-white/5 border-white/10 focus:border-indigo-500/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="Email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white/5 border-white/10 focus:border-indigo-500/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">
                      I’m interested in
                    </label>
                    <select
                      id="interest"
                      name="Interest"
                      className="w-full rounded-md bg-white/5 border border-white/10 focus:border-indigo-500/50 py-2 px-3"
                    >
                      <option value="demo">Booking a demo</option>
                      <option value="pricing">Pricing information</option>
                      <option value="enterprise">Enterprise solutions</option>
                      <option value="support">Technical support</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="Message"
                      rows={3}
                      placeholder="Tell us about your needs..."
                      className="w-full rounded-md bg-white/5 border border-white/10 focus:border-indigo-500/50 py-2 px-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                  >
                    Submit Request
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
