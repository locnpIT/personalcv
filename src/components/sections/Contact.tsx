"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profileData } from "@/data/profile";
import { Mail, Phone, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="08"
          title="Get In Touch"
          subtitle="Open to discussing backend engineering roles, system architecture design, and high-performance Java/Spring Boot services."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct channels card */}
          <div className="lg:col-span-7 space-y-4">
            {/* Email Card */}
            <div className="p-5 sm:p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-lg bg-emerald-950/50 border border-emerald-800/50 text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-zinc-500 block uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-base sm:text-lg font-mono font-semibold text-zinc-100 hover:text-emerald-400 transition-colors"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(profileData.email, "email")}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium text-zinc-300 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${profileData.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 sm:p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-lg bg-cyan-950/50 border border-cyan-800/50 text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-zinc-500 block uppercase tracking-wider">
                    Phone / Telegram / Zalo
                  </span>
                  <a
                    href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
                    className="text-base sm:text-lg font-mono font-semibold text-zinc-100 hover:text-cyan-400 transition-colors"
                  >
                    {profileData.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(profileData.phone, "phone")}
                aria-label="Copy phone number"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium text-zinc-300 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 transition-colors"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles & Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
              <h3 className="text-base font-bold text-zinc-100 mb-2">
                Engineering Profiles
              </h3>
              <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                Check out my code repositories on GitHub and professional network updates on LinkedIn.
              </p>

              <div className="space-y-2.5">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-950 hover:bg-zinc-800/80 border border-zinc-800 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100" />
                    <span className="text-xs font-mono font-medium text-zinc-300 group-hover:text-zinc-100">
                      GitHub // phuocloc-dev
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Visit ↗</span>
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-950 hover:bg-zinc-800/80 border border-zinc-800 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100" />
                    <span className="text-xs font-mono font-medium text-zinc-300 group-hover:text-zinc-100">
                      LinkedIn // phuocloc-dev
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Connect ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
