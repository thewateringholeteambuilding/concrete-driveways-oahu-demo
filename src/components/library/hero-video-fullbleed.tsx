/**
 * Component: HeroVideoFullbleed
 * Type: hero
 * Slug: hero-video-fullbleed
 * Style fit: condensed-architectural (great), editorial (great), dark-luxury (great), industrial (ok), swiss (ok)
 * Niche fit: roofing (great), construction-concrete (great), custom-home-remodeler (great), landscaping (ok), watersport-charter (great), restaurant (ok)
 * Quality: pro
 * Source pattern: hugobuildersllc.com hero . full-bleed background video with dark scrim, stacked
 *   left-aligned uppercase display headline, dual CTAs (primary + ghost), and a scroll-down
 *   indicator anchored at the bottom.
 *
 * Composition: <video> autoplay muted loop fills the viewport; a 60% black scrim sits over it for
 *   contrast; an absolutely-positioned headline + CTAs occupy the lower-left third; a small
 *   "Scroll" indicator sits centered along the bottom edge. Falls back to a still poster image
 *   when the video fails to load OR when prefers-reduced-motion is set.
 *
 * Tokens consumed:
 * - --font-heading, --font-body
 * - --text-hero, --text-body, --text-small
 * - --letter-spacing-display, --letter-spacing-wide
 * - --space-page-gutter, --space-element
 * - --color-text-on-dark (fallback white)
 *
 * Props:
 * - eyebrow?: string             - small uppercase kicker above the headline
 * - headline: string             - display headline (rendered uppercase)
 * - subhead?: string             - one-line supporting copy
 * - videoSrc: string             - mp4 URL for the background video (HEAD-checked at build time)
 * - posterSrc: string            - still image fallback (HEAD-checked at build time)
 * - posterAlt: string            - accessibility text for the poster image
 * - primaryCta: { label, href }  - primary filled CTA
 * - secondaryCta?: { label, href } - optional ghost CTA
 * - showScrollIndicator?: boolean - default true
 *
 * Accessibility:
 * - Video has aria-hidden="true" and is purely decorative; meaningful content is in the headline + poster alt.
 * - Honors prefers-reduced-motion: video is paused and the poster shows instead.
 * - Scroll indicator is keyboard-focusable and labelled.
 */

import { useEffect, useRef } from 'react'

export interface HeroVideoFullbleedProps {
  eyebrow?: string
  headline: string
  subhead?: string
  videoSrc: string
  posterSrc: string
  posterAlt: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  showScrollIndicator?: boolean
}

