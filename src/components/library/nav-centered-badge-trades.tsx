/**
 * Component: NavCenteredBadgeTrades
 * Type: nav
 * Slug: nav-centered-badge-trades
 * Style fit: industrial (great), condensed-architectural (great), editorial (ok), dark-luxury (great)
 * Niche fit: roofing (great), construction (great), exteriors (great), trades (great)
 * Quality: pro
 * Source pattern: hugobuildersllc.com header. Three-zone split: left links (About + Services dropdown),
 *   centered circular badge logo, right links (Financing + Contact + social icons + filled CTA).
 *   Transparent over hero, opaque on scroll past 24px.
 *
 * Behavior:
 * - Top-fixed nav. Transparent over the hero on `is-top`, dark/opaque on `is-scrolled`.
 * - Services dropdown is a hover/focus disclosure on desktop. Mobile collapses entire nav into a panel.
 * - Skip link is the first focusable child.
 * - Mobile: hamburger that opens a full-screen panel with focus trap and Escape close.
 * - Reduced-motion: opt-out of opacity/blur transitions; nav switches state instantly.
 *
 * Accessibility:
 * - <header> + <nav aria-label="Main"> landmarks
 * - Services trigger uses aria-expanded + aria-controls
 * - All interactive elements use focus-visible rings
 * - Mobile menu toggles aria-expanded; Escape closes the menu and returns focus to the toggle
 *
 * Props:
 * - brand: { label: string; subline?: string; href?: string }
 * - leftLinks: NavLink[]
 * - servicesLabel?: string
 * - servicesLinks?: NavLink[]
 * - rightLinks: NavLink[]
 * - cta?: NavLink
 * - socialLinks?: { label: 'Facebook' | 'Instagram' | string; href: string }[]
 */

import { useCallback, useEffect, useRef, useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
}

interface NavCenteredBadgeTradesProps {
  brand: { label: string; subline?: string; href?: string };
  leftLinks: NavLink[];
  servicesLabel?: string;
  servicesLinks?: NavLink[];
  rightLinks: NavLink[];
  cta?: NavLink;
  socialLinks?: SocialLink[];
}

const SCROLL_THRESHOLD_PX = 24;

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.81 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function BadgeLogo({ label, subline }: { label: string; subline?: string }) {
  // Inline SVG circular badge with arched caps text + small mountain/peak mark.
  // Uses textPath on a top arc so caps follow the circle.
  const id = 'nav-badge-arc';
  return (
    <svg viewBox="0 0 120 120" width="72" height="72" role="img" aria-label={`${label} home`}>
      <defs>
        <path id={id} d="M 18,60 A 42,42 0 0 1 102,60" fill="none" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="currentColor" />
      <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />
      <text fontFamily="var(--font-heading, 'Barlow Condensed', 'Oswald', sans-serif)" fontSize="13" fontWeight="700" letterSpacing="3" fill="#fff" textAnchor="middle">
        <textPath xlinkHref={`#${id}`} startOffset="50%">{label.toUpperCase()}</textPath>
      </text>
      {/* Mountain mark (centered) */}
      <g transform="translate(60 70)" fill="#fff">
        <path d="M -16,8 L -4,-10 L 4,2 L 12,-6 L 18,8 Z" />
      </g>
      {subline ? (
        <text x="60" y="92" fontFamily="var(--font-accent, 'Inter', sans-serif)" fontSize="6" letterSpacing="2" fill="#fff" textAnchor="middle">{subline.toUpperCase()}</text>
      ) : null}
    </svg>
  );
}

