"use client";

import Link from "next/link";
import { cn } from "@/app/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import MobileNav from "./mobile-nav";
import { NAV_SECTIONS, NavSection, scrollToSection } from "@/app/lib/nav";

interface NavbarProps {
  sections?: NavSection[];
}

export function Navbar({ sections = NAV_SECTIONS }: NavbarProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the section crossing the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    for (const { id } of sections) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [sections]);

  // Move the shine via CSS variables instead of state to avoid re-renders
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const nav = navRef.current;
    if (!nav) return;
    const rect = nav.getBoundingClientRect();
    nav.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    nav.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setActiveSection(id);
  };

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-[670px] lg:max-w-[68rem] py-2 px-4 rounded-sm transition-all duration-300 overflow-hidden",
          scrolled
            ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 shadow-lg"
            : "bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/30"
        )}
        onMouseMove={handleMouseMove}
      >
        {/* Shine Effect */}
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(300px_circle_at_var(--mx,0px)_var(--my,0px),rgba(8,9,10,0.15),transparent_40%)] dark:bg-[radial-gradient(300px_circle_at_var(--mx,0px)_var(--my,0px),rgba(34,197,94,0.15),transparent_40%)]" />

        {/* Subtle Glow Border */}
        <div className="absolute inset-0 rounded-sm opacity-20 blur-sm">
          <div className="absolute inset-px rounded-sm border border-emerald-500/20" />
        </div>

        <div className="flex-shrink-0 relative">
          <Link
            href="#"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#08090a] dark:bg-emerald-600 text-white dark:text-black/70 font-semibold relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{ animation: "var(--animate-shine)" }}
              />
            </div>
            PS
          </Link>
        </div>

        <div className="hidden sm:flex items-center space-x-1">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "px-3 py-1.5 text-sm rounded-full transition-all duration-300 relative overflow-hidden",
                activeSection === section.id
                  ? "text-black dark:text-white bg-gray-100 dark:bg-[#191a1a] font-normal"
                  : "text-[#737373] dark:text-[#A1A1AA] hover:text-black dark:hover:text-white font-normal"
              )}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(section.id);
              }}
            >
              {activeSection === section.id && (
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#08090a]/30 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-emerald-500/30 dark:to-transparent"
                    style={{ animation: "var(--animate-shine)" }}
                  />
                </div>
              )}
              {section.label}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={cn(
              "px-3 py-1.5 rounded-full transition-all duration-300 relative overflow-hidden flex items-center justify-center",
              "text-[#737373] dark:text-[#A1A1AA] hover:text-black dark:hover:text-white"
            )}
            aria-label="Toggle theme"
            title={
              mounted
                ? `Switch to ${isDark ? "light" : "dark"} mode`
                : "Toggle theme"
            }
          >
            {/* Theme is unknown on the server, so render the icon after mount */}
            {!mounted ? (
              <span className="w-4 h-4" />
            ) : isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>

        <button
          className="sm:hidden relative z-50 w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[#08090a] dark:text-white transition-transform duration-200 transform rotate-0 hover:rotate-90" />
          ) : (
            <Menu className="w-6 h-6 text-[#08090a] dark:text-white transition-transform duration-200 transform hover:scale-110" />
          )}
        </button>
      </nav>
      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sections={sections}
      />
    </>
  );
}
