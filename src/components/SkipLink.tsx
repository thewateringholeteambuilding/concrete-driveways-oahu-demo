/**
 * Component: SkipLink
 * Type: a11y baseline
 * Slug: skip-link
 *
 * Universal-baseline a11y primitive. Mounted as the first child inside <body> via App.tsx,
 * just before the Router/main content. Hidden visually by default, becomes visible on
 * keyboard focus. Sends focus to <main id="main" tabIndex={-1}> when activated.
 *
 * Closes the universal-baseline gap surfaced by /audit-demo (SkipLink missing on 9/9 bases).
 *
 * Tokens consumed:
 * - --color-bg, --color-text, --color-accent, --color-focus-ring (with safe fallbacks)
 * - --radius-md, --space-element
 */

export default function SkipLink() {
  return (
    <a href="#main" className="twh-skip-link">
      Skip to main content
      <style>{`
        .twh-skip-link {
          position: absolute;
          left: -9999px;
          top: 8px;
          z-index: 100;
          padding: 10px 14px;
          background: var(--color-bg, #ffffff);
          color: var(--color-text, #111111);
          border: 2px solid var(--color-accent, #635bff);
          border-radius: var(--radius-md, 8px);
          font-size: 0.9375rem;
          font-weight: 600;
          text-decoration: none;
          line-height: 1.2;
        }
        .twh-skip-link:focus,
        .twh-skip-link:focus-visible {
          left: 12px;
          outline: 2px solid var(--color-focus-ring, var(--color-accent, #635bff));
          outline-offset: 2px;
        }
      `}</style>
    </a>
  );
}