export function HeroVideoFullbleed({
  eyebrow,
  headline,
  subhead,
  videoSrc,
  posterSrc,
  posterAlt,
  primaryCta,
  secondaryCta,
  showScrollIndicator = true,
}: HeroVideoFullbleedProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const v = videoRef.current
    if (!v) return
    if (reduced) {
      v.pause()
    }
  }, [])

  return (
    <section className="hero-video-fullbleed" aria-labelledby="hero-video-fullbleed-heading">
      <div className="hero-video-fullbleed__media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video-fullbleed__video"
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc}
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Poster sits behind the video so a slow video load still shows the still */}
        <img
          src={posterSrc}
          alt={posterAlt}
          className="hero-video-fullbleed__poster"
          loading="eager"
          decoding="async"
        />
        <div className="hero-video-fullbleed__scrim" />
      </div>
      <div className="hero-video-fullbleed__content">
        {eyebrow ? <p className="hero-video-fullbleed__eyebrow">{eyebrow}</p> : null}
        <h1 id="hero-video-fullbleed-heading" className="hero-video-fullbleed__headline">
          {headline}
        </h1>
        {subhead ? <p className="hero-video-fullbleed__subhead">{subhead}</p> : null}
        <div className="hero-video-fullbleed__ctas">
          <a
            href={primaryCta.href}
            className="hero-video-fullbleed__btn hero-video-fullbleed__btn--primary"
          >
            {primaryCta.label}
          </a>
          {secondaryCta ? (
            <a
              href={secondaryCta.href}
              className="hero-video-fullbleed__btn hero-video-fullbleed__btn--ghost"
            >
              {secondaryCta.label}
            </a>
          ) : null}
        </div>
      </div>
      {showScrollIndicator ? (
        <a href="#after-hero" className="hero-video-fullbleed__scroll" aria-label="Scroll to next section">
          <span>Scroll</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden="true">
            <path d="M7 1v18M1 13l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      ) : null}
      <style>{`
        .hero-video-fullbleed {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100svh;
          overflow: hidden;
          color: var(--color-text-on-dark, #ffffff);
          background: #000;
          isolation: isolate;
        }
        .hero-video-fullbleed__media {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-video-fullbleed__poster,
        .hero-video-fullbleed__video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-video-fullbleed__poster { z-index: 0; }
        .hero-video-fullbleed__video { z-index: 1; }
        .hero-video-fullbleed__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.78) 100%);
          z-index: 2;
        }
        .hero-video-fullbleed__content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: clamp(0.75rem, 1vw, 1.25rem);
          min-height: 100vh;
          min-height: 100svh;
          padding: var(--space-page-gutter, clamp(1.25rem, 4vw, 4rem));
          padding-block-end: clamp(5rem, 12vh, 9rem);
          max-width: 1280px;
          margin: 0 auto;
        }
        .hero-video-fullbleed__eyebrow {
          margin: 0;
          font-family: var(--font-accent, 'Inter', sans-serif);
          font-size: var(--text-small, 0.875rem);
          font-weight: 500;
          letter-spacing: var(--letter-spacing-wide, 0.18em);
          text-transform: uppercase;
          color: var(--color-text-on-dark, #ffffff);
          opacity: 0.85;
        }
        .hero-video-fullbleed__headline {
          margin: 0;
          font-family: var(--font-heading, 'Barlow Condensed', 'Oswald', sans-serif);
          font-weight: 600;
          font-size: var(--text-hero, clamp(3rem, 1rem + 7vw, 8rem));
          line-height: 0.95;
          letter-spacing: var(--letter-spacing-display, -0.01em);
          text-transform: uppercase;
          color: var(--color-text-on-dark, #ffffff);
          max-width: 22ch;
        }
        .hero-video-fullbleed__subhead {
          margin: 0;
          font-family: var(--font-body, 'Inter', sans-serif);
          font-size: var(--text-body, 1.0625rem);
          line-height: 1.55;
          color: var(--color-text-on-dark, #ffffff);
          opacity: 0.92;
          max-width: 52ch;
        }
        .hero-video-fullbleed__ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .hero-video-fullbleed__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 52px;
          padding: 0 28px;
          font-family: var(--font-accent, 'Inter', sans-serif);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 0;
          transition: transform 200ms cubic-bezier(0.16,1,0.3,1),
                      background-color 280ms cubic-bezier(0.16,1,0.3,1),
                      color 280ms cubic-bezier(0.16,1,0.3,1);
        }
        .hero-video-fullbleed__btn--primary {
          background: var(--color-text-on-dark, #ffffff);
          color: var(--color-black, #0d0d0d);
          border: 2px solid var(--color-text-on-dark, #ffffff);
        }
        .hero-video-fullbleed__btn--primary:hover {
          background: transparent;
          color: var(--color-text-on-dark, #ffffff);
        }
        .hero-video-fullbleed__btn--ghost {
          background: transparent;
          color: var(--color-text-on-dark, #ffffff);
          border: 2px solid rgba(255,255,255,0.6);
        }
        .hero-video-fullbleed__btn--ghost:hover {
          border-color: var(--color-text-on-dark, #ffffff);
          background: rgba(255,255,255,0.08);
        }
        .hero-video-fullbleed__btn:focus-visible {
          outline: 2px solid var(--color-text-on-dark, #ffffff);
          outline-offset: 3px;
        }
        .hero-video-fullbleed__btn:active { transform: scale(0.98); }
        .hero-video-fullbleed__scroll {
          position: absolute;
          z-index: 4;
          left: 50%;
          bottom: clamp(1.25rem, 3vw, 2rem);
          transform: translateX(-50%);
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: var(--color-text-on-dark, #ffffff);
          opacity: 0.8;
          font-family: var(--font-accent, 'Inter', sans-serif);
          font-size: 0.7rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          animation: hero-video-fb-bob 2.4s ease-in-out infinite;
        }
        .hero-video-fullbleed__scroll:hover { opacity: 1; }
        .hero-video-fullbleed__scroll:focus-visible {
          outline: 2px solid var(--color-text-on-dark, #ffffff);
          outline-offset: 6px;
        }
        @keyframes hero-video-fb-bob {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 6px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-video-fullbleed__scroll { animation: none; }
          .hero-video-fullbleed__btn:active { transform: none; }
          .hero-video-fullbleed__video { display: none; }
        }
      `}</style>
    </section>
  )
}
