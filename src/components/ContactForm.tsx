import { useState, type FormEvent } from 'react'

interface ContactFormProps {
  ariaLabel?: string
  ctaLabel?: string
  idPrefix?: string
  detail?: boolean
}

type FormState = 'idle' | 'success' | 'error'

export default function ContactForm({
  ariaLabel = 'Free estimate request form',
  ctaLabel = 'REQUEST FREE ESTIMATE',
  idPrefix = 'contact',
  detail = true,
}: ContactFormProps) {
  const [honeypot, setHoneypot] = useState('')
  const [state, setState] = useState<FormState>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (honeypot) return
    setState('success')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="inline-form"
      aria-label={ariaLabel}
      noValidate
    >
      <div className="inline-form__row">
        <div className="inline-form__field">
          <label className="inline-form__label" htmlFor={`${idPrefix}-name`}>
            Your name *
          </label>
          <input
            id={`${idPrefix}-name`}
            className="inline-form__input"
            type="text"
            name="name"
            required
            placeholder="Full name"
            autoComplete="name"
          />
        </div>

        <div className="inline-form__field">
          <label className="inline-form__label" htmlFor={`${idPrefix}-email`}>
            Email
          </label>
          <input
            id={`${idPrefix}-email`}
            className="inline-form__input"
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="inline-form__row">
        <div className="inline-form__field">
          <label className="inline-form__label" htmlFor={`${idPrefix}-phone`}>
            Phone *
          </label>
          <input
            id={`${idPrefix}-phone`}
            className="inline-form__input"
            type="tel"
            name="phone"
            required
            placeholder="Best number to reach you"
            autoComplete="tel"
          />
        </div>

        <div className="inline-form__field">
          <label className="inline-form__label" htmlFor={`${idPrefix}-service`}>
            Service interest
          </label>
          <select
            id={`${idPrefix}-service`}
            className="inline-form__select"
            name="service"
            defaultValue="driveway"
          >
            <option value="driveway">Driveway</option>
            <option value="foundation">Foundation</option>
            <option value="patio">Patio / Walkway</option>
            <option value="retaining-wall">Retaining Wall</option>
            <option value="decorative">Decorative / Stamped</option>
            <option value="repair">Concrete Repair</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>

      {detail ? (
        <div className="inline-form__field">
          <label className="inline-form__label" htmlFor={`${idPrefix}-detail`}>
            Tell us about the project
          </label>
          <textarea
            id={`${idPrefix}-detail`}
            className="inline-form__textarea"
            name="detail"
            placeholder="Approximate square footage, current condition, timeline, anything we should know."
          />
        </div>
      ) : null}

      {/* Honeypot per build-honeypot-canonical-pattern */}
      <input
        className="inline-form__honeypot"
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        aria-hidden="true"
      />

      <button type="submit" className="btn btn--accent" style={{ width: '100%' }}>
        {ctaLabel}
      </button>

      <div role="status" aria-live="polite" className="inline-form__feedback">
        {state === 'success'
          ? 'Thanks. We will call you back within one business day with a site visit time.'
          : ''}
      </div>
    </form>
  )
}
