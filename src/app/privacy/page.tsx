import React from "react";
import Link from "next/link";
import { MdBookmarks } from "react-icons/md";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — SaveNShare",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg-default text-text-primary">
      {/* Simple header */}
      <header className="border-b border-border-default px-6 py-4">
        <Link href="/" className="flex items-center gap-2 w-fit hover:opacity-80 transition-opacity">
          <MdBookmarks className="text-primary text-2xl" />
          <span className="font-bold text-text-primary">SaveNShare</span>
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Privacy Policy</h1>
        <p className="text-text-secondary text-sm mb-10">Last updated: March 2026</p>

        <div className="flex flex-col gap-10 text-text-secondary leading-7">

          <section>
            <h2 className="text-text-primary font-semibold text-xl mb-3">1. Introduction</h2>
            <p>
              SaveNShare (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a mobile application that allows users to save, organise and share videos from social media platforms including YouTube, TikTok, Facebook, Instagram, and Twitter/X. This Privacy Policy explains how we collect, use, and protect your information when you use our app or this website.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-xl mb-3">2. Information We Collect</h2>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li><strong className="text-text-primary">Account information:</strong> Email address and display name when you create an account.</li>
              <li><strong className="text-text-primary">Saved content:</strong> Video URLs, playlist names, sub-playlist names, and optional notes you add to saved videos.</li>
              <li><strong className="text-text-primary">Usage data:</strong> Basic analytics about which features you use (platform breakdown, video counts) to improve the app.</li>
              <li><strong className="text-text-primary">Device information:</strong> Operating system version, for debugging and compatibility purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-xl mb-3">3. How We Use Facebook and Instagram Data</h2>
            <p className="mb-3">
              When you save a Facebook or Instagram video URL, SaveNShare uses the Facebook oEmbed API to fetch the video title and thumbnail. This request is made server-side — your Facebook access token is never exposed to the client or stored in our database.
            </p>
            <p>
              We request only the <code className="bg-bg-card px-1.5 py-0.5 rounded text-primary text-sm">oembed_read</code> permission from Facebook. We do not access your Facebook profile, friends list, posts, messages, or any other personal Facebook data.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-xl mb-3">4. Data Storage</h2>
            <p>
              Your data is stored securely using Supabase (PostgreSQL). We use Row Level Security (RLS) to ensure each user can only access their own data. We do not sell, rent, or share your personal data with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-xl mb-3">5. Third-Party Services</h2>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li><strong className="text-text-primary">Supabase:</strong> Database and authentication provider.</li>
              <li><strong className="text-text-primary">Facebook oEmbed API:</strong> Used server-side to fetch video metadata for Facebook and Instagram URLs.</li>
              <li><strong className="text-text-primary">PostHog:</strong> Privacy-friendly product analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-xl mb-3">6. Your Rights</h2>
            <p>
              You can request deletion of your account and all associated data at any time by contacting us at{" "}
              <a href="mailto:staarcoding@gmail.com" className="text-primary hover:underline">
                staarcoding@gmail.com
              </a>
              . We will delete your data within 30 days of receiving your request.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-xl mb-3">7. Children&apos;s Privacy</h2>
            <p>
              SaveNShare is not directed at children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-xl mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify users of significant changes by updating the &ldquo;Last updated&rdquo; date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-text-primary font-semibold text-xl mb-3">9. Contact</h2>
            <p>
              For any privacy-related questions, contact us at{" "}
              <a href="mailto:staarcoding@gmail.com" className="text-primary hover:underline">
                staarcoding@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border-default px-6 py-6 text-center text-text-secondary text-sm">
        <Link href="/" className="hover:text-primary transition-colors">
          &larr; Back to SaveNShare
        </Link>
      </footer>
    </div>
  );
}
