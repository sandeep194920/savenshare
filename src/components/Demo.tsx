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

        <div className="relative w-full rounded-2xl overflow-hidden border border-border-default shadow-xl"
          style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/eMHSCQKCOUU"
            title="SaveNShare Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="text-center text-xs text-text-secondary mt-4">
          Full walkthrough — save a video from the Share Sheet, organise into a playlist, pin and share it.
        </p>
      </div>
    </section>
  );
}
