/**
 * Component: SectionShowreelPullQuote
 * Type: section
 * Slug: section-showreel-pull-quote
 * Style fit: condensed-architectural (great), editorial (great), dark-luxury (great), industrial (ok), swiss (ok)
 * Niche fit: roofing (great), construction-concrete (great), custom-home-remodeler (great), restaurant (ok), behavioral-health (ok), real-estate (ok)
 * Quality: pro
 * Source pattern: hugobuildersllc.com . dark interlude block sitting between Services and Why.
 *   Single display headline, supporting line, optional CTA. Pure rhythm break.
 *
 * Composition: dark surface, large display headline left-aligned, single supporting paragraph,
 *   optional single CTA. Optionally embeds a background image at low opacity for atmosphere.
 *   Because this is a rhythm break, there are NO cards, NO grids, NO icons. The block does only
 *   one thing.
 *
 * Tokens consumed:
 * - --color-black, --color-text-on-dark
 * - --font-heading, --font-body, --text-h1, --text-body
 * - --space-section, --space-page-gutter
 *
 * Props:
 * - eyebrow?: string
 * - headline: string
 * - supporting?: string
 * - cta?: { label, href }
 * - backgroundImage?: string  (URL . HEAD-checked at build time if used)
 * - backgroundAlt?: string
 */

export interface SectionShowreelPullQuoteProps {
  eyebrow?: string
  headline: string
  supporting?: string
  cta?: { label: string; href: string }
  backgroundImage?: string
  backgroundAlt?: string
}

export function SectionShowreelPullQuote({
  eyebrow,
  headline,
  supporting,
  cta,
  backgroundImage,
  backgroundAlt,
}: SectionShowreelPullQuoteProps) {
  return (
    <section className="showreel-pull-quote" aria-labelledby="showreel-pull-quote-heading">
      {backgroundImage ? (
        <img
          className="showreel-pull-quote__bg"
          src={backgroundImage}
          alt={backgroundAlt ?? ''}
          loading="lazy"
          aria-hidden={backgroundAlt ? undefined : true}
        />
      ) : null}
      <div className="showreel-pull-quote__inner">
        {eyebrow ? <p className="showreel-pull-quote__eyebrow">{eyebrow}</p> : null}
        <h2 id="showreel-pull-quote-heading" className="showreel-pull-quote__headline">
          {headline}
        </h2>
        {supporting ? <p className="showreel-pull-quote__supporting">{supporting}</p> : null}
        {cta ? (
          <a href={cta.href} className="showreel-pull-quote__cta">
            <span>{cta.label}</span>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M1 7h15M11 1l5 6-5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ) : null}
      </div>
      <style>{`
        .showreel-pull-quote {
          position: relative;
          padding-block: var(--space-section, clamp(4rem, 3rem + 5vw, 10rem));
          padding-inline: var(--space-page-gutter, clamp(1.25rem, 4vw, 4rem));
          background: var(--color-black, #0d0d0d);
          color: var(--color-text-on-dark, #f4f4f4);
          overflow: hidden;
          isolation: isolate;
        }
        .showreel-pull-quote__bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.22;
          z-index: 0;
        }
        .showreel-pull-quote::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(13,13,13,0.4) 0%, rgba(13,13,13,0.7) 100%);
          z-index: 1;
          pointer-events: none;
        }
        .showreel-pull-quote__inner {
          position: relative;
          z-index: 2;
          max-width: var(--max-content-width, 1280px);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: clamp(1rem, 2vw, 1.75rem);
          align-items: flex-start;
        }
        .showreel-pull-quote__eyebrow {
          margin: 0;
          font-family: var(--font-accent, 'Inter', sans-serif);
          font-size: var(--text-small, 0.875rem);
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-text-on-dark, #f4f4f4);
          opacity: 0.72;
        }
        .showreel-pull-quote__headline {
          margin: 0;
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-weight: 600;
          font-size: clamp(2.25rem, 1rem + 6vw, 6rem);
          line-height: 0.98;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          max-width: 22ch;
        }
        .showreel-pull-quote__supporting {
          margin: 0;
          font-family: var(--font-body, 'Inter', sans-serif);
          font-size: clamp(1rem, 0.95rem + 0.4vw, 1.25rem);
          line-height: 1.55;
          color: var(--color-text-on-dark, #f4f4f4);
          opacity: 0.86;
          max-width: 56ch;
        }
        .showreel-pull-quote__cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 0.5rem;
          padding-block: 0.6rem;
          padding-inline: 0;
          font-family: var(--font-accent, 'Inter', sans-serif);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-text-on-dark, #f4f4f4);
          text-decoration: none;
          border-bottom: 2px solid var(--color-text-on-dark, #f4f4f4);
          transition: gap 280ms cubic-bezier(0.16,1,0.3,1);
        }
        .showreel-pull-quote__cta:hover { gap: 18px; }
        .showreel-pull-quote__cta:focus-visible {
          outline: 2px solid var(--color-text-on-dark, #f4f4f4);
          outline-offset: 4px;
        }
        @media (prefers-reduced-motion: reduce) {
          .showreel-pull-quote__cta { transition: none; }
        }
      `}</style>
    </section>
  )
}