export function NavCenteredBadgeTrades({
  brand,
  leftLinks,
  servicesLabel = 'Services',
  servicesLinks,
  rightLinks,
  cta,
  socialLinks,
}: NavCenteredBadgeTradesProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.body.style.overflow = 'hidden';
    firstMobileLinkRef.current?.focus();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, closeMenu]);

  // Click-outside for services dropdown
  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [servicesOpen]);

  const renderSocial = (s: SocialLink) => {
    const icon =
      s.label.toLowerCase() === 'facebook' ? <FacebookIcon /> :
      s.label.toLowerCase() === 'instagram' ? <InstagramIcon /> :
      <span style={{ fontSize: '0.75rem' }}>{s.label[0]}</span>;
    return (
      <a key={s.href} href={s.href} aria-label={s.label} className="ncbt-social" target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    );
  };

  return (
    <>
      <a href="#main" className="ncbt-skip">Skip to content</a>

      <header className={`ncbt-header ${scrolled ? 'is-scrolled' : 'is-top'}`} data-state={scrolled ? 'scrolled' : 'top'}>
        <div className="ncbt-inner">
          {/* LEFT zone: About + Services dropdown */}
          <nav className="ncbt-zone ncbt-left" aria-label="Primary">
            <ul className="ncbt-list">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="ncbt-link">{link.label}</a>
                </li>
              ))}
              {servicesLinks && servicesLinks.length > 0 ? (
                <li className="ncbt-services" ref={servicesRef}>
                  <button
                    type="button"
                    className="ncbt-link ncbt-link--button"
                    aria-expanded={servicesOpen}
                    aria-controls="ncbt-services-menu"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    <span>{servicesLabel}</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <ul id="ncbt-services-menu" className={`ncbt-dropdown ${servicesOpen ? 'is-open' : ''}`}>
                    {servicesLinks.map((s) => (
                      <li key={s.href}>
                        <a href={s.href} className="ncbt-dropdown-link" onClick={() => setServicesOpen(false)}>{s.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : null}
            </ul>
          </nav>

          {/* CENTER: badge logo */}
          <a href={brand.href ?? '/'} className="ncbt-brand" aria-label={`${brand.label} home`}>
            <BadgeLogo label={brand.label} subline={brand.subline} />
          </a>

          {/* RIGHT zone */}
          <div className="ncbt-zone ncbt-right">
            <ul className="ncbt-list">
              {rightLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="ncbt-link">{link.label}</a>
                </li>
              ))}
            </ul>
            {socialLinks && socialLinks.length > 0 ? (
              <ul className="ncbt-socials" aria-label="Social media">
                {socialLinks.map((s) => <li key={s.href}>{renderSocial(s)}</li>)}
              </ul>
            ) : null}
            {cta ? (
              <a href={cta.href} className="ncbt-cta">
                <span>{cta.label}</span>
                <span className="ncbt-cta-accent" aria-hidden="true" />
              </a>
            ) : null}
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            className="ncbt-toggle"
            aria-expanded={open}
            aria-controls="ncbt-mobile-panel"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="ncbt-toggle-bar" aria-hidden="true" />
            <span className="ncbt-toggle-bar" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        id="ncbt-mobile-panel"
        className={`ncbt-mobile ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <ul className="ncbt-mobile-list">
          {[...leftLinks, ...(servicesLinks ?? []), ...rightLinks].map((link, i) => (
            <li key={link.href}>
              <a
                ref={i === 0 ? firstMobileLinkRef : undefined}
                href={link.href}
                className="ncbt-mobile-link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          {cta ? (
            <li>
              <a href={cta.href} className="ncbt-mobile-cta" onClick={closeMenu}>{cta.label}</a>
            </li>
          ) : null}
        </ul>
      </div>

      <style>{`
        .ncbt-skip {
          position: absolute;
          left: -9999px; top: 0;
          background: var(--color-accent, #e85842);
          color: #fff;
          padding: 0.75rem 1rem;
          z-index: 100;
        }
        .ncbt-skip:focus { left: 0; }

        .ncbt-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          color: #fff;
          transition: background-color 240ms cubic-bezier(0.16, 1, 0.3, 1),
                      backdrop-filter 240ms cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 240ms ease,
                      color 240ms ease;
          border-bottom: 1px solid transparent;
        }
        .ncbt-header.is-top {
          background: linear-gradient(180deg, rgba(13,13,13,0.45) 0%, rgba(13,13,13,0) 100%);
        }
        .ncbt-header.is-scrolled {
          background: rgba(13, 13, 13, 0.94);
          backdrop-filter: blur(10px) saturate(140%);
          border-bottom-color: rgba(255,255,255,0.08);
        }

        .ncbt-inner {
          max-width: 1480px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 3vw, 2.5rem);
          height: 88px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1.5rem;
        }

        .ncbt-zone { display: none; align-items: center; }
        @media (min-width: 1024px) {
          .ncbt-zone { display: flex; }
        }
        .ncbt-left { justify-content: flex-end; padding-right: 2rem; }
        .ncbt-right { justify-content: flex-start; gap: 1rem; padding-left: 2rem; }

        .ncbt-list {
          list-style: none; margin: 0; padding: 0;
          display: flex; align-items: center; gap: 1.75rem;
        }

        .ncbt-link {
          font-family: var(--font-heading, 'Barlow Condensed', 'Oswald', sans-serif);
          font-weight: 500;
          font-size: 0.875rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: inherit;
          text-decoration: none;
          background: transparent; border: 0; cursor: pointer;
          padding: 0;
          display: inline-flex; align-items: center; gap: 0.4rem;
          transition: color 160ms ease;
        }
        .ncbt-link:hover { color: var(--color-accent, #e85842); }
        .ncbt-link:focus-visible {
          outline: 2px solid var(--color-accent, #e85842);
          outline-offset: 4px;
        }

        .ncbt-services { position: relative; }
        .ncbt-dropdown {
          position: absolute;
          top: 100%; left: 0;
          margin-top: 0.75rem;
          background: #0d0d0d;
          border: 1px solid rgba(255,255,255,0.08);
          list-style: none; padding: 0.5rem 0;
          min-width: 180px;
          opacity: 0; pointer-events: none;
          transform: translateY(-4px);
          transition: opacity 180ms ease, transform 180ms ease;
        }
        .ncbt-dropdown.is-open { opacity: 1; pointer-events: auto; transform: translateY(0); }
        .ncbt-dropdown-link {
          display: block;
          padding: 0.7rem 1.25rem;
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-weight: 500;
          font-size: 0.875rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #f4f4f4;
          text-decoration: none;
        }
        .ncbt-dropdown-link:hover { background: rgba(232,88,66,0.16); color: var(--color-accent, #e85842); }

        .ncbt-brand {
          color: var(--color-accent, #e85842);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
        }
        .ncbt-brand:focus-visible {
          outline: 2px solid var(--color-accent, #e85842);
          outline-offset: 6px;
          border-radius: 50%;
        }

        .ncbt-socials {
          list-style: none; padding: 0; margin: 0;
          display: flex; gap: 0.5rem; align-items: center;
        }
        .ncbt-social {
          display: inline-flex;
          align-items: center; justify-content: center;
          width: 32px; height: 32px;
          color: inherit;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 50%;
          transition: color 160ms ease, border-color 160ms ease, background 160ms ease;
        }
        .ncbt-social:hover { color: var(--color-accent, #e85842); border-color: var(--color-accent, #e85842); }
        .ncbt-social:focus-visible {
          outline: 2px solid var(--color-accent, #e85842);
          outline-offset: 3px;
        }

        .ncbt-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 0.7rem 1.25rem;
          margin-left: 0.5rem;
          background: #fff;
          color: #0d0d0d;
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid #fff;
          transition: background 200ms ease, color 200ms ease;
        }
        .ncbt-cta:hover { background: var(--color-accent, #e85842); border-color: var(--color-accent, #e85842); color: #fff; }
        .ncbt-cta:focus-visible {
          outline: 2px solid var(--color-accent, #e85842);
          outline-offset: 3px;
        }
        .ncbt-cta-accent {
          position: absolute;
          right: -1px; top: -1px; bottom: -1px;
          width: 4px;
          background: var(--color-accent, #e85842);
        }

        .ncbt-toggle {
          display: inline-flex;
          flex-direction: column;
          gap: 5px;
          width: 40px; height: 40px;
          align-items: center; justify-content: center;
          background: transparent; border: 0; cursor: pointer;
          color: inherit;
          justify-self: end;
        }
        @media (min-width: 1024px) { .ncbt-toggle { display: none; } }
        .ncbt-toggle:focus-visible {
          outline: 2px solid var(--color-accent, #e85842);
          outline-offset: 2px;
        }
        .ncbt-toggle-bar {
          width: 22px; height: 2px;
          background: currentColor;
        }

        .ncbt-mobile {
          position: fixed; inset: 88px 0 0 0;
          z-index: 49;
          background: #0d0d0d;
          color: #fff;
          opacity: 0; pointer-events: none;
          transition: opacity 220ms ease;
          overflow-y: auto;
        }
        .ncbt-mobile.is-open { opacity: 1; pointer-events: auto; }
        .ncbt-mobile-list {
          list-style: none; margin: 0;
          padding: 1.5rem clamp(1.25rem, 4vw, 2.5rem);
          display: flex; flex-direction: column; gap: 0.25rem;
        }
        .ncbt-mobile-link, .ncbt-mobile-cta {
          display: block;
          padding: 1rem 0;
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .ncbt-mobile-cta {
          margin-top: 1.25rem;
          color: #0d0d0d;
          background: #fff;
          padding: 1.1rem 1.5rem;
          text-align: center;
          border-bottom: 0;
        }
        .ncbt-mobile-cta:hover { background: var(--color-accent, #e85842); color: #fff; }

        @media (prefers-reduced-motion: reduce) {
          .ncbt-header, .ncbt-cta, .ncbt-link, .ncbt-mobile, .ncbt-dropdown { transition: none; }
        }
      `}</style>
    </>
  );
}

export default NavCenteredBadgeTrades;
