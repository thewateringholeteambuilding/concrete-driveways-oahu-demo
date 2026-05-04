/**
 * Component: FooterTrustStripBold
 * Type: footer
 * Style fit: industrial (great), swiss (great), editorial (ok), neo-brutalist (great),
 *            bento (ok), liquid-glass (poor), dark-luxury (ok)
 * Niche fit: trades (great), mortgage (great), real-estate (great), construction (great),
 *            charter (ok), wellness (ok), reentry (poor)
 * Quality: pro
 * Source pattern: apple.com legal-strip pattern, condensed and trust-forward
 *
 * Denser variant of the Apple anchor pattern. Sitelinks compress to two columns;
 * the credential strip becomes a bold trust band with badges (license #, BBB
 * rating, years in business, certifications) front and center. For trades
 * and mortgage clients, the trust signals are the conversion driver, so this
 * variant gives them their own visual band rather than tucking them into a
 * footnote.
 *
 * Style-aware via CSS variables. No banned tokens.
 */
import React from 'react';

export interface TrustBadge {
  label: string; // "License #ABC123456", "BBB A+", "27 Years in Business"
  detail?: string; // optional clarifier rendered as small caption
  href?: string; // optional link to verification page
}

export interface FooterTrustStripBoldProps {
  businessName: string;
  tagline?: string;
  address?: string;
  phone?: string;
  email?: string;
  sitelinks?: { label: string; href: string }[]; // flat list, two-column on desktop
  trustBadges: TrustBadge[]; // the headline strip
  certifications?: string[]; // secondary line: "NATE Certified", "EPA 608", etc.
  legalLinks?: { label: string; href: string }[];
  socialLinks?: { label: string; href: string; icon?: React.ReactNode }[];
  copyrightYear?: number;
}

export function FooterTrustStripBold({
  businessName,
  tagline,
  address,
  phone,
  email,
  sitelinks,
  trustBadges,
  certifications,
  legalLinks,
  socialLinks,
  copyrightYear,
}: FooterTrustStripBoldProps) {
  const year = copyrightYear ?? new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label={`${businessName} site footer`}
      style={{
        backgroundColor:
          'var(--color-footer-bg, var(--color-bg-deep, oklch(15% 0.01 250)))',
        color:
          'var(--color-footer-text, var(--color-text-muted, oklch(75% 0 0)))',
        paddingInline: 'var(--space-page-gutter, clamp(1.25rem, 4vw, 4rem))',
        fontSize: '0.875rem',
        lineHeight: 1.55,
      }}
    >
      {/* Trust band: the headline visual */}
      <section
        aria-label="Trust and credentials"
        style={{
          maxWidth: 'var(--max-content-width, 1200px)',
          marginInline: 'auto',
          paddingBlock: 'clamp(1.75rem, 3vw, 2.75rem)',
          borderBottom:
            '1px solid var(--color-footer-divider, oklch(100% 0 0 / 0.12))',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(180px, 100%), 1fr))',
            gap: 'clamp(1rem, 2vw, 2rem)',
          }}
        >
          {trustBadges.map((b) => {
            const inner = (
              <>
                <span
                  style={{
                    display: 'block',
                    fontSize: 'clamp(1rem, 0.85rem + 0.5vw, 1.25rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color:
                      'var(--color-footer-heading, var(--color-text, oklch(96% 0 0)))',
                  }}
                >
                  {b.label}
                </span>
                {b.detail && (
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      marginTop: '0.25rem',
                      opacity: 0.85,
                    }}
                  >
                    {b.detail}
                  </span>
                )}
              </>
            );
            return (
              <li key={b.label}>
                {b.href ? (
                  <a href={b.href} style={trustLinkStyle}>
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>

        {certifications && certifications.length > 0 && (
          <p
            style={{
              margin: 0,
              marginTop: '1rem',
              fontSize: '0.75rem',
              opacity: 0.8,
            }}
          >
            {certifications.join(' · ')}
          </p>
        )}
      </section>

      {/* Sitelinks + identity */}
      <div
        style={{
          maxWidth: 'var(--max-content-width, 1200px)',
          marginInline: 'auto',
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 3rem)',
          paddingBlock: 'clamp(2rem, 3vw, 3rem)',
        }}
      >
        <section aria-labelledby="footer-identity-heading">
          <h2
            id="footer-identity-heading"
            style={{
              margin: 0,
              marginBottom: '0.5rem',
              fontSize: '1rem',
              fontWeight: 700,
              color:
                'var(--color-footer-heading, var(--color-text, oklch(96% 0 0)))',
            }}
          >
            {businessName}
          </h2>
          {tagline && (
            <p style={{ margin: 0, marginBottom: '1rem', maxWidth: '32ch' }}>
              {tagline}
            </p>
          )}
          <address
            style={{
              fontStyle: 'normal',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {address && <span>{address}</span>}
            {phone && (
              <a
                href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                style={trustLinkStyle}
              >
                {phone}
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} style={trustLinkStyle}>
                {email}
              </a>
            )}
          </address>
          {socialLinks && socialLinks.length > 0 && (
            <ul
              aria-label="Social links"
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                marginTop: '1rem',
                display: 'flex',
                gap: '0.75rem',
              }}
            >
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a href={s.href} aria-label={s.label} style={trustLinkStyle}>
                    {s.icon ?? s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>

        {sitelinks && sitelinks.length > 0 && (
          <nav
            aria-label="Site links"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <h2
              style={{
                margin: 0,
                marginBottom: '0.75rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color:
                  'var(--color-footer-heading, var(--color-text, oklch(96% 0 0)))',
              }}
            >
              Quick Links
            </h2>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '0.5rem 1rem',
              }}
            >
              {sitelinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} style={trustLinkStyle}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Legal strip */}
      <div
        style={{
          maxWidth: 'var(--max-content-width, 1200px)',
          marginInline: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem 1.5rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBlock: '1.25rem',
          borderTop:
            '1px solid var(--color-footer-divider, oklch(100% 0 0 / 0.12))',
          fontSize: '0.75rem',
          color:
            'var(--color-footer-legal, var(--color-text-muted, oklch(62% 0 0)))',
        }}
      >
        <p style={{ margin: 0 }}>
          {`Copyright © ${year} ${businessName}. All rights reserved.`}
        </p>
        {legalLinks && legalLinks.length > 0 && (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem 1rem',
            }}
          >
            {legalLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} style={trustLinkStyle}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}

const trustLinkStyle: React.CSSProperties = {
  color: 'inherit',
  textDecoration: 'none',
  transition:
    'color var(--duration-fast, 150ms) var(--ease-out, cubic-bezier(0.16, 1, 0.3, 1))',
};
