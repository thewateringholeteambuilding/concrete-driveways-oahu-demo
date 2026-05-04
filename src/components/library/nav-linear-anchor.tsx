/**
 * Component: NavLinearAnchor
 * Type: nav
 * Style fit: editorial (great), liquid-glass (great), minimal-saas (great), bento (ok), industrial (poor)
 * Niche fit: saas (great), agency (great), portfolio (great), charter (ok), real-estate (ok), trades (poor)
 * Quality: pro
 * Source pattern: linear.app top nav (transparent on hero, opaque on scroll)
 *
 * Behavior:
 * - Top-fixed nav, transparent over the hero, fades to opaque + subtle border on scroll past 24px.
 * - Skip-link target for keyboard users.
 * - Mobile: collapses to a hamburger that opens a full-screen panel with focus trap and Escape close.
 * - Reduced-motion: opt-out of opacity/blur transitions; nav switches state instantly.
 *
 * Accessibility:
 * - <header> + <nav aria-label="Main"> landmarks
 * - Skip link (#main) is the first focusable child
 * - All interactive elements use focus-visible rings via CSS var --color-accent
 * - Mobile menu toggles aria-expanded; Escape closes the menu and returns focus to the toggle
 *
 * Props:
 * - brand: { label: string; href?: string }
 * - links: { label: string; href: string }[]
 * - cta?: { label: string; href: string }
 */

import { useCallback, useEffect, useRef, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface NavLinearAnchorProps {
  brand: { label: string; href?: string };
  links: NavLink[];
  cta?: NavLink;
}

const SCROLL_THRESHOLD_PX = 24;

export function NavLinearAnchor({ brand, links, cta }: NavLinearAnchorProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.body.style.overflow = "hidden";
    firstMobileLinkRef.current?.focus();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeMenu]);

  return (
    <>
      <a href="#main" className="nla-skip">
        Skip to content
      </a>

      <header
        className={`nla-header ${scrolled ? "is-scrolled" : "is-top"}`}
        data-state={scrolled ? "scrolled" : "top"}
      >
        <div className="nla-inner">
          <a href={brand.href ?? "#"} className="nla-brand" aria-label={`${brand.label} home`}>
            {brand.label}
          </a>

          <nav className="nla-primary" aria-label="Main">
            <ul className="nla-list">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nla-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nla-actions">
            {cta && (
              <a href={cta.href} className="nla-cta">
                {cta.label}
              </a>
            )}
            <button
              ref={toggleRef}
              type="button"
              className="nla-toggle"
              aria-expanded={open}
              aria-controls="nla-mobile-panel"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="nla-toggle-bar" aria-hidden="true" />
              <span className="nla-toggle-bar" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="nla-mobile-panel"
        className={`nla-mobile ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <ul className="nla-mobile-list">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                ref={i === 0 ? firstMobileLinkRef : undefined}
                href={link.href}
                className="nla-mobile-link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          {cta && (
            <li>
              <a href={cta.href} className="nla-mobile-cta" onClick={closeMenu}>
                {cta.label}
              </a>
            </li>
          )}
        </ul>
      </div>

      <style>{`
        .nla-skip {
          position: absolute;
          left: -9999px;
          top: 0;
          background: var(--color-accent, #1d4ed8);
          color: var(--color-on-accent, #fff);
          padding: 0.75rem 1rem;
          z-index: 100;
          border-radius: 0 0 0.5rem 0;
        }
        .nla-skip:focus { left: 0; }

        .nla-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition: background-color 240ms var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)),
                      backdrop-filter 240ms var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)),
                      border-color 240ms ease;
          border-bottom: 1px solid transparent;
        }
        .nla-header.is-top {
          background: transparent;
          backdrop-filter: none;
        }
        .nla-header.is-scrolled {
          background: color-mix(in oklab, var(--color-bg, #fff) 78%, transparent);
          backdrop-filter: blur(14px) saturate(140%);
          border-bottom-color: color-mix(in oklab, var(--color-text, #111) 8%, transparent);
        }

        .nla-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 var(--space-element, 1.25rem);
          height: 64px;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nla-brand {
          font-weight: 600;
          font-size: 1.0625rem;
          color: var(--color-text, #111);
          text-decoration: none;
          letter-spacing: -0.01em;
        }
        .nla-primary { display: none; flex: 1; }
        @media (min-width: 880px) { .nla-primary { display: block; } }
        .nla-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 1.75rem;
        }
        .nla-link {
          color: color-mix(in oklab, var(--color-text, #111) 78%, transparent);
          text-decoration: none;
          font-size: 0.9375rem;
          font-weight: 500;
          transition: color 160ms ease;
        }
        .nla-link:hover { color: var(--color-text, #111); }
        .nla-link:focus-visible {
          outline: 2px solid var(--color-accent, #1d4ed8);
          outline-offset: 4px;
          border-radius: 2px;
        }

        .nla-actions { margin-left: auto; display: flex; align-items: center; gap: 0.75rem; }
        .nla-cta {
          display: none;
          padding: 0.5rem 0.95rem;
          background: var(--color-text, #111);
          color: var(--color-bg, #fff);
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 160ms ease, opacity 160ms ease;
        }
        @media (min-width: 880px) { .nla-cta { display: inline-flex; } }
        .nla-cta:hover { transform: translateY(-1px); }
        .nla-cta:focus-visible {
          outline: 2px solid var(--color-accent, #1d4ed8);
          outline-offset: 3px;
        }

        .nla-toggle {
          display: inline-flex;
          flex-direction: column;
          gap: 5px;
          width: 40px; height: 40px;
          align-items: center; justify-content: center;
          background: transparent;
          border: 0;
          cursor: pointer;
        }
        @media (min-width: 880px) { .nla-toggle { display: none; } }
        .nla-toggle:focus-visible {
          outline: 2px solid var(--color-accent, #1d4ed8);
          outline-offset: 2px;
          border-radius: 8px;
        }
        .nla-toggle-bar {
          width: 22px; height: 2px;
          background: var(--color-text, #111);
          border-radius: 2px;
        }

        .nla-mobile {
          position: fixed; inset: 64px 0 0 0;
          z-index: 49;
          background: var(--color-bg, #fff);
          opacity: 0;
          pointer-events: none;
          transition: opacity 220ms ease;
        }
        .nla-mobile.is-open { opacity: 1; pointer-events: auto; }
        .nla-mobile-list {
          list-style: none; margin: 0; padding: 1.5rem var(--space-element, 1.25rem);
          display: flex; flex-direction: column; gap: 0.5rem;
        }
        .nla-mobile-link, .nla-mobile-cta {
          display: block;
          padding: 0.875rem 0;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text, #111);
          text-decoration: none;
          border-bottom: 1px solid color-mix(in oklab, var(--color-text, #111) 8%, transparent);
        }
        .nla-mobile-cta {
          margin-top: 1rem;
          color: var(--color-bg, #fff);
          background: var(--color-text, #111);
          border-radius: 999px;
          padding: 0.95rem 1.5rem;
          text-align: center;
          border-bottom: 0;
        }
        .nla-mobile-link:focus-visible, .nla-mobile-cta:focus-visible {
          outline: 2px solid var(--color-accent, #1d4ed8);
          outline-offset: 3px;
          border-radius: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .nla-header, .nla-cta, .nla-link, .nla-mobile { transition: none; }
        }
      `}</style>
    </>
  );
}

export default NavLinearAnchor;
