import { Helmet } from 'react-helmet-async'
import { SITE, ALL_SERVICES, SERVICE_PROCESS } from '../content/site'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | {SITE.shortName} Oahu, HI</title>
        <meta
          name="description"
          content={`Concrete services on Oahu: driveways, foundations, patios, retaining walls, decorative concrete, and repair. 4,000 PSI minimum. License ${SITE.license}.`}
        />
      </Helmet>

      <section className="section section--dark page-top">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow">Our Services</span>
          <h1 className="section-heading section-heading--center" style={{ fontSize: 'var(--text-h1)' }}>Concrete Services</h1>
          <p className="section-lede" style={{ marginInline: 'auto', textAlign: 'center', maxWidth: '60ch' }}>
            Six concrete services for Oahu homeowners, general contractors, and property managers. Every pour starts with a soil check and ends with a signed warranty.
          </p>
        </div>
      </section>

      {ALL_SERVICES.map((svc, i) => (
        <section
          key={svc.title}
          id={svc.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
          className={`section ${i % 2 === 0 ? 'section--surface' : 'section--soft'}`}
        >
          <div className="container">
            <div className={`split ${i % 2 === 1 ? 'split--reverse' : ''}`}>
              <div>
                <h2 className="section-heading">{svc.title}</h2>
                <p style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.125rem', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  {svc.hook}
                </p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: 1.65, maxWidth: '60ch' }}>
                  {svc.description}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  <strong style={{ color: 'var(--color-text)' }}>Ideal for:</strong> {svc.idealFor}
                </p>
              </div>
              <div className="split__media">
                <img src={svc.image} alt={svc.alt} loading="lazy" width="600" height="450" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* OUR PROCESS */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 1rem + 3vw, 3rem)' }}>
            <span className="section-eyebrow">How We Work</span>
            <h2 className="section-heading section-heading--center">Our Process</h2>
          </div>
          <div className="process-row">
            {SERVICE_PROCESS.map((s, i) => (
              <div className="process-step" key={s.title}>
                <span className="process-step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="process-step__title">{s.title}</h3>
                <p className="process-step__copy">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="section section--dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-heading section-heading--center" style={{ fontSize: 'clamp(2rem, 1rem + 4vw, 4rem)' }}>
            Ready to Pour?
          </h2>
          <p className="section-lede" style={{ marginInline: 'auto', textAlign: 'center', marginBottom: '2.5rem' }}>
            Site visit takes about thirty minutes. Written estimate within two business days.
          </p>
          <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/#contact" className="btn btn--white">Get a Free Estimate</a>
            <a href={SITE.phoneHref} className="btn btn--outline-white">Call {SITE.phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
