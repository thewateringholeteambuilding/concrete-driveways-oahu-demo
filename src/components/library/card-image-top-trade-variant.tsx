/**
 * Component: CardImageTopTradeVariant
 * Type: card
 * Slug: card-image-top-trade-variant
 * Style fit: editorial (great), swiss (great), industrial (great), organic-soft (ok), neo-brutal (ok), dark-luxury (poor)
 * Niche fit: trades broadly (great): plumbing, hvac, electrician, painting-contractor, fence-gate, flooring-contractor, roofing, mechanic, auto-body, landscaping, construction-concrete; ok for charter and dental
 * Tier fit: onepager (great), starter (great), growth (great)
 * Quality: pro
 * Source pattern: aesop.com card structure (image-top + restrained text) carried over to the trade-services use case where each card represents a service (Repair, Install, Maintenance, etc.) with a price-from anchor and a clear CTA. Denser information than the editorial anchor card, same visual restraint.
 * Spec: card-aesop-anchor.spec.md (Adaptation Notes)
 *
 * Visual logic
 * - Same Aesop image-top + restrained-text structure as the anchor card.
 * - Adds a small price-from line and a discrete CTA pill at the bottom.
 * - Description hard-clamped to 2 lines so the row stays even in a 3 or 4-col grid.
 * - No badges, no shadow at rest, no hard border. Hover lifts shadow subtly and zooms image 1.02.
 *
 * Accessibility
 * - Card is a semantic article. Primary link wraps title only (avoids nesting "book now" inside a parent <a>).
 * - The button is a real <button> (or <a> if href is provided), keyboard-focusable.
 *
 * Props:
 * - image: string
 * - alt: string
 * - serviceTitle: string (e.g. "Drain Repair", "Maintenance Plan")
 * - description: string (auto-clamped to 2 lines)
 * - priceFrom?: string (e.g. "From $149"; pass pre-formatted; omit if quote-only)
 * - priceFromLabel?: string (override the "Starting from" prefix)
 * - ctaLabel?: string (default "Book service")
 * - ctaHref: string
 * - aspectRatio?: '4/5' | '3/4' | '1/1' | '16/10' (default '4/5')
 */

import * as React from 'react'

export interface CardImageTopTradeVariantProps {
  image: string
  alt: string
  serviceTitle: string
  description: string
  priceFrom?: string
  priceFromLabel?: string
  ctaLabel?: string
  ctaHref: string
  aspectRatio?: '4/5' | '3/4' | '1/1' | '16/10'
}

export function CardImageTopTradeVariant({
  image,
  alt,
  serviceTitle,
  description,
  priceFrom,
  priceFromLabel = 'Starting from',
  ctaLabel = 'Book service',
  ctaHref,
  aspectRatio = '4/5',
}: CardImageTopTradeVariantProps) {
  return (
    <article className="card-trade">
      <div
        className="card-trade__media"
        style={{ aspectRatio: aspectRatio.replace('/', ' / ') }}
      >
        <img
          src={image}
          alt={alt}
          className="card-trade__image"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="card-trade__body">
        <h3 className="card-trade__title">
          <a href={ctaHref} className="card-trade__title-link">
            {serviceTitle}
          </a>
        </h3>
        <p className="card-trade__description">{description}</p>

        <div className="card-trade__footer">
          {priceFrom ? (
            <p className="card-trade__price">
              <span className="card-trade__price-label">{priceFromLabel}</span>
              <span className="card-trade__price-value">{priceFrom}</span>
            </p>
          ) : (
            <span className="card-trade__price-spacer" aria-hidden="true" />
          )}

          <a href={ctaHref} className="card-trade__cta">
            {ctaLabel}
            <span aria-hidden="true" className="card-trade__cta-arrow">
              →
            </span>
          </a>
        </div>
      </div>

      <style>{`
        .card-trade {
          display: flex;
          flex-direction: column;
          background: var(--color-bg);
          color: var(--color-text);
          border-radius: var(--radius-md);
          transition: box-shadow var(--duration-normal) var(--ease-out), transform var(--duration-normal) var(--ease-out);
          overflow: hidden;
        }
        .card-trade:hover {
          box-shadow: var(--shadow-card);
        }
        .card-trade__media {
          overflow: hidden;
          background: var(--color-surface);
          margin-bottom: var(--space-element);
          border-radius: var(--radius-sm);
        }
        .card-trade__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1);
          transition: transform var(--duration-slow) var(--ease-out);
          will-change: transform;
        }
        .card-trade:hover .card-trade__image {
          transform: scale(1.02);
        }
        .card-trade__body {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 0 0.25rem;
        }
        .card-trade__title {
          font-family: var(--font-heading);
          font-size: var(--text-h3);
          line-height: var(--leading-tight);
          letter-spacing: var(--letter-spacing-tight);
          margin: 0 0 0.5rem;
        }
        .card-trade__title-link {
          color: inherit;
          text-decoration: none;
          transition: color var(--duration-normal) var(--ease-out);
        }
        .card-trade__title-link:hover,
        .card-trade__title-link:focus-visible {
          color: var(--color-accent);
        }
        .card-trade__title-link:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 4px;
        }
        .card-trade__description {
          font-family: var(--font-body);
          font-size: var(--text-body);
          line-height: 1.55;
          color: var(--color-text-muted);
          margin: 0 0 var(--space-element);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-trade__footer {
          margin-top: auto;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-subtle);
        }
        .card-trade__price {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin: 0;
          font-family: var(--font-body);
        }
        .card-trade__price-label {
          font-size: var(--text-small);
          letter-spacing: var(--letter-spacing-wide);
          text-transform: uppercase;
          color: var(--color-text-muted);
        }
        .card-trade__price-value {
          font-family: var(--font-heading);
          font-size: var(--text-h3);
          line-height: 1.1;
          color: var(--color-text);
        }
        .card-trade__price-spacer {
          flex: 1;
        }
        .card-trade__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: var(--text-small);
          letter-spacing: 0.04em;
          color: var(--color-text);
          text-decoration: none;
          padding: 0.6rem 0;
          border-bottom: 1px solid currentColor;
          transition: color var(--duration-fast) var(--ease-out), gap var(--duration-fast) var(--ease-out);
        }
        .card-trade__cta:hover,
        .card-trade__cta:focus-visible {
          color: var(--color-accent);
          gap: 0.75rem;
        }
        .card-trade__cta:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 4px;
        }
        .card-trade__cta-arrow {
          transition: transform var(--duration-fast) var(--ease-out);
        }
        .card-trade__cta:hover .card-trade__cta-arrow {
          transform: translateX(2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .card-trade,
          .card-trade__image,
          .card-trade__title-link,
          .card-trade__cta,
          .card-trade__cta-arrow {
            transition: none;
          }
          .card-trade:hover .card-trade__image {
            transform: scale(1);
          }
          .card-trade__cta:hover .card-trade__cta-arrow {
            transform: none;
          }
        }
      `}</style>
    </article>
  )
}

export default CardImageTopTradeVariant
