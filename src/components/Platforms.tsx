import React from "react";
import { H2 } from "./Text/Heading";
import Paragraph from "./Text/Paragraph";
import { FaYoutube, FaTiktok, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { data } from "@/data/data";

const iconMap: Record<string, React.ReactNode> = {
  youtube: <FaYoutube className="text-3xl text-[#FF0000]" />,
  tiktok: <FaTiktok className="text-3xl text-white" />,
  twitter: <FaTwitter className="text-3xl text-[#1DA1F2]" />,
  facebook: <FaFacebook className="text-3xl text-[#1877F2]" />,
  instagram: <FaInstagram className="text-3xl text-[#E1306C]" />,
};

export default function Platforms() {
  return (
    <section id="platforms" className="py-20 px-6 bg-bg-card border-y border-border-default">
      <div className="max-w-4xl mx-auto">
        <H2>Works With Your Favourite Platforms</H2>
        <Paragraph className="text-center -mt-4 mb-12">
          Save videos from the platforms you already use every day.
        </Paragraph>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {data.platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-border-default bg-bg-card2 relative"
            >
              {iconMap[platform.icon]}
              <span className="text-text-primary text-sm font-medium text-center">
                {platform.name}
              </span>
              {platform.status === "available" ? (
                <span className="text-xs text-green-400 font-medium">Available</span>
              ) : (
                <span className="text-xs text-primary font-medium">Coming Soon</span>
              )}
            </div>
          ))}
        </div>

        {/* Facebook oEmbed explanation — helps Meta reviewers */}
        <div className="mt-16 p-6 rounded-2xl border border-primary/20 bg-primary/5">
          <h3 className="text-text-primary font-semibold mb-3 text-lg">
            {data.facebookOembed.heading}
          </h3>
          <Paragraph className="text-sm leading-relaxed">
            {data.facebookOembed.body}
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
