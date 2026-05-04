import type React from 'react'
import { SITE } from '../content/site'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      aria-label={`${SITE.businessName} site footer`}
      style={{
        background: 'var(--color-footer-bg)',
        color: 'var(--color-footer-text)',
        paddingInline: 'var(--space-page-gutter)',
        paddingBlock: 'clamp(3rem, 5vw, 5rem) clamp(1.5rem, 2vw, 2rem)',
        fontSize: '0.95rem',
        lineHeight: 1.6,
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-content-width)',
          marginInline: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
          gap: 'clamp(2rem, 4vw, 3rem)',
        }}
      >
        {/* Col 1: brand */}
        <section>
          <h2 style={brandHeadingStyle}>{SITE.businessName}</h2>
          <p style={{ margin: 0, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.85rem', color: 'var(--color-accent)' }}>
            {SITE.tagline}
          </p>
          <p style={{ margin: 0, marginBottom: '1rem', maxWidth: '32ch' }}>
            Oahu concrete contractor. Licensed since {SITE.founded}. License {SITE.license}.
          </p>
          <p style={{ margin: 0, fontSize: '0.85rem' }}>
            Serving: {SITE.serviceArea}.
          </p>
        </section>

        {/* Col 2: Quick Links */}
        <nav aria-label="Quick links" style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={footerHeadingStyle}>Quick Links</h2>
          <ul style={footerListStyle}>
            <li><a href="/" style={footerLinkStyle}>Home</a></li>
            <li><a href="/about" style={footerLinkStyle}>About</a></li>
            <li><a href="/gallery" style={footerLinkStyle}>Gallery</a></li>
            <li><a href="/#contact" style={footerLinkStyle}>Contact</a></li>
          </ul>
        </nav>

        {/* Col 3: Services */}
        <nav aria-label="Services" style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={footerHeadingStyle}>Services</h2>
          <ul style={footerListStyle}>
            <li><a href="/services#driveways" style={footerLinkStyle}>Driveways</a></li>
            <li><a href="/services#foundations" style={footerLinkStyle}>Foundations</a></li>
            <li><a href="/services#patios---walkways" style={footerLinkStyle}>Patios</a></li>
            <li><a href="/services#retaining-walls" style={footerLinkStyle}>Retaining Walls</a></li>
            <li><a href="/services#decorative---stamped-concrete" style={footerLinkStyle}>Decorative</a></li>
            <li><a href="/services#concrete-repair" style={footerLinkStyle}>Repair</a></li>
          </ul>
        </nav>

        {/* Col 4: Contact */}
        <section>
          <h2 style={footerHeadingStyle}>Contact</h2>
          <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <span>{SITE.address}</span>
            <a href={SITE.phoneHref} style={footerLinkStyle}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} style={footerLinkStyle}>{SITE.email}</a>
          </address>
          <ul aria-label="Social links" style={{ ...footerListStyle, flexDirection: 'row', gap: '0.75rem', marginTop: '1rem' }}>
            <li>
              <a href={SITE.facebookHref} aria-label="Facebook" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.81 8.44-4.94 8.44-9.94z" />
                </svg>
              </a>
            </li>
            <li>
              <a href={SITE.instagramHref} aria-label="Instagram" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* Legal strip */}
      <div
        style={{
          maxWidth: 'var(--max-content-width)',
          marginInline: 'auto',
          marginTop: 'clamp(2.5rem, 4vw, 3.5rem)',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--color-footer-divider)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem 1.5rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: 'var(--color-footer-legal)',
        }}
      >
        <p style={{ margin: 0 }}>
          {`\u00A9 ${year} ${SITE.businessName}. All rights reserved. License ${SITE.license}.`}
        </p>
        <ul style={{ ...footerListStyle, flexDirection: 'row', gap: '1rem' }}>
          <li><a href="/legal" style={footerLinkStyle}>Privacy &amp; Terms</a></li>
        </ul>
      </div>
    </footer>
  )
}

const brandHeadingStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: '0.75rem',
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  fontSize: '1.25rem',
  letterSpacing: '0.04em',
  color: 'var(--color-footer-heading)',
  textTransform: 'uppercase',
}

const footerHeadingStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: '0.85rem',
  fontFamily: 'var(--font-heading)',
  fontSize: '0.85rem',
  fontWeight: 700,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: 'var(--color-footer-heading)',
}

const footerListStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
}

const footerLinkStyle: React.CSSProperties = {
  color: 'inherit',
  textDecoration: 'none',
  transition: 'color 160ms ease',
}

const socialIconStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 36,
  height: 36,
  border: '1px solid var(--color-footer-divider)',
  color: 'var(--color-footer-heading)',
  textDecoration: 'none',
}
