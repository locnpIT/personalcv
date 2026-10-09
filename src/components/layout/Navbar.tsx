"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";
import styles from "./Navbar.module.css";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "What I Do", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Interests", href: "/#interests" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const onBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onBreakpointChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className={styles.header}>
      <Link href="/#top" className={styles.brand} onClick={closeMenu}>
        <span className={styles.logo}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2.8c3.6 4.5 6.6 8.2 6.6 11.8a6.6 6.6 0 0 1-13.2 0c0-3.6 3-7.3 6.6-11.8z" />
            <path d="M9 15.2a3 3 0 0 0 3 3" />
          </svg>
        </span>
        <span>Phuoc Loc</span>
      </Link>

      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls={menuId}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      <div id={menuId} className={styles.menu} data-open={menuOpen}>
        <nav aria-label="Primary" className={styles.navigation}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.socials}>
          <a href={profileData.github} className={styles.socialLink} onClick={closeMenu}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href={profileData.linkedin} className={styles.socialLink} onClick={closeMenu}>
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
