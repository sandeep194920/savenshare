"use client";
import React from "react";
import Image from "next/image";
import { data } from "@/data/data";
import { handleScroll } from "@/utils/scrollUtil";
import Button from "./Button/Button";
import Paragraph from "./Text/Paragraph";
import { FiCheck } from "react-icons/fi";

export default function Hero() {
  const { hero } = data;
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 pt-20 pb-14 flex flex-col-reverse md:flex-row items-center gap-16"
    >
      {/* Left: text */}
      <div className="flex-1 flex flex-col gap-6">

        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 w-fit">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-xs font-medium tracking-wide">Coming soon to iOS & Android</span>
        </div>

        {/* Headline */}
        <h1 className="font-extrabold text-4xl md:text-5xl leading-[1.15] tracking-tight text-text-primary">
          <span className="text-primary">Save</span> Any Video.<br />
          Organise Everything.<br />
          <span className="text-primary">Share</span> Instantly.
        </h1>

        <Paragraph className="text-base max-w-md leading-relaxed">
          {hero.subheadline}
        </Paragraph>

        <ul className="flex flex-col gap-3">
          {hero.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <FiCheck className="text-primary text-xs" />
              </span>
              <span className="text-text-secondary text-sm leading-6">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 mt-1">
          <Button onClick={() => handleScroll("demo")} className="px-8 py-3 text-base">
            {hero.cta}
          </Button>
          <Button variant="outline" onClick={() => handleScroll("contact")} className="px-8 py-3 text-base">
            Get Early Access
          </Button>
        </div>
      </div>

      {/* Right: three-phone fan — all fully visible */}
      <div
        className="flex-shrink-0 relative"
        style={{ width: 620, height: 480 }}
      >
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

        {/* Left phone — fully visible, tilted left */}
        <div
          className="absolute"
          style={{
            width: 185,
            left: 20,
            top: 70,
            transform: "rotate(-10deg)",
            transformOrigin: "bottom center",
            zIndex: 1,
          }}
        >
          <div className="rounded-[2rem] overflow-hidden border border-white/20 shadow-xl" style={{ opacity: 0.88 }}>
            <Image
              src="/SavePage.png"
              alt="Save Any Video"
              width={600}
              height={1200}
              className="w-full h-auto"
              quality={100}
            />
          </div>
        </div>

        {/* Right phone — fully visible, tilted right */}
        <div
          className="absolute"
          style={{
            width: 185,
            right: 20,
            top: 70,
            transform: "rotate(10deg)",
            transformOrigin: "bottom center",
            zIndex: 1,
          }}
        >
          <div className="rounded-[2rem] overflow-hidden border border-white/20 shadow-xl" style={{ opacity: 0.88 }}>
            <Image
              src="/SharedPage.png"
              alt="Share Instantly"
              width={600}
              height={1200}
              className="w-full h-auto"
              quality={100}
            />
          </div>
        </div>

        {/* Centre phone — upright, prominent, gold border */}
        <div
          className="absolute"
          style={{
            width: 250,
            left: "50%",
            transform: "translateX(-50%)",
            top: 0,
            zIndex: 2,
          }}
        >
          {/* Gold halo */}
          <div
            className="absolute -inset-4 rounded-[2.5rem] bg-primary/20 blur-2xl pointer-events-none"
            style={{ zIndex: 0 }}
          />
          {/* Phone frame */}
          <div
            className="relative rounded-[2.2rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.8)]"
            style={{
              zIndex: 1,
              border: "1.5px solid rgba(240,194,41,0.45)",
            }}
          >
            <Image
              src="/HomePage.png"
              alt="Organise Everything"
              width={600}
              height={1200}
              className="w-full h-auto"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
