import React from "react";
import { MdBookmarks } from "react-icons/md";
import { data } from "@/data/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-card mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <MdBookmarks className="text-primary text-xl" />
          <span className="font-bold text-text-primary">{data.footer.copyright}</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-text-secondary">
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <a href={`mailto:${data.site.email}`} className="hover:text-primary transition-colors">
            {data.site.email}
          </a>
        </div>

        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} {data.footer.copyright}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
