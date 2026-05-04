/**
 * Component: HeroIndustrialVariant
 * Type: hero
 * Style fit: industrial (great), neo-brutal (great), swiss (ok), editorial (ok), liquid-glass (poor), organic-soft (poor)
 * Niche fit: construction-concrete (great), electrician (great), plumbing (great), hvac (great), fence-gate (great), roofing (great), auto-body (great), mortgage (ok), watersport-charter (poor)
 * Quality: pro
 * Source pattern: bluemoreyachting.com hero, adapted for trades - same split layout + floating
 *   overlay pattern, but iron-edge typography, hard-edge offset shadow, uppercase weighty
 *   headline, and bolder color contrast. The keyword inside the headline is rendered as a
 *   solid color block instead of a weight bump.
 *
 * Composition: full-bleed photo with a stark left-aligned uppercase headline and a floating
 *   "Get a Quote" overlay card (3 fields + CTA) sitting on the bottom edge. Card uses a hard
 *   offset shadow (industrial style) instead of a soft blur shadow.
 *
 * Props:
 * - eyebrow?: string             - small uppercase kicker (e.g. "LICENSED · BONDED")
 * - headline: string             - display headline (rendered uppercase by industrial style)
 * - headlineKeyword?: string     - keyword inside the headline shown as accent color block
 * - subhead?: string             - single line under the headline
 * - photoUrl: string             - full-bleed hero photograph
 * - photoAlt: string             - accessibility text for the hero photo
 * - quoteFields: QuoteField[]    - fields shown in the floating quote card (1–4 fields)
 * - ctaText: string              - CTA label (typically "GET QUOTE" or "REQUEST ESTIMATE")
 * - onSubmit?: (values) => void  - called with the field values; defaults to no-op
 */

import { useId, useState, type FormEvent } from 'react'

export type QuoteField = {
  name: string
  label: string
  type: 'text' | 'tel' | 'email' | 'select' | 'date'
  placeholder?: string
  options?: { value: string; label: string }[]
  required?: boolean
}

export type HeroIndustrialVariantProps = {
  eyebrow?: string
  headline: string
  headlineKeyword?: string
  subhead?: string
  photoUrl: string
  photoAlt: string
  quoteFields: QuoteField[]
  ctaText: string
  onSubmit?: (values: Record<string, string>) => void
}

export function HeroIndustrialVariant(props: HeroIndustrialVariantProps) {
  const {
    eyebrow,
    headline,
    headlineKeyword,
    subhead,
    photoUrl,
    photoAlt,
    quoteFields,
    ctaText,
    onSubmit,
  } = props

  const headingId = useId()
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(quoteFields.map((f) => [f.name, ''])),
  )
  const [honeypot, setHoneypot] = useState('')

  function handleChange(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (honeypot) return
    if (onSubmit) onSubmit(values)
  }

  const renderedHeadline = (() => {
    if (!headlineKeyword || !headline.includes(headlineKeyword)) {
      return <>{headline}</>
    }
    const [before, ...rest] = headline.split(headlineKeyword)
    const after = rest.join(headlineKeyword)
    return (
      <>
        {before}
        <span className="hero-industrial__keyword">{headlineKeyword}</span>
        {after}
      </>
    )
  })()

  return (
    <section
      className="hero-industrial"
      aria-labelledby={headingId}
      data-component="hero-industrial-variant"
    >
      <div className="hero-industrial__photo-wrap">
        <img
          src={photoUrl}
          alt={photoAlt}
          className="hero-industrial__photo"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-industrial__scrim" aria-hidden="true" />
      </div>

      <div className="hero-industrial__content">
        {eyebrow ? <p className="hero-industrial__eyebrow">{eyebrow}</p> : null}
        <h1 id={headingId} className="hero-industrial__headline">
          {renderedHeadline}
        </h1>
        {subhead ? <p className="hero-industrial__subhead">{subhead}</p> : null}
      </div>

      <form
        className="hero-industrial__quote"
        onSubmit={handleSubmit}
        aria-label="Request a quote"
      >
        <div className="hero-industrial__quote-header">
          <span className="hero-industrial__quote-label">Free Estimate</span>
          <span className="hero-industrial__quote-rule" aria-hidden="true" />
        </div>
        <div className="hero-industrial__quote-grid">
          {quoteFields.map((field) => (
            <QuoteFieldInput
              key={field.name}
              field={field}
              value={values[field.name] ?? ''}
              onChange={(v) => handleChange(field.name, v)}
            />
          ))}
        </div>
        {/* Honeypot field per build-honeypot-canonical-pattern */}
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hero-industrial__honeypot"
          aria-hidden="true"
        />
        <button type="submit" className="hero-industrial__cta">
          {ctaText}
          <span className="hero-industrial__cta-arrow" aria-hidden="true">
            &rarr;
          </span>
        </button>
      </form>

      <style>{styles}</style>
    </section>
  )
}

