import React from "react";
import { profileData } from "@/data/profile";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/60 py-12 px-4 sm:px-6 text-xs text-zinc-500 font-mono">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-zinc-400 font-medium font-sans text-sm">
            Nguyen Phuoc Loc
          </p>
          <p className="mt-1 text-zinc-500">
            Backend Software Engineer · {profileData.domain}
          </p>
          <p className="mt-1 text-zinc-600 text-[11px]">
            Built with Next.js and deployed on Cloudflare.
          </p>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-zinc-200 transition-colors p-1.5"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-zinc-200 transition-colors p-1.5"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Send Email"
            className="hover:text-zinc-200 transition-colors p-1.5"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="hover:text-emerald-400 transition-colors p-1.5 ml-2 border border-zinc-800 rounded hover:border-zinc-700"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
