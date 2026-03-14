import React from "react";
import { H2 } from "./Text/Heading";
import Paragraph from "./Text/Paragraph";

export default function Demo() {
  return (
    <section id="demo" className="py-20 px-6 bg-bg-card border-y border-border-default">
      <div className="max-w-3xl mx-auto">
        <H2>See It in Action</H2>
        <Paragraph className="text-center mb-10 -mt-4">
          Watch how easy it is to save, organise and share videos with SaveNShare.
        </Paragraph>

        {/* YouTube embed — swap src when video is recorded */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-border-default shadow-xl"
          style={{ paddingBottom: "56.25%" }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-card2 gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-text-secondary text-sm">Demo video coming soon</p>
          </div>
        </div>

        <p className="text-center text-xs text-text-secondary mt-4">
          Full walkthrough — save a video from the Share Sheet, organise into a playlist, pin and share it.
        </p>
      </div>
    </section>
  );
}
