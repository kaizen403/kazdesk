"use client";

import { useEffect, useRef, useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

/* ------------------------------------------------------------
   Subtle animated background
------------------------------------------------------------ */
function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const spawn = () => {
      const c = ref.current!;
      c.innerHTML = "";

      const make = (qty: number, css: Partial<CSSStyleDeclaration>) => {
        for (let i = 0; i < qty; i++) {
          const el = document.createElement("div");
          Object.assign(el.style, css);
          el.style.animation = `pulse ${Math.random() * 4 + 2}s ease-in-out infinite ${
            Math.random() * 2
          }s`;
          c.appendChild(el);
        }
      };

      // Increased density
      make(30, {
        position: "absolute",
        height: "1px",
        backgroundImage:
          "linear-gradient(to right, transparent, rgba(96,165,250,.35), transparent)",
        width: `${Math.random() * 350 + 120}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      });

      make(22, {
        position: "absolute",
        width: "1px",
        backgroundImage:
          "linear-gradient(to bottom, transparent, rgba(45,212,191,.35), transparent)",
        height: `${Math.random() * 260 + 100}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      });

      make(14, {
        position: "absolute",
        height: "1px",
        backgroundImage:
          "linear-gradient(to right, transparent, rgba(192,132,252,.25), transparent)",
        width: `${Math.random() * 200 + 80}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        transform: `rotate(${Math.random() * 180 - 90}deg)`,
      });
    };

    spawn();
    const id = setInterval(spawn, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950" />
      <div
        ref={ref}
        className="absolute inset-0 pointer-events-none opacity-40"
      />
      <style>{`
        @keyframes pulse {
          0%,100% { opacity:.05; transform:scaleX(1) }
          50%   { opacity:.4;  transform:scaleX(1.1) }
        }
      `}</style>
    </>
  );
}

/* ------------------------------------------------------------
   Lead-generated cards (avoid center area)
------------------------------------------------------------ */
interface Card {
  id: string;
  phone: string;
  city: string;
  pos: { x: number; y: number };
}

const CITIES = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri",
  "Patna",
];
const phone = () => `+91${Math.floor(Math.random() * 9e9 + 1e9)}`;

// Expand the "no-cards" rectangle to cover the middle on mobile
const EDGE_BUFFER_X = 6;
const EDGE_BUFFER_Y = 6;
// Widened safe zone to block central text
const SAFE_MIN_X = 10;
const SAFE_MAX_X = 90;
const SAFE_MIN_Y = 25;
const SAFE_MAX_Y = 75;

const randPos = (): { x: number; y: number } => {
  let x: number, y: number;
  do {
    x = Math.random() * (100 - 2 * EDGE_BUFFER_X) + EDGE_BUFFER_X;
    y = Math.random() * (100 - 2 * EDGE_BUFFER_Y) + EDGE_BUFFER_Y;
  } while (
    x > SAFE_MIN_X &&
    x < SAFE_MAX_X &&
    y > SAFE_MIN_Y &&
    y < SAFE_MAX_Y
  );
  return { x, y };
};

function PopupCards() {
  const [cards, set] = useState<Card[]>([]);

  useEffect(() => {
    const spawn = () => {
      const newCards: Card[] = [];
      const count = [2, 4][Math.floor(Math.random() * 2)];
      for (let i = 0; i < count; i++) {
        newCards.push({
          id: crypto.randomUUID(),
          phone: phone(),
          city: CITIES[Math.floor(Math.random() * CITIES.length)],
          pos: randPos(),
        });
      }
      set((prev) => [...prev, ...newCards]);
      newCards.forEach((c) =>
        setTimeout(
          () => set((prev) => prev.filter((x) => x.id !== c.id)),
          3000,
        ),
      );
    };

    spawn();
    const id = setInterval(spawn, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-10">
      <AnimatePresence>
        {cards.map(({ id, phone: ph, city, pos }) => (
          <m.div
            key={id}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, exit: { duration: 0.25 } }}
          >
            <div className="relative bg-slate-800/70 backdrop-blur-md border border-slate-700/60 rounded-lg px-2 py-1 min-w-[120px] shadow-md">
              <div className="flex items-center gap-1 mb-0.5">
                <Phone className="h-3 w-3 text-green-400" />
                <span className="text-green-400 text-[10px] font-medium">
                  Lead Generated
                </span>
                <span className="text-[9px]">🇮🇳</span>
              </div>
              <div className="text-white font-mono text-[11px] leading-none">
                {ph}
              </div>
              <div className="text-slate-300 text-[9px] leading-none">
                {city}
              </div>
              <m.div
                className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </div>
          </m.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------
   Main Hero component
------------------------------------------------------------ */
export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      <HeroBackground />
      <PopupCards />

      <div className="container px-4 relative z-20 text-center space-y-6">
        {/* Pill */}
        <m.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mx-auto rounded-full bg-slate-800/70 backdrop-blur-md border border-slate-700/60 px-4 py-1 mb-2"
        >
          <svg
            width="12"
            height="10"
            className="text-blue-400"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M0 8h2v8H0zM4 4h2v12H4zM8 0h2v16H8zM12 6h2v10h-2zM16 2h2v14h-2z" />
          </svg>
          <span className="text-xs text-slate-200 tracking-wide whitespace-nowrap">
            AI-Powered{" "}
          </span>
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent leading-tight"
        >
          Call Center AI
        </m.h1>

        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg"
        >
          Automate customer support for your businesses with AI call center
          services. Transform your sales outreach and central engage customers
          with human-like AI conversations.
        </m.p>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center space-x-4 mt-6"
        >
          <m.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow-lg"
          >
            Get Started
          </m.a>
          <m.a
            href="mailto:rishivhavle21@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-6 py-3 rounded-full border border-teal-400 text-teal-400 font-semibold shadow-lg bg-transparent"
          >
            Contact Us
          </m.a>
        </m.div>
      </div>
    </section>
  );
}
