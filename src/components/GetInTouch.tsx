"use client";
import React, { useState } from "react";
import { H2 } from "./Text/Heading";
import Paragraph from "./Text/Paragraph";
import Button from "./Button/Button";
import { data } from "@/data/data";
import { FaEnvelope } from "react-icons/fa";

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const emptyForm: FormData = { fullName: "", email: "", subject: "", message: "" };

export default function GetInTouch() {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullName, email, subject, message } = formData;
    if (!fullName || !email || !subject || !message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${data.site.email}&su=${encodeURIComponent(
      `${fullName} — ${subject}`
    )}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink, "_blank");
    setFormData(emptyForm);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <H2>{data.contact.heading}</H2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: info */}
          <div className="flex-1 flex flex-col gap-6">
            <Paragraph className="text-base">{data.contact.subtext}</Paragraph>

            <div className="flex items-center gap-3 text-text-secondary">
              <FaEnvelope className="text-primary text-lg flex-shrink-0" />
              <a
                href={`mailto:${data.site.email}`}
                className="hover:text-primary transition-colors text-sm"
              >
                {data.site.email}
              </a>
            </div>

            <div className="p-5 rounded-2xl border border-primary/20 bg-primary/5">
              <Paragraph className="text-sm text-primary font-medium">
                {data.contact.notice}
              </Paragraph>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex-1 w-full bg-bg-card border border-border-default rounded-2xl p-6 shadow-xl">
            {error && (
              <p className="text-red-400 text-sm text-center mb-4">{error}</p>
            )}
            {submitted && (
              <p className="text-green-400 text-sm text-center mb-4">
                {"Message sent! We'll get back to you soon."}
              </p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { label: "Name", name: "fullName", type: "text", placeholder: "Your name" },
                { label: "Email", name: "email", type: "email", placeholder: "your@email.com" },
                { label: "Subject", name: "subject", type: "text", placeholder: "What's this about?" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-text-secondary text-sm mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof FormData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-bg-card2 border border-border-default rounded-xl px-4 py-2.5 text-text-primary text-sm outline-none focus:border-primary transition-colors placeholder:text-text-secondary/50"
                  />
                </div>
              ))}

              <div>
                <label className="block text-text-secondary text-sm mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you think, report a bug, or request a feature..."
                  rows={5}
                  className="w-full bg-bg-card2 border border-border-default rounded-xl px-4 py-2.5 text-text-primary text-sm outline-none focus:border-primary transition-colors placeholder:text-text-secondary/50 resize-none"
                />
              </div>

              <Button className="w-full text-center justify-center mt-2">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