function QuoteFieldInput(props: {
  field: QuoteField
  value: string
  onChange: (value: string) => void
}) {
  const { field, value, onChange } = props
  const id = useId()

  return (
    <label className="hero-industrial__field" htmlFor={id}>
      <span className="hero-industrial__field-label">
        {field.label}
        {field.required ? <span aria-hidden="true"> *</span> : null}
      </span>
      {field.type === 'select' ? (
        <select
          id={id}
          name={field.name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={field.required}
          className="hero-industrial__field-input"
        >
          <option value="">{field.placeholder ?? 'Choose'}</option>
          {(field.options ?? []).map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          value={value}
          required={field.required}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="hero-industrial__field-input"
          autoComplete={field.type === 'tel' ? 'tel' : field.type === 'email' ? 'email' : 'off'}
        />
      )}
    </label>
  )
}

const styles = `
.hero-industrial {
  position: relative;
  isolation: isolate;
  width: 100%;
  min-height: clamp(620px, 86vh, 940px);
  padding: clamp(5rem, 4rem + 4vw, 9rem) clamp(1.5rem, 0.75rem + 2vw, 4.5rem) clamp(8rem, 6rem + 6vw, 12rem);
  display: grid;
  align-items: end;
  background: var(--color-bg);
  color: var(--color-text-on-dark, #fff);
  overflow: hidden;
}

.hero-industrial__photo-wrap {
  position: absolute;
  inset: 0;
  z-index: -2;
}

.hero-industrial__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: contrast(1.05) saturate(0.95);
}

.hero-industrial__scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%),
    linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 60%);
  z-index: -1;
}

.hero-industrial__content {
  max-width: 760px;
  display: grid;
  gap: clamp(0.75rem, 0.5rem + 0.5vw, 1.25rem);
}

.hero-industrial__eyebrow {
  margin: 0;
  display: inline-block;
  width: fit-content;
  padding: 0.4rem 0.7rem;
  font-family: var(--font-accent, var(--font-body, system-ui, sans-serif));
  font-size: var(--text-small, 0.8rem);
  font-weight: 700;
  letter-spacing: var(--letter-spacing-wide, 0.22em);
  text-transform: uppercase;
  color: var(--color-text-on-dark, #fff);
  background: var(--color-accent, #b8860b);
  border-radius: var(--radius-sm, 0);
}

.hero-industrial__headline {
  margin: 0;
  font-family: var(--font-heading, 'Oswald', 'Impact', sans-serif);
  font-size: var(--text-hero, clamp(2.75rem, 1rem + 7vw, 6.5rem));
  line-height: var(--leading-tight, 0.92);
  letter-spacing: var(--letter-spacing-tight, -0.01em);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-text-on-dark, #fff);
  text-wrap: balance;
}

.hero-industrial__keyword {
  display: inline-block;
  padding: 0 0.25em;
  background: var(--color-accent, #b8860b);
  color: var(--color-text, #0a0a0a);
}

.hero-industrial__subhead {
  margin: 0;
  font-family: var(--font-body, system-ui, sans-serif);
  font-size: var(--text-body, 1.05rem);
  line-height: var(--leading-body, 1.6);
  max-width: 50ch;
  color: var(--color-text-on-dark, #fff);
  opacity: 0.9;
}

.hero-industrial__quote {
  position: absolute;
  left: 50%;
  bottom: clamp(-2.5rem, -1.5rem - 1vw, -3.5rem);
  transform: translateX(-50%);
  width: min(100% - 2.5rem, 1080px);
  background: var(--color-surface, #fff);
  color: var(--color-text, #0a0a0a);
  border: 2px solid var(--color-text, #0a0a0a);
  border-radius: var(--radius-md, 0);
  box-shadow: var(--shadow-elevated, 8px 8px 0 0 var(--color-accent, #b8860b));
  padding: clamp(1rem, 0.75rem + 0.75vw, 1.5rem);
  display: grid;
  gap: clamp(0.75rem, 0.5rem + 0.5vw, 1.25rem);
  z-index: 2;
}

.hero-industrial__quote-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.hero-industrial__quote-label {
  font-family: var(--font-accent, var(--font-body, system-ui, sans-serif));
  font-size: var(--text-small, 0.78rem);
  font-weight: 700;
  letter-spacing: var(--letter-spacing-wide, 0.22em);
  text-transform: uppercase;
  color: var(--color-text, #0a0a0a);
}

.hero-industrial__quote-rule {
  flex: 1;
  height: 2px;
  background: var(--color-text, #0a0a0a);
}

.hero-industrial__quote-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

.hero-industrial__field { display: grid; gap: 0.35rem; }

.hero-industrial__field-label {
  font-family: var(--font-accent, var(--font-body, system-ui, sans-serif));
  font-size: var(--text-small, 0.75rem);
  font-weight: 700;
  letter-spacing: var(--letter-spacing-wide, 0.18em);
  text-transform: uppercase;
  color: var(--color-text, #0a0a0a);
}

.hero-industrial__field-input {
  font: inherit;
  width: 100%;
  padding: 0.75rem 0.9rem;
  background: var(--color-bg, #fff);
  color: var(--color-text, #0a0a0a);
  border: 2px solid var(--color-text, #0a0a0a);
  border-radius: var(--radius-sm, 0);
  transition: border-color var(--duration-fast, 200ms) var(--ease-out, ease);
}
.hero-industrial__field-input:focus-visible {
  outline: 3px solid var(--color-accent, #b8860b);
  outline-offset: 0;
  border-color: var(--color-accent, #b8860b);
}

.hero-industrial__honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.hero-industrial__cta {
  font: inherit;
  font-family: var(--font-heading, 'Oswald', 'Impact', sans-serif);
  font-weight: 700;
  font-size: var(--text-body, 1rem);
  letter-spacing: var(--letter-spacing-wide, 0.18em);
  text-transform: uppercase;
  padding: 1rem 1.6rem;
  background: var(--color-text, #0a0a0a);
  color: var(--color-text-on-dark, #fff);
  border: 2px solid var(--color-text, #0a0a0a);
  border-radius: var(--radius-sm, 0);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  transition:
    background-color var(--duration-fast, 200ms) var(--ease-out, ease),
    transform var(--duration-fast, 200ms) var(--ease-out, ease);
}
.hero-industrial__cta:hover {
  background: var(--color-accent, #b8860b);
  color: var(--color-text, #0a0a0a);
  border-color: var(--color-accent, #b8860b);
}
.hero-industrial__cta:focus-visible {
  outline: 3px solid var(--color-accent, #b8860b);
  outline-offset: 3px;
}
.hero-industrial__cta:active { transform: translate(2px, 2px); }
.hero-industrial__cta-arrow { transition: transform var(--duration-fast, 200ms) var(--ease-out, ease); }
.hero-industrial__cta:hover .hero-industrial__cta-arrow { transform: translateX(3px); }

@media (min-width: 768px) {
  .hero-industrial__quote-grid {
    grid-template-columns: repeat(var(--quote-cols, 3), 1fr);
  }
  .hero-industrial__quote {
    grid-template-columns: 1fr auto;
    align-items: end;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-industrial__cta,
  .hero-industrial__cta-arrow,
  .hero-industrial__field-input { transition: none; }
}
`
