/**
 * Component: CardIconOnlyBold
 * Type: card
 * Slug: card-icon-only-bold
 * Style fit: editorial (great), swiss (great), industrial (great), neo-brutal (great), bento (great), organic-soft (ok), dark-luxury (ok), liquid-glass (ok)
 * Niche fit: trades broadly (great), accounting (great), behavioral-health (great), optometry (great), family-dental (great), mortgage (great), watersport-charter (ok), surf-school (ok)
 * Tier fit: onepager (great), starter (great), growth (great)
 * Quality: pro
 * Source pattern: aesop.com restraint discipline carried into an icon-driven card. No image. Icon glyph + heading + 1-line description. Designed for service grids on info-dense pages where photography would crowd the layout.
 * Spec: card-aesop-anchor.spec.md (Adaptation Notes; icon variant)
 *
 * Visual logic
 * - Icon sits in a generous square space, weight does the work; no chip background, no circle frame.
 * - Heading restrained, description one line, optional discrete link.
 * - Hover: icon shifts up 2px, heading color shifts to accent, link underline thickens.
 * - Works perfectly in 2/3/4-col grids; the inherent rhythm comes from the icon's vertical alignment.
 *
 * Icon prop accepts a ReactNode so consumers can pass any SVG, lucide icon, or custom glyph.
 *
 * Props:
 * - icon: ReactNode (required; pass an SVG or icon component, sized 32-40px)
 * - title: string
 * - description: string (1 line, ~80 chars max)
 * - href?: string (if present, the whole card is keyboard-navigable; if absent, renders as a plain article)
 * - linkLabel?: string (default "Learn more"; only shown when href present)
 * - align?: 'left' | 'center' (default 'left'; center reads more as a value-prop, left reads as a service)
 */

import * as React from 'react'

export interface CardIconOnlyBoldProps {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
  linkLabel?: string
  align?: 'left' | 'center'
}

export function CardIconOnlyBold({
  icon,
  title,
  description,
  href,
  linkLabel = 'Learn more',
  align = 'left',
}: CardIconOnlyBoldProps) {
  const Wrapper: React.ElementType = href ? 'a' : 'div'
  const wrapperProps = href ? { href } : {}

  return (
    <article className={`card-icon-only card-icon-only--${align}`}>
      <Wrapper className="card-icon-only__inner" {...wrapperProps}>
        <div className="card-icon-only__icon" aria-hidden="true">
          {icon}
        </div>
        <h3 className="card-icon-only__title">{title}</h3>
        <p className="card-icon-only__description">{description}</p>
        {href ? (
          <span className="card-icon-only__link" aria-hidden="true">
            {linkLabel}
            <span className="card-icon-only__arrow">→</span>
          </span>
        ) : null}
      </Wrapper>

      <style>{`
        .card-icon-only {
          color: var(--color-text);
        }
        .card-icon-only__inner {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: var(--space-element) 0;
          color: inherit;
          text-decoration: none;
          outline: none;
        }
        a.card-icon-only__inner:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 8px;
          border-radius: var(--radius-sm);
        }
        .card-icon-only--center .card-icon-only__inner {
          align-items: center;
          text-align: center;
        }
        .card-icon-only__icon {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          width: 40px;
          height: 40px;
          color: var(--color-text);
          margin-bottom: 0.5rem;
          transform: translateY(0);
          transition: transform var(--duration-normal) var(--ease-out), color var(--duration-normal) var(--ease-out);
        }
        .card-icon-only--center .card-icon-only__icon {
          justify-content: center;
        }
        .card-icon-only__icon svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        a.card-icon-only__inner:hover .card-icon-only__icon,
        a.card-icon-only__inner:focus-visible .card-icon-only__icon {
          transform: translateY(-2px);
          color: var(--color-accent);
        }
        .card-icon-only__title {
          font-family: var(--font-heading);
          font-size: var(--text-h3);
          line-height: var(--leading-tight);
          letter-spacing: var(--letter-spacing-tight);
          margin: 0;
          color: var(--color-text);
          transition: color var(--duration-normal) var(--ease-out);
        }
        a.card-icon-only__inner:hover .card-icon-only__title,
        a.card-icon-only__inner:focus-visible .card-icon-only__title {
          color: var(--color-accent);
        }
        .card-icon-only__description {
          font-family: var(--font-body);
          font-size: var(--text-body);
          line-height: 1.5;
          color: var(--color-text-muted);
          margin: 0;
          max-width: 38ch;
        }
        .card-icon-only--center .card-icon-only__description {
          margin-left: auto;
          margin-right: auto;
        }
        .card-icon-only__link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
          font-family: var(--font-body);
          font-size: var(--text-small);
          letter-spacing: 0.04em;
          color: var(--color-text);
          border-bottom: 1px solid currentColor;
          padding-bottom: 1px;
          width: fit-content;
          transition: color var(--duration-fast) var(--ease-out), gap var(--duration-fast) var(--ease-out);
        }
        a.card-icon-only__inner:hover .card-icon-only__link,
        a.card-icon-only__inner:focus-visible .card-icon-only__link {
          color: var(--color-accent);
          gap: 0.75rem;
        }
        .card-icon-only__arrow {
          transition: transform var(--duration-fast) var(--ease-out);
        }
        a.card-icon-only__inner:hover .card-icon-only__arrow {
          transform: translateX(2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .card-icon-only__icon,
          .card-icon-only__title,
          .card-icon-only__link,
          .card-icon-only__arrow {
            transition: none;
          }
          a.card-icon-only__inner:hover .card-icon-only__icon,
          a.card-icon-only__inner:focus-visible .card-icon-only__icon {
            transform: none;
          }
          a.card-icon-only__inner:hover .card-icon-only__arrow {
            transform: none;
          }
        }
      `}</style>
    </article>
  )
}

export default CardIconOnlyBold
