import React from "react";
import Image from "next/image";
import { data } from "@/data/data";
import { H2, H3 } from "./Text/Heading";
import Paragraph from "./Text/Paragraph";

export default function AppFeatures() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <H2>App Features</H2>

        <div className="flex flex-col gap-24">
          {data.features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={feature.heading}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-10 md:gap-16`}
              >
                {/* Text side */}
                <div className="flex-1 flex flex-col gap-4 max-w-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    <span className="text-primary text-xs font-semibold">
                      Feature {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <H3>{feature.heading}</H3>
                  <Paragraph>{feature.description}</Paragraph>
                </div>

                {/* Phone screenshots */}
                <div
                  className={`flex-shrink-0 flex gap-4 justify-center ${
                    feature.images.length === 1 ? "w-56 md:w-64" : ""
                  }`}
                >
                  {feature.images.map((img, i) => (
                    <div
                      key={img}
                      className="relative"
                      style={{
                        width: feature.images.length === 1 ? "100%" : feature.images.length === 2 ? "160px" : "130px",
                        transform:
                          feature.images.length === 3
                            ? i === 0
                              ? "rotate(-4deg) translateY(8px)"
                              : i === 2
                              ? "rotate(4deg) translateY(8px)"
                              : "scale(1.04)"
                            : feature.images.length === 2
                            ? i === 0
                              ? "rotate(-3deg) translateY(6px)"
                              : "rotate(3deg) translateY(6px)"
                            : "none",
                        zIndex: feature.images.length === 3 ? (i === 1 ? 10 : 5) : undefined,
                      }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl" />
                      <div className="relative rounded-2xl overflow-hidden border border-border-default shadow-xl">
                        <Image
                          src={img}
                          alt={`${feature.heading} screenshot ${i + 1}`}
                          width={300}
                          height={600}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
