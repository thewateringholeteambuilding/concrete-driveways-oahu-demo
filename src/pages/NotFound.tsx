import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CtaSquareBoldVariant } from '../components/library/cta-square-bold-variant'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found | 404</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="section page-top" style={{ minHeight: '60vh' }}>
        <div className="container">
          <span className="section-eyebrow">404</span>
          <h1 className="section-heading" style={{ fontSize: 'var(--text-h1)' }}>
            This slab has not been poured yet.
          </h1>
          <p className="section-lede">
            The page you are looking for moved or never existed. Head back to the home page or get a free estimate.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: 'var(--space-block)' }}>
            <CtaSquareBoldVariant href="/" size="md">Back to home</CtaSquareBoldVariant>
            <Link to="/#contact" style={{ alignSelf: 'center', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              Free estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
