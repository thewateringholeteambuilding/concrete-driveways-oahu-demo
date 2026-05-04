/**
 * Component: TrustBarCertifications
 * Type: section
 * Slug: trust-bar-certifications
 * Style fit: condensed-architectural (great), industrial (great), swiss (great), editorial (ok), neo-brutal (great)
 * Niche fit: roofing (great), construction-concrete (great), painting-contractor (great), hvac (great), electrician (great), plumbing (great), auto-body (great), behavioral-health (ok)
 * Quality: pro
 * Source pattern: hugobuildersllc.com . text-first cert strip directly under the hero. No logos,
 *   no carousel; the LABEL is the trust signal. Each row carries a small inline SVG mark.
 *
 * Composition: a horizontally-laid-out strip of 4-6 certifications. Each cert is rendered as
 *   `<svg-mark> <bold label> <thin detail>` and the strip wraps to two rows on mobile. The strip
 *   sits on the surface color and is bookended by hairline rules top + bottom.
 *
 * Tokens consumed:
 * - --color-bg, --color-text, --color-text-muted, --color-border
 * - --font-heading, --font-accent, --letter-spacing-wide, --text-small
 * - --space-page-gutter, --space-block
 *
 * Props:
 * - certifications: { mark: 'shield' | 'star' | 'check' | 'medal' | 'cert' | 'leaf', label, detail? }[]
 * - ariaLabel?: string  default 'Certifications and credentials'
 * - tone?: 'light' | 'dark' default 'light'
 */

import { type ReactNode } from 'react'

export type CertMarkName = 'shield' | 'star' | 'check' | 'medal' | 'cert' | 'leaf'

export interface CertificationItem {
  mark: CertMarkName
  label: string
  detail?: string
}

export interface TrustBarCertificationsProps {
  certifications: CertificationItem[]
  ariaLabel?: string
  tone?: 'light' | 'dark'
}

function CertMark({ name }: { name: CertMarkName }): ReactNode {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false as const,
  }
  switch (name) {
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'star':
      return (
        <svg {...common}>
          <path d="M12 2l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17l-6.1 3.5 1.5-6.8L2.2 9l6.9-.7L12 2z" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5l3 3 5-6" />
        </svg>
      )
    case 'medal':
      return (
        <svg {...common}>
          <path d="M7 2l5 8 5-8" />
          <circle cx="12" cy="16" r="6" />
          <path d="M9.5 16l1.5 1.5 3-3.5" />
        </svg>
      )
    case 'cert':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="0" />
          <path d="M7 9h10M7 13h6" />
          <path d="M16 17l1 4 2-1.5L21 21l-1-4" />
        </svg>
      )
    case 'leaf':
      return (
        <svg {...common}>
          <path d="M5 19c8 0 14-6 14-14C9 5 5 11 5 19z" />
          <path d="M5 19c2-4 5-7 9-9" />
        </svg>
      )
  }
}

export function TrustBarCertifications({
  certifications,
  ariaLabel = 'Certifications and credentials',
  tone = 'light',
}: TrustBarCertificationsProps) {
  return (
    <section
      aria-label={ariaLabel}
      className={`trust-bar-certs trust-bar-certs--${tone}`}
    >
      <div className="trust-bar-certs__inner">
        <ul className="trust-bar-certs__list">
          {certifications.map((c) => (
            <li key={c.label} className="trust-bar-certs__item">
              <span className="trust-bar-certs__mark">
                <CertMark name={c.mark} />
              </span>
              <span className="trust-bar-certs__copy">
                <span className="trust-bar-certs__label">{c.label}</span>
                {c.detail ? <span className="trust-bar-certs__detail">{c.detail}</span> : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        .trust-bar-certs {
          padding-block: clamp(1.5rem, 3vw, 2.25rem);
          padding-inline: var(--space-page-gutter, clamp(1.25rem, 4vw, 4rem));
          background: var(--color-bg, #f4f4f4);
          color: var(--color-text, #0d0d0d);
          border-block: 1px solid var(--color-border, rgba(13,13,13,0.12));
        }
        .trust-bar-certs--dark {
          background: var(--color-black, #0d0d0d);
          color: var(--color-text-on-dark, #f4f4f4);
          border-color: rgba(255,255,255,0.12);
        }
        .trust-bar-certs__inner {
          max-width: var(--max-content-width, 1280px);
          margin: 0 auto;
        }
        .trust-bar-certs__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem 1.5rem;
        }
        @media (min-width: 720px) {
          .trust-bar-certs__list {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 1.25rem 2rem;
          }
        }
        .trust-bar-certs__item {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }
        .trust-bar-certs__mark {
          flex: 0 0 auto;
          display: inline-flex;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          border: 1px solid currentColor;
          color: var(--color-text, #0d0d0d);
        }
        .trust-bar-certs--dark .trust-bar-certs__mark {
          color: var(--color-text-on-dark, #f4f4f4);
        }
        .trust-bar-certs__copy {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .trust-bar-certs__label {
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-weight: 600;
          font-size: clamp(0.95rem, 0.85rem + 0.4vw, 1.125rem);
          letter-spacing: 0.02em;
          text-transform: uppercase;
          line-height: 1.1;
        }
        .trust-bar-certs__detail {
          font-family: var(--font-accent, 'Inter', sans-serif);
          font-size: 0.75rem;
          line-height: 1.3;
          color: var(--color-text-muted, #666);
          opacity: 0.85;
        }
        .trust-bar-certs--dark .trust-bar-certs__detail { opacity: 0.7; }
      `}</style>
    </section>
  )
}
