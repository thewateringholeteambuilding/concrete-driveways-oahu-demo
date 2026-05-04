/**
 * Component: CtaSquareBoldVariant
 * Type: cta
 * Slug: cta-square-bold-variant
 * Style fit: industrial (great), neo-brutal (great), swiss (great), bento (ok), editorial (ok), liquid-glass (poor), glassmorphism (poor)
 * Niche fit: construction-concrete (great), painting-contractor (great), roofing (great), flooring-contractor (great), hvac (great), electrician (great), plumbing (great), auto-body (great), mechanic (great), behavioral-health (poor)
 * Quality: pro
 * Source pattern: industrial / trades aesthetic . sharper edges, heavier type weight, square corners.
 *
 * Anchor reference: same micro-physics envelope as CtaStripeAnchor (translateY + scale on hover, expo
 * easing) but visually weighted toward trades. Square corners (radius-md, ~6px), font-weight 700,
 * uppercase tracking, thicker chevron stroke, deeper hover shadow. Hit target hardened at 48px to
 * suit gloved hands on jobsite mobile use.
 *
 * Tokens consumed:
 * - --color-accent              base fill
 * - --color-accent-hover        hover fill
 * - --color-accent-foreground   text + chevron color
 * - --color-focus-ring          focus-visible ring
 * - --radius-md                 sharp corner radius (fallback 6px)
 * - --duration-fast / --duration-normal
 * - --ease-out-expo
 *
 * Props:
 * - href: string
 * - children: ReactNode
 * - variant?: 'primary' | 'secondary'   default 'primary'
 * - size?: 'md' | 'lg'                  default 'md'  (no sm . trades demand a heavy hit target)
 * - showChevron?: boolean               default true
 * - ariaLabel?: string
 * - className?: string
 * - onClick?: MouseEventHandler
 */

import { type MouseEventHandler, type ReactNode } from 'react'

export interface CtaSquareBoldVariantProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  showChevron?: boolean
  ariaLabel?: string
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

const SIZE_MAP = {
  md: { padY: '14px', padX: '24px', font: '0.875rem', minH: '48px' },
  lg: { padY: '18px', padX: '32px', font: '0.9375rem', minH: '56px' },
} as const

export function CtaSquareBoldVariant({
  href,
  children,
  variant = 'primary',
  size = 'md',
  showChevron = true,
  ariaLabel,
  className,
  onClick,
}: CtaSquareBoldVariantProps) {
  const dims = SIZE_MAP[size]
  const isPrimary = variant === 'primary'

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    paddingBlock: dims.padY,
    paddingInline: dims.padX,
    minHeight: dims.minH,
    fontSize: dims.font,
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-md, 6px)',
    background: isPrimary
      ? 'var(--color-accent, #c2410c)'
      : 'transparent',
    color: isPrimary
      ? 'var(--color-accent-foreground, #ffffff)'
      : 'var(--color-accent, #c2410c)',
    border: isPrimary
      ? '2px solid var(--color-accent, #c2410c)'
      : '2px solid var(--color-accent, #c2410c)',
    textDecoration: 'none',
    cursor: 'pointer',
    transition:
      'transform var(--duration-fast, 150ms) var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1)),' +
      ' background-color var(--duration-normal, 300ms) var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1)),' +
      ' box-shadow var(--duration-normal, 300ms) var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1)),' +
      ' color var(--duration-normal, 300ms) var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1))',
    willChange: 'transform',
  } as const

  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={['cta-square-bold', `cta-square-bold--${variant}`, className]
        .filter(Boolean)
        .join(' ')}
      style={baseStyle}
      data-cta="square-bold-variant"
    >
      <span>{children}</span>
      {showChevron ? (
        <svg
          aria-hidden="true"
          focusable="false"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          style={{
            transition:
              'transform var(--duration-normal, 300ms) var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1))',
          }}
          data-chevron
        >
          <path
            d="M6 4l5 5-5 5"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      ) : null}
      <style>{`
        .cta-square-bold:hover {
          background-color: var(--color-accent-hover, color-mix(in oklab, var(--color-accent, #c2410c) 85%, #000));
          transform: translateY(-2px);
          box-shadow: 4px 4px 0 0 color-mix(in oklab, var(--color-accent, #c2410c) 30%, #000);
        }
        .cta-square-bold--secondary:hover {
          background-color: var(--color-accent, #c2410c);
          color: var(--color-accent-foreground, #ffffff);
        }
        .cta-square-bold:hover [data-chevron] {
          transform: translateX(3px);
        }
        .cta-square-bold:active {
          transform: translateY(0);
          box-shadow: 1px 1px 0 0 color-mix(in oklab, var(--color-accent, #c2410c) 30%, #000);
          transition-duration: var(--duration-fast, 150ms);
        }
        .cta-square-bold:focus-visible {
          outline: 3px solid var(--color-focus-ring, var(--color-accent, #c2410c));
          outline-offset: 3px;
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-square-bold,
          .cta-square-bold [data-chevron] {
            transition: background-color var(--duration-normal, 300ms) linear,
                        color var(--duration-normal, 300ms) linear;
          }
          .cta-square-bold:hover,
          .cta-square-bold:active {
            transform: none;
            box-shadow: none;
          }
          .cta-square-bold:hover [data-chevron] {
            transform: none;
          }
        }
      `}</style>
    </a>
  )
}
