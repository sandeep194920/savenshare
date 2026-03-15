"use client";
import React from "react";
import { H2 } from "./Text/Heading";
import Paragraph from "./Text/Paragraph";
import { FaAndroid } from "react-icons/fa";
import { FiDownload, FiSmartphone, FiCheckCircle } from "react-icons/fi";

const BUILD_URL = "https://expo.dev/artifacts/eas/9qqJEfUBPzo1JtpgfqY81n.apk";

const steps = [
  "Tap the download button below (or scan the QR code) on your Android device",
  'Open the downloaded APK file — tap "Install" when prompted',
  'If asked, enable "Install from unknown sources" in your Android settings',
  "Sign up or log in, then share any YouTube or TikTok video to SaveNShare",
];

export default function TryAndroid() {
  return (
    <section id="try-android" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 w-fit">
            <FaAndroid className="text-primary text-sm" />
            <span className="text-primary text-xs font-medium tracking-wide">
              Android Beta
            </span>
          </div>
          <H2>Try It on Android</H2>
          <Paragraph className="text-base max-w-lg">
            Install the SaveNShare beta directly on your Android device — no
            Play Store needed.
          </Paragraph>
        </div>

        {/* Card */}
        <div className="flex flex-col md:flex-row gap-10 items-center bg-bg-card border border-border-default rounded-3xl p-8 shadow-xl">
          {/* Left: steps */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-text-primary font-semibold text-base">
              How to install
            </p>
            <ol className="flex flex-col gap-4">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-text-secondary text-sm leading-6">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href={BUILD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-bg-default font-semibold text-sm hover:bg-primary-light transition-all duration-200 w-fit cursor-pointer"
              >
                <FiDownload className="text-base" />
                Download APK on Android Phone
              </a>
            </div>

            {/* Note */}
            <div className="flex items-start gap-2 p-4 rounded-xl border border-primary/20 bg-primary/5 mt-1">
              <FiCheckCircle className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-text-secondary text-xs leading-5">
                This is a development build for testing purposes. YouTube and
                TikTok video saving is fully functional. Facebook and Instagram
                support is pending Meta API approval.
              </p>
            </div>
          </div>

          {/* Right: QR + phone icon */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <div className="p-4 bg-white rounded-2xl shadow-lg">
              {/* EAS build QR code — scan on Android device to install */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(BUILD_URL)}`}
                alt="Scan to download APK"
                width={160}
                height={160}
                className="rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <FiSmartphone className="text-primary" />
              <span className="text-xs">Scan with your Android device</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
