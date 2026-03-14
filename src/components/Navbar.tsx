"use client";
import React, { useState } from "react";
import { data } from "@/data/data";
import { handleScroll } from "@/utils/scrollUtil";
import Button from "./Button/Button";
import { MdBookmarks } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border-default bg-bg-default/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <MdBookmarks className="text-primary text-2xl" />
          <span className="font-bold text-lg text-text-primary">{data.site.name}</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-text-secondary text-sm">
          {data.nav.links.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer hover:text-primary transition-colors"
              onClick={() => handleScroll(link.href)}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button onClick={() => handleScroll("contact")}>{data.nav.cta}</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border-default bg-bg-card px-6 py-4 flex flex-col gap-4">
          {data.nav.links.map((link) => (
            <span
              key={link.name}
              className="text-text-secondary cursor-pointer hover:text-primary transition-colors"
              onClick={() => { handleScroll(link.href); setMenuOpen(false); }}
            >
              {link.name}
            </span>
          ))}
          <Button onClick={() => { handleScroll("contact"); setMenuOpen(false); }}>
            {data.nav.cta}
          </Button>
        </div>
      )}
    </nav>
  );
}
