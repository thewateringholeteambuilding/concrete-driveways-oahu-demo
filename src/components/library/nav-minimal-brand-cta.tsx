/**
 * Component: NavMinimalBrandCta
 * Type: nav
 * Slug: nav-minimal-brand-cta
 * Style fit: condensed-architectural (signature), industrial (great), swiss (great), neo-brutal (great), editorial (ok)
 * Niche fit: roofing (great), construction (great), trades (great), siding (great), fence (great), deck-patio (great), auto-body (ok)
 * Quality: pro
 * Source pattern: hugobuildersllc.com header (anchored 2026-04-27)
 *
 * Anchor reference: Hugo Builders LLC's header is brand + single CTA, full stop. No nav links,
 * no dropdowns, no hamburger. The boss flagged this as the right discipline level for
 * craftsmanship-led trades sites: "I like on hugo builders website, their header is just the
 * background, logo and CTA, very simple and straightforward."
 *
 * Design thesis: when the page is a one-pager-flow (or Starter with route-level navigation
 * delegated to the footer), removing nav links reduces cognitive load to a single conversion
 * decision: "do I want this CTA?" The brand is enough orientation; the CTA is the only choice.
 *
 * Behavior:
 * - Top-fixed header, transparent over the hero, fades to opaque + subtle border on scroll past 24px.
 * - Brand on the left (clickable to home), CTA on the right.
 * - No mobile menu (nothing to put in it). Mobile gets the same brand + CTA, slightly tighter.
 * - Reduced-motion: opt-out of opacity/blur transitions; nav switches state instantly.
 *
 * Accessibility:
 * - <header> + <nav aria-label="Primary"> landmarks
 * - Brand link has accessible name from `brand.label`
 * - CTA has visible focus ring via --color-focus-ring (falls back to --color-accent)
 * - SkipLink is mounted separately at App level (not duplicated here)
 *
 * Tokens consumed:
 * - --color-bg, --color-text, --color-text-muted, --color-accent, --color-accent-foreground, --color-border
 * - --space-element, --radius-md, --duration-normal, --ease-out-expo
 *
 * Props:
 * - brand: { label: string; href?: string; logoMark?: ReactNode }
 * - cta: { label: string; href: string }
 */

import { useEffect, useState, type ReactNode } from "react";

interface NavMinimalBrandCtaProps {
  brand: { label: string; href?: string; logoMark?: ReactNode };
  cta: { label: string; href: string };
}

const SCROLL_THRESHOLD_PX = 24;

export function NavMinimalBrandCta({ brand, cta }: NavMinimalBrandCtaProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`nmbc-header${scrolled ? " nmbc-header--scrolled" : ""}`}
        data-scrolled={scrolled ? "true" : "false"}
      >
        <nav className="nmbc-inner" aria-label="Primary">
          <a href={brand.href ?? "/"} className="nmbc-brand">
            {brand.logoMark ? <span className="nmbc-brand__mark">{brand.logoMark}</span> : null}
            <span className="nmbc-brand__label">{brand.label}</span>
          </a>
          <a href={cta.href} className="nmbc-cta">
            {cta.label}
          </a>
        </nav>
      </header>
      <style>{`
        .nmbc-header {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 50;
          background: transparent;
          color: var(--color-bg, #ffffff);
          border-bottom: 1px solid transparent;
          transition: background-color var(--duration-normal, 300ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)),
                      color var(--duration-normal, 300ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)),
                      border-color var(--duration-normal, 300ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
        }
        .nmbc-header--scrolled {
          background: var(--color-bg, #ffffff);
          color: var(--color-text, #111111);
          border-bottom-color: var(--color-border, color-mix(in oklab, var(--color-text, #111) 10%, transparent));
        }
        .nmbc-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 14px clamp(1rem, 0.5rem + 2vw, 2rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .nmbc-brand {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading, var(--font-body, system-ui));
          font-weight: 700;
          font-size: clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);
          letter-spacing: 0.01em;
          color: inherit;
          text-decoration: none;
          line-height: 1.1;
        }
        .nmbc-brand__mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
        }
        .nmbc-brand:focus-visible {
          outline: 2px solid var(--color-focus-ring, var(--color-accent, currentColor));
          outline-offset: 4px;
          border-radius: 2px;
        }
        .nmbc-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          background: var(--color-accent, var(--color-text, #111));
          color: var(--color-accent-foreground, var(--color-bg, #fff));
          font-family: var(--font-heading, var(--font-body, system-ui));
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid transparent;
          border-radius: var(--radius-md, 4px);
          transition: transform var(--duration-fast, 150ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
        }
        .nmbc-cta:hover { transform: translateY(-1px); }
        .nmbc-cta:active { transform: translateY(0); }
        .nmbc-cta:focus-visible {
          outline: 2px solid var(--color-focus-ring, var(--color-accent, currentColor));
          outline-offset: 3px;
        }
        @media (max-width: 540px) {
          .nmbc-inner { padding: 10px 1rem; }
          .nmbc-cta { padding: 8px 14px; font-size: 0.8125rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .nmbc-header { transition: none; }
          .nmbc-cta { transition: none; }
          .nmbc-cta:hover { transform: none; }
        }
      `}</style>
    </>
  );
}
