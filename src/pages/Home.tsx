import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/ContactForm'
import { TestimonialCardGoogleStyle } from '../components/library/testimonial-card-google-style'
import {
  SITE,
  PHOTOS,
  HERO_TRUST,
  TOP_SERVICES,
  WHY_REASONS,
  PROJECTS,
  TESTIMONIALS,
  FAQ,
  SERVICE_AREA_TOWNS,
  SERVICE_PROCESS,
} from '../content/site'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{SITE.businessName} | Honolulu Concrete Contractor</title>
        <meta
          name="description"
          content={`${SITE.businessName} is an Oahu concrete contractor. Driveways, foundations, patios, retaining walls. 4,000 PSI minimum. License ${SITE.license}. Free estimates.`}
        />
      </Helmet>

      {/* HERO - split layout: copy left, photo right */}
      <section className="hero-split" aria-label="Hero">
        <div className="hero-split__inner">
          <div className="hero-split__copy">
            <p className="hero-split__tagline">{SITE.tagline}</p>
            <h1 className="hero-split__heading">Oahu Concrete. Done Right.</h1>
            <p className="hero-split__body">
              {SITE.ownerBioShort}
            </p>
            <div className="hero-split__ctas">
              <a href="#contact" className="btn btn--accent">Get a Free Estimate</a>
              <a href="/services" className="btn btn--outline-white">View Services</a>
            </div>
            <div className="hero-split__stats">
              <span><strong>347</strong> Pours</span>
              <span><strong>13</strong> Years</span>
              <span><strong>4.8</strong> Stars</span>
            </div>
          </div>
          <div className="hero-split__media">
            <img
              src={PHOTOS.heroPoster}
              alt="Concrete pour in progress under golden Oahu light"
              loading="eager"
              fetchPriority="high"
              width="800"
              height="1000"
            />
            <div className="hero-split__badge">
              <span>Licensed HI-CT-38291</span>
            </div>
          </div>
        </div>
        <div className="hero-trust-strip">
          {HERO_TRUST.map((item, i) => (
            <span key={item}>
              <span>{item}</span>
              {i < HERO_TRUST.length - 1 ? <span className="pipe">|</span> : null}
            </span>
          ))}
        </div>
        <style>{`
          .hero-split {
            position: relative;
            background: var(--color-black);
            color: var(--color-text-on-dark);
            padding-top: 7rem;
            overflow: hidden;
          }
          .hero-split__inner {
            max-width: var(--max-content-width);
            margin: 0 auto;
            padding: clamp(2rem, 4vw, 4rem) var(--space-page-gutter);
            padding-bottom: 5rem;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            align-items: center;
          }
          @media (min-width: 768px) {
            .hero-split__inner { grid-template-columns: 1fr 1fr; gap: clamp(2rem, 4vw, 4rem); }
          }
          .hero-split__tagline {
            font-family: var(--font-heading);
            font-size: var(--text-small);
            font-weight: 700;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 1rem;
          }
          .hero-split__heading {
            font-size: clamp(2.5rem, 1rem + 6vw, 5rem);
            line-height: 0.92;
            margin-bottom: 1.5rem;
            max-width: 14ch;
          }
          .hero-split__body {
            color: hsla(40, 30%, 92%, 0.78);
            max-width: 48ch;
            margin-bottom: 2rem;
            line-height: 1.65;
          }
          .hero-split__ctas {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 2rem;
          }
          .hero-split__stats {
            display: flex;
            gap: 2rem;
            font-family: var(--font-heading);
            font-size: 0.9rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: hsla(40, 30%, 92%, 0.6);
          }
          .hero-split__stats strong {
            color: var(--color-accent);
            font-size: 1.25rem;
            display: block;
            margin-bottom: 0.15rem;
          }
          .hero-split__media {
            position: relative;
          }
          .hero-split__media img {
            width: 100%;
            aspect-ratio: 4/5;
            object-fit: cover;
          }
          .hero-split__badge {
            position: absolute;
            bottom: 1rem;
            left: 1rem;
            background: var(--color-accent);
            color: var(--color-accent-foreground);
            padding: 0.5rem 1rem;
            font-family: var(--font-heading);
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }
          @media (max-width: 767px) {
            .hero-split__media img { aspect-ratio: 3/2; }
          }
        `}</style>
      </section>

      {/* PROCESS - positioned ABOVE services per reference grounding */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 1rem + 3vw, 3rem)' }}>
            <span className="section-eyebrow">How We Work</span>
            <h2 className="section-heading section-heading--center">Form. Pour. Finish.</h2>
            <p className="section-lede" style={{ marginInline: 'auto', textAlign: 'center' }}>
              Four steps from site visit to signed warranty. Every pour follows the same sequence.
            </p>
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

      {/* SERVICES */}
      <section id="services" className="section section--soft">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 1rem + 3vw, 3rem)' }}>
            <span className="section-eyebrow">What We Pour</span>
            <h2 className="section-heading section-heading--center">Our Services</h2>
            <p className="section-lede" style={{ marginInline: 'auto', textAlign: 'center' }}>
              Driveways, foundations, patios, retaining walls, decorative concrete, and repair. Serving all of Oahu.
            </p>
          </div>
          <div className="grid-3">
            {TOP_SERVICES.map((s) => (
              <article className="svc-card" key={s.title}>
                <div className="svc-card__media">
                  <img src={s.image} alt={s.alt} loading="lazy" width="400" height="300" />
                </div>
                <div className="svc-card__body">
                  <h3 className="svc-card__title">{s.title}</h3>
                  <p className="svc-card__copy">{s.description}</p>
                  <a href={s.href} className="svc-card__more">All Services</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWREEL - dark band */}
      <section className="section section--dark">
        <div className="container">
          <div className="showreel-split">
            <div className="showreel-split__media">
              <img src={PHOTOS.showreelBg} alt="Construction crew pouring concrete with wheelbarrow on Oahu job site" loading="lazy" width="800" height="600" />
            </div>
            <div>
              <span className="section-eyebrow">Oahu Soil. Oahu Specs.</span>
              <h2 className="showreel-split__title">347 Pours. Zero Failed Inspections.</h2>
              <p style={{ color: 'hsla(40, 30%, 92%, 0.78)', maxWidth: '52ch', marginBottom: '2rem', lineHeight: 1.6 }}>
                Coral aggregate in Hawaii Kai. Expansive clay in Mililani. Volcanic rock in Kailua. Every soil type on this island gets a different base prep and drainage plan before forms go up.
              </p>
              <a href="/#contact" className="btn btn--accent">Schedule a Site Visit</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CDO */}
      <section className="section section--dark">
        <div className="container">
          <span className="section-eyebrow">Why CDO</span>
          <h2 className="section-heading">Three Things That Make the Work Last</h2>
          <div className="why-row">
            {WHY_REASONS.map((r) => (
              <article className="why-row__item" key={r.title}>
                <span className="why-row__num">{r.iconLabel}</span>
                <div>
                  <h3 className="why-row__title">{r.title}</h3>
                  <p className="why-row__copy">{r.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section id="projects" className="section section--surface">
        <div className="container container--wide">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 1rem + 3vw, 3rem)' }}>
            <span className="section-eyebrow">Recent Work</span>
            <h2 className="section-heading section-heading--center">Before the Forms. After the Cure.</h2>
            <p className="section-lede" style={{ marginInline: 'auto', textAlign: 'center' }}>
              A sample of the past twelve months across {SITE.serviceArea.split(',').length} Oahu towns.
            </p>
          </div>
          <div className="proj-scroll" role="list">
            {PROJECTS.map((p) => (
              <article className="proj-card" key={p.title} role="listitem">
                <div className="proj-card__media">
                  <img src={p.image} alt={p.alt} loading="lazy" width="360" height="270" />
                </div>
                <div className="proj-card__body">
                  <h3 className="proj-card__title">{p.title}</h3>
                  <p className="proj-card__detail">{p.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 1rem + 3vw, 3rem)' }}>
            <span className="section-eyebrow">Client Reviews</span>
            <h2 className="section-heading section-heading--center">Trusted by Oahu Homeowners</h2>
            <p className="section-lede" style={{ marginInline: 'auto', textAlign: 'center' }}>
              {SITE.reviewsRating} stars across {SITE.reviewsCount} Google reviews.
            </p>
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCardGoogleStyle
                key={t.name}
                name={t.name}
                date={t.date}
                rating={t.rating}
                quote={t.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA TOWNS */}
      <section className="section section--dark" style={{ paddingBlock: 'clamp(2rem, 4vw, 4rem)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow">Service Area</span>
          <h2 className="section-heading section-heading--center">Serving All of Oahu</h2>
          <div className="towns-strip">
            {SERVICE_AREA_TOWNS.map((town) => (
              <span className="towns-strip__tag" key={town}>{town}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 1rem + 3vw, 3rem)' }}>
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-heading section-heading--center">Frequently Asked Questions</h2>
          </div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q} className="faq__item">
                <summary className="faq__summary">
                  <span>{f.q}</span>
                </summary>
                <div className="faq__body">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + FORM + MAP */}
      <section id="contact" className="section section--dark">
        <div className="container">
          <div className="cta-form-split">
            <div>
              <span className="section-eyebrow">Start Your Project</span>
              <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 1rem + 4vw, 4rem)', maxWidth: '14ch' }}>
                What Do You Need Poured?
              </h2>
              <p style={{ color: 'hsla(40, 30%, 92%, 0.78)', maxWidth: '52ch', marginBottom: '2rem', lineHeight: 1.6 }}>
                Driveway, foundation, retaining wall, patio, repair. Site visits take about thirty minutes. Written estimate within two business days. No obligation.
              </p>
              <p style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsla(40, 30%, 92%, 0.7)', fontSize: '0.85rem' }}>
                Call the crew
              </p>
              <a href={SITE.phoneHref} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 1rem + 2vw, 2.75rem)', color: 'hsl(40 30% 92%)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                {SITE.phone}
              </a>
              <p style={{ marginTop: '1.25rem', color: 'hsla(40, 30%, 92%, 0.6)', fontSize: '0.9rem' }}>
                {SITE.address}. {SITE.hours}
              </p>
            </div>
            <div className="cta-form-card">
              <ContactForm idPrefix="home-contact" ctaLabel="Send Message" />
            </div>
          </div>
          {/* Google Maps embed per niche-google-maps-embed standard */}
          <div style={{ marginTop: 'clamp(2rem, 4vw, 4rem)', aspectRatio: '16/9', maxHeight: '400px', overflow: 'hidden' }}>
            <iframe
              title="Concrete Driveways of Oahu location"
              src={SITE.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, width: '100%', height: '100%' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
