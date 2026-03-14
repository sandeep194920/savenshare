"use client";
import React from "react";
import Image from "next/image";
import { data } from "@/data/data";
import { handleScroll } from "@/utils/scrollUtil";
import Button from "./Button/Button";
import { H1 } from "./Text/Heading";
import Paragraph from "./Text/Paragraph";
import { FiCheck } from "react-icons/fi";

export default function Hero() {
  const { hero } = data;
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12"
    >
      {/* Left: text */}
      <div className="flex-1 flex flex-col gap-6">
        <H1>{hero.headline}</H1>
        <Paragraph className="text-base max-w-lg">{hero.subheadline}</Paragraph>

        <ul className="flex flex-col gap-3">
          {hero.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <FiCheck className="text-primary text-xs" />
              </span>
              <Paragraph className="text-sm">{bullet}</Paragraph>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-2">
          <Button onClick={() => handleScroll("demo")}>{hero.cta}</Button>
          <Button variant="outline" onClick={() => handleScroll("contact")}>
            Get Early Access
          </Button>
        </div>

        <p className="text-xs text-text-secondary mt-2">
          Coming soon to the App Store 🍎 and Google Play 🤖
        </p>
      </div>

      {/* Right: two-phone stack */}
      <div className="flex-shrink-0 flex items-center justify-center relative" style={{ width: 300, height: 560 }}>

        {/* Ambient glow */}
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl scale-125 pointer-events-none" />

        {/* Back phone — tilted right, slightly smaller, muted border */}
        <div
          className="absolute"
          style={{
            width: 210,
            right: -10,
            top: 30,
            transform: "rotate(5deg)",
            zIndex: 1,
          }}
        >
          <div className="rounded-[2.2rem] overflow-hidden border border-border-default/60 shadow-xl opacity-80">
            <Image
              src="/HomePage2.png"
              alt="SaveNShare Home Screen 2"
              width={300}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Front phone — straight, larger, full opacity, gold border glow */}
        <div
          className="absolute"
          style={{
            width: 235,
            left: -10,
            top: 0,
            zIndex: 2,
          }}
        >
          {/* Subtle gold outline */}
          <div className="absolute -inset-0.5 rounded-[2.4rem] bg-gradient-to-b from-primary/40 to-transparent pointer-events-none" style={{ zIndex: 0 }} />
          <div className="relative rounded-[2.2rem] overflow-hidden border border-primary/30 shadow-2xl" style={{ zIndex: 1 }}>
            <Image
              src="/HomePage.png"
              alt="SaveNShare Home Screen"
              width={300}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
