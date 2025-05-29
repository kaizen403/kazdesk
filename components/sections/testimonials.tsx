"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

type TestimonialType = {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
};

const testimonials: TestimonialType[] = [
  {
    quote:
      "VoxAI transformed our outreach strategy. We achieved a 42% increase in successful customer interactions with the same team size. The AI's natural conversation flow is remarkable.",
    author: "Sarah Johnson",
    role: "Head of Marketing",
    company: "TechGrowth Solutions",
    avatarUrl:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    quote:
      "The analytics dashboard provides invaluable insights into our customer interactions. We've been able to refine our messaging based on real data, resulting in a 28% boost in conversions.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Innovate Retail",
    avatarUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    quote:
      "As a startup, we couldn't afford a large sales team. VoxAI allowed us to scale our outreach efforts and connect with 5x more potential customers. The ROI has been incredible.",
    author: "Jessica Williams",
    role: "CEO",
    company: "Bloom Finance",
    avatarUrl:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    quote:
      "Our product launch campaign needed a wide reach in a short time. VoxAI handled thousands of personalized calls that would have been impossible with our team alone. Truly game-changing.",
    author: "David Martinez",
    role: "Product Manager",
    company: "HealthTech Innovations",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    quote:
      "The quality of conversations with VoxAI is remarkable. Our customers often don't realize they're speaking with an AI until we tell them. It's revolutionized how we handle support and outreach.",
    author: "Amelia Thompson",
    role: "Customer Success Lead",
    company: "CloudServe Solutions",
    avatarUrl:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const trustedCompanies = [
  "Globex Inc.",
  "InnovaTech",
  "BlueWave",
  "Nexus Systems",
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Businesses of all sizes are transforming their customer engagement
            with our AI call center solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="bg-black/20 backdrop-blur-sm border-white/10 h-full transition-all duration-300 hover:border-white/20 hover:bg-black/30">
                      <CardContent className="p-6">
                        <Quote className="h-8 w-8 text-indigo-400 mb-4 opacity-50" />
                        <p className="text-muted-foreground mb-6">
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-4 border border-white/10">
                            <AvatarImage
                              src={testimonial.avatarUrl}
                              alt={testimonial.author}
                            />
                            <AvatarFallback>
                              {testimonial.author.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">
                              {testimonial.author}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 static" />
              <CarouselNext className="relative inset-0 translate-y-0 static" />
            </div>
          </Carousel>
        </div>

        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">
              Trusted by innovative companies
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustedCompanies.map((company) => (
              <div
                key={company}
                className="h-12 w-32 bg-white/5 rounded-md flex items-center justify-center"
              >
                <span className="text-sm text-white/80">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}
