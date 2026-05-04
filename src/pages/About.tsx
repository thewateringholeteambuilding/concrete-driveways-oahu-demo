import { Helmet } from 'react-helmet-async'
import { SITE, STATS, VALUE_PROPS, PHOTOS, CERTIFICATIONS } from '../content/site'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About {SITE.shortName} | Oahu Concrete Contractor</title>
        <meta
          name="description"
          content={`${SITE.businessName} has been pouring concrete on Oahu since ${SITE.founded}. Crew of ${SITE.crewSize}. License ${SITE.license}. ACI Certified Flatwork Finisher.`}
        />
      </Helmet>

      {/* DARK HERO */}
      <section className="section section--dark page-top">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow">About</span>
          <h1 className="section-heading section-heading--center" style={{ fontSize: 'var(--text-h1)' }}>
            The Contractor Who Picks Up the Phone
          </h1>
          <p className="section-lede" style={{ marginInline: 'auto', textAlign: 'center', maxWidth: '64ch' }}>
            {SITE.crewSize} crew members, zero subcontractors, pouring on every soil type Oahu has since {SITE.founded}. Every job is owner-quoted and the phone gets answered before 7am.
          </p>
        </div>
      </section>

      {/* WHO ARE WE */}
      <section className="section section--surface">
        <div className="container">
          <div className="split">
            <div>
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-heading">13 Years. One Island. 347 Pours.</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.7, maxWidth: '60ch' }}>
                {SITE.ownerBioLong}
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.7, maxWidth: '60ch' }}>
                We do not subcontract concrete work. The crew you meet at the estimate is the crew on your slab. Every pour uses 4,000 PSI minimum, #4 rebar at 12-inch centers, and control joints cut within 24 hours.
              </p>
            </div>
            <div className="values-card">
              {VALUE_PROPS.map((v) => (
                <div className="values-card__item" key={v.title}>
                  <span className="values-card__check" aria-hidden="true">{'\u2713'}</span>
                  <div>
                    <p className="values-card__title">{v.title}</p>
                    <p className="values-card__copy">{v.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREW RELIABILITY STRIP */}
      <section className="section section--dark" style={{ paddingBlock: 'clamp(2rem, 4vw, 3.5rem)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <p className="stat-strip__num">8</p>
              <p className="stat-strip__label">Crew Members</p>
            </div>
            <div>
              <p className="stat-strip__num">0</p>
              <p className="stat-strip__label">Subcontractors</p>
            </div>
            <div>
              <p className="stat-strip__num">6:30am</p>
              <p className="stat-strip__label">Start Time</p>
            </div>
            <div>
              <p className="stat-strip__num">7 yr</p>
              <p className="stat-strip__label">Avg Crew Tenure</p>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="section section--dark" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container">
          <div className="stat-strip">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="stat-strip__num">{s.num}</p>
                <p className="stat-strip__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 1rem + 3vw, 3rem)' }}>
            <span className="section-eyebrow">Credentials</span>
            <h2 className="section-heading section-heading--center">Licensed. Insured. Certified.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {CERTIFICATIONS.map((c) => (
              <div key={c.label} style={{ padding: '1.5rem', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '1.125rem' }}>{c.label}</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="section section--dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-heading section-heading--center" style={{ fontSize: 'clamp(2rem, 1rem + 4vw, 4rem)' }}>
            Ready to Start?
          </h2>
          <p className="section-lede" style={{ marginInline: 'auto', textAlign: 'center', marginBottom: '2.5rem' }}>
            Site visits take about thirty minutes. Written estimate within two business days. No obligation.
          </p>
          <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/#contact" className="btn btn--white">Schedule a Site Visit</a>
            <a href={SITE.phoneHref} className="btn btn--outline-white">Call {SITE.phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
