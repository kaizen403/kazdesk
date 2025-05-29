"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/20"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/loogo.svg" alt="Logo" width={40} height={40} />{" "}
            <span className="text-xl font-bold tracking-tight">KazDesk</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <div
              className={`w-6 h-5 flex flex-col justify-between transition-all ${menuOpen ? "menu-open" : ""}`}
            >
              <span
                className={`h-0.5 w-full bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`h-0.5 w-full bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`h-0.5 w-full bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b border-border/20 py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </MobileNavLink>
            <MobileNavLink
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </MobileNavLink>
            <MobileNavLink href="#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </MobileNavLink>
            <MobileNavLink
              href="#testimonials"
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </MobileNavLink>
            <MobileNavLink href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-base font-medium transition-colors hover:text-primary py-2 block"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
