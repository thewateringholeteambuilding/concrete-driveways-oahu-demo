/**
 * Component: CtaStickyBottomBar
 * Type: cta
 * Slug: cta-sticky-bottom-bar
 * Style fit: industrial (great), swiss (great), neo-brutal (ok), bento (ok), editorial (ok), liquid-glass (ok), glassmorphism (ok), dark-luxury (poor)
 * Niche fit: hvac (great), plumbing (great), electrician (great), roofing (great), auto-body (great), mechanic (great), painting-contractor (great), construction-concrete (great), behavioral-health (ok), charter-fishing (ok), real-estate (ok)
 * Quality: pro
 * Source pattern: emergency-service mobile playbook . full-width sticky bar, mobile-only, dual action (call / form).
 *
 * Anchor reference: matches the spec's "sticky-bottom-bar" Phase 1B variant. Lives at the bottom of
 * mobile viewports (<= 767px), does not exist on desktop. Two side-by-side buttons (call + secondary).
 * Uses safe-area-inset for iOS home-bar clearance. iOS-style backdrop blur with a light fill so it
 * stays legible against any page background.
 *
 * IMPORTANT: pair this with a phone number derived from the lead record (Supabase `phone`).
 * Do NOT pass placeholder 555-* numbers . the build standard `build-no-placeholder-phone` will fail
 * the audit. If no phone is available for the lead, render `phoneHref={undefined}` and the call slot
 * will collapse to the form CTA only.
 *
 * Tokens consumed:
 * - --color-surface             bar background (translucent over blur)
 * - --color-text                primary text
 * - --color-accent              primary CTA fill
 * - --color-accent-foreground   primary CTA text
 * - --color-border              hairline border
 * - --color-focus-ring          focus ring
 * - --radius-md                 inner button radius (fallback 8px)
 * - --duration-fast / --duration-normal / --ease-out-expo
 *
 * Props:
 * - phoneHref?: string          tel:+1XXXXXXXXXX  . omit to render form-only
 * - phoneLabel?: string         visible label, defaults to 'Call now'
 * - ctaHref: string             form / booking URL
 * - ctaLabel?: string           defaults to 'Get a quote'
 * - hideAboveBreakpoint?: number  px breakpoint above which the bar hides (default 768)
 * - ariaLabel?: string          landmark label for the wrapping nav, defaults to 'Quick contact'
 */

import { type ReactNode } from 'react'

export interface CtaStickyBottomBarProps {
  phoneHref?: string
  phoneLabel?: string
  ctaHref: string
  ctaLabel?: string
  hideAboveBreakpoint?: number
  ariaLabel?: string
}

function PhoneIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

function ArrowIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CtaStickyBottomBar({
  phoneHref,
  phoneLabel = 'Call now',
  ctaHref,
  ctaLabel = 'Get a quote',
  hideAboveBreakpoint = 768,
  ariaLabel = 'Quick contact',
}: CtaStickyBottomBarProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className="cta-sticky-bottom-bar"
      data-cta="sticky-bottom-bar"
    >
      <div className="cta-sticky-bottom-bar__inner">
        {phoneHref ? (
          <a
            href={phoneHref}
            className="cta-sticky-bottom-bar__btn cta-sticky-bottom-bar__btn--secondary"
            aria-label={`${phoneLabel}, opens phone dialer`}
          >
            <PhoneIcon />
            <span>{phoneLabel}</span>
          </a>
        ) : null}
        <a
          href={ctaHref}
          className="cta-sticky-bottom-bar__btn cta-sticky-bottom-bar__btn--primary"
          data-full={phoneHref ? 'false' : 'true'}
        >
          <span>{ctaLabel}</span>
          <ArrowIcon />
        </a>
      </div>
      <style>{`
        .cta-sticky-bottom-bar {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 60;
          background: color-mix(in oklab, var(--color-surface, #ffffff) 92%, transparent);
          backdrop-filter: saturate(160%) blur(14px);
          -webkit-backdrop-filter: saturate(160%) blur(14px);
          border-top: 1px solid var(--color-border, color-mix(in oklab, var(--color-text, #111) 10%, transparent));
          padding-bottom: env(safe-area-inset-bottom, 0);
          transform: translateY(0);
          transition: transform var(--duration-normal, 300ms) var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1));
        }
        @media (min-width: ${hideAboveBreakpoint}px) {
          .cta-sticky-bottom-bar { display: none; }
        }
        .cta-sticky-bottom-bar__inner {
          display: flex;
          gap: 8px;
          padding: 10px 12px;
          max-width: 720px;
          margin: 0 auto;
        }
        .cta-sticky-bottom-bar__btn {
          flex: 1 1 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 0 16px;
          font-size: 0.9375rem;
          font-weight: 600;
          line-height: 1.2;
          border-radius: var(--radius-md, 8px);
          text-decoration: none;
          transition: transform var(--duration-fast, 150ms) var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1)),
                      background-color var(--duration-normal, 300ms) var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1)),
                      color var(--duration-normal, 300ms) var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1));
        }
        .cta-sticky-bottom-bar__btn--secondary {
          background: transparent;
          color: var(--color-text, #111);
          border: 1px solid var(--color-border, color-mix(in oklab, var(--color-text, #111) 18%, transparent));
        }
        .cta-sticky-bottom-bar__btn--primary {
          background: var(--color-accent, #635bff);
          color: var(--color-accent-foreground, #ffffff);
          border: 1px solid transparent;
        }
        .cta-sticky-bottom-bar__btn--primary[data-full="true"] {
          flex: 1 1 100%;
        }
        .cta-sticky-bottom-bar__btn:active {
          transform: scale(0.98);
        }
        .cta-sticky-bottom-bar__btn:focus-visible {
          outline: 2px solid var(--color-focus-ring, var(--color-accent, #635bff));
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-sticky-bottom-bar,
          .cta-sticky-bottom-bar__btn {
            transition: background-color var(--duration-normal, 300ms) linear,
                        color var(--duration-normal, 300ms) linear;
          }
          .cta-sticky-bottom-bar__btn:active {
            transform: none;
          }
        }
      `}</style>
    </nav>
  )
}
