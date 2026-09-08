"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Menu, X, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "What I Do", href: "/#what-i-do" },
    { label: "Projects", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Interests", href: "/#interests" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-md shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand identity */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-zinc-100 hover:text-emerald-400 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{profileData.domain}</span>
          <span className="text-zinc-600 group-hover:text-zinc-500 transition-colors hidden sm:inline">
            // backend
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Quick Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-lg border border-transparent hover:border-zinc-800 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-lg border border-transparent hover:border-zinc-800 transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.resumeUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 hover:bg-emerald-900/40 hover:border-emerald-700 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-lg border border-zinc-800 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800/80 px-4 py-6 space-y-4 backdrop-blur-lg">
          <nav className="flex flex-col space-y-3 text-base font-medium text-zinc-300">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-400 transition-colors px-2 py-1.5 rounded-md hover:bg-zinc-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-zinc-100 bg-zinc-900 rounded-lg border border-zinc-800"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-zinc-100 bg-zinc-900 rounded-lg border border-zinc-800"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href={profileData.resumeUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800/60"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
