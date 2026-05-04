/**
 * Component: TestimonialCardGoogleStyle
 * Type: card
 * Slug: testimonial-card-google-style
 * Style fit: condensed-architectural (great), editorial (great), swiss (great), industrial (ok), bento (great), liquid-glass (ok)
 * Niche fit: roofing (great), construction-concrete (great), painting-contractor (great), hvac (great), plumbing (great), electrician (great), auto-body (great), behavioral-health (ok), restaurant (great), real-estate (great)
 * Quality: pro
 * Source pattern: hugobuildersllc.com . testimonials styled as Google review cards. 5 yellow
 *   stars, multi-color "G" Google logo, reviewer name + initial avatar, dated, body quote,
 *   "Posted on Google" footer.
 *
 * Composition: white card on cream surface, top row = avatar + name + date, second row = stars,
 *   body = quote, footer = "Posted on Google" with the four-color G mark. Card is 100% safe
 *   to render alongside Google's brand guidelines because the Google-G is rendered from the
 *   official brand colors and the chrome makes clear this is a quoted review, not a partnership.
 *
 * IMPORTANT: Google brand colors (#4285F4, #34A853, #FBBC05, #EA4335) are SCOPED INSIDE this
 * component only. They MUST NOT leak into the active palette tokens. The component visualizes
 * a Google review; it does not let Google's identity bleed into the rest of the page.
 *
 * Tokens consumed:
 * - --color-bg, --color-text, --color-text-muted, --color-border, --color-surface
 * - --font-heading, --font-body, --text-body
 *
 * Props:
 * - name: string
 * - date: string
 * - rating?: number  default 5  (1-5 inclusive)
 * - quote: string
 * - avatarBackgroundHex?: string  default deterministic pick from 6-color palette by name
 */

const AVATAR_COLORS = ['#1f6feb', '#34a853', '#7e57c2', '#ef6c00', '#0288d1', '#c2185b'] as const

function pickAvatarColor(name: string): string {
  if (!name) return AVATAR_COLORS[0]
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0
  return AVATAR_COLORS[h % AVATAR_COLORS.length]
}

function StarRow({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating)
  return (
    <span
      className="testimonial-card-google__stars"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {stars.map((on, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={on ? '#FBBC05' : 'none'}
          stroke="#FBBC05"
          strokeWidth="1.6"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17l-6.1 3.5 1.5-6.8L2.2 9l6.9-.7L12 2z" />
        </svg>
      ))}
    </span>
  )
}

function GoogleG() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33 30 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.4l6-6C33.7 5.6 29 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.5-8 19.5-20 0-1.3-.1-2.7-.5-4z" />
      <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.9 16.1 19 13 24 13c2.7 0 5.2.9 7.2 2.4l6-6C33.7 5.6 29 4 24 4 16 4 9 8.7 6.3 14.7z" />
      <path fill="#FBBC05" d="M24 44c5 0 9.5-1.7 13-4.5l-6.1-5c-2 1.3-4.4 2-6.9 2-6 0-10.7-3-12.6-7.5l-6.5 5C8.7 39.6 15.7 44 24 44z" />
      <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.6 1.6-1.5 3-2.7 4l6.1 5C42.8 34 44 29.5 44 24c0-1.3-.1-2.7-.5-4z" />
    </svg>
  )
}

export interface TestimonialCardGoogleStyleProps {
  name: string
  date: string
  rating?: number
  quote: string
  avatarBackgroundHex?: string
}

export function TestimonialCardGoogleStyle({
  name,
  date,
  rating = 5,
  quote,
  avatarBackgroundHex,
}: TestimonialCardGoogleStyleProps) {
  const initial = name?.charAt(0)?.toUpperCase() ?? '?'
  const avatarBg = avatarBackgroundHex ?? pickAvatarColor(name)
  const safeRating = Math.max(0, Math.min(5, Math.round(rating)))

  return (
    <article className="testimonial-card-google" aria-label={`Google review by ${name}`}>
      <header className="testimonial-card-google__header">
        <span
          className="testimonial-card-google__avatar"
          aria-hidden="true"
          style={{ background: avatarBg }}
        >
          {initial}
        </span>
        <span className="testimonial-card-google__id">
          <span className="testimonial-card-google__name">{name}</span>
          <span className="testimonial-card-google__date">{date}</span>
        </span>
      </header>
      <StarRow rating={safeRating} />
      <p className="testimonial-card-google__quote">{quote}</p>
      <footer className="testimonial-card-google__footer">
        <GoogleG />
        <span>Posted on Google</span>
      </footer>
      <style>{`
        .testimonial-card-google {
          background: var(--color-surface, #ffffff);
          color: var(--color-text, #0d0d0d);
          border: 1px solid var(--color-border, rgba(13,13,13,0.12));
          padding: clamp(1.25rem, 1rem + 1vw, 1.75rem);
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
        }
        .testimonial-card-google__header {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .testimonial-card-google__avatar {
          flex: 0 0 auto;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #ffffff;
          font-family: var(--font-heading, 'Barlow Condensed', sans-serif);
          font-weight: 600;
          font-size: 1.125rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        .testimonial-card-google__id {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .testimonial-card-google__name {
          font-family: var(--font-body, 'Inter', sans-serif);
          font-weight: 600;
          font-size: 0.9375rem;
          line-height: 1.2;
        }
        .testimonial-card-google__date {
          font-family: var(--font-body, 'Inter', sans-serif);
          font-size: 0.75rem;
          line-height: 1.2;
          color: var(--color-text-muted, #666);
        }
        .testimonial-card-google__stars {
          display: inline-flex;
          gap: 2px;
        }
        .testimonial-card-google__quote {
          margin: 0;
          font-family: var(--font-body, 'Inter', sans-serif);
          font-size: 0.95rem;
          line-height: 1.55;
          color: var(--color-text, #0d0d0d);
        }
        .testimonial-card-google__footer {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body, 'Inter', sans-serif);
          font-size: 0.75rem;
          color: var(--color-text-muted, #666);
          letter-spacing: 0.02em;
        }
      `}</style>
    </article>
  )
}
