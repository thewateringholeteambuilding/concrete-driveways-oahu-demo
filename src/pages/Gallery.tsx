import { Helmet } from 'react-helmet-async'
import { SITE, GALLERY_ITEMS, STATS } from '../content/site'

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery | {SITE.shortName} Oahu, HI</title>
        <meta
          name="description"
          content={`${STATS[0].num} concrete projects across Oahu. Driveways, foundations, retaining walls, patios, decorative concrete, and repair.`}
        />
      </Helmet>

      <section className="section section--dark page-top">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow">Our Work</span>
          <h1 className="section-heading section-heading--center" style={{ fontSize: 'var(--text-h1)' }}>
            Before the Forms. After the Cure.
          </h1>
          <p className="section-lede" style={{ marginInline: 'auto', textAlign: 'center', maxWidth: '60ch' }}>
            {STATS[0].num} pours across {STATS[1].num} years on Oahu. A selection of recent projects.
          </p>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="gallery-4">
            {GALLERY_ITEMS.map((item) => (
              <figure key={item.label + item.scope}>
                <img src={item.image} alt={item.alt} loading="lazy" width="400" height="500" />
                <figcaption>{item.label} | {item.scope}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-heading section-heading--center" style={{ fontSize: 'clamp(2rem, 1rem + 4vw, 4rem)' }}>
            Have a Project in Mind?
          </h2>
          <p className="section-lede" style={{ marginInline: 'auto', textAlign: 'center', marginBottom: '2.5rem' }}>
            Send us the scope and a few photos. Written estimate within two business days.
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
