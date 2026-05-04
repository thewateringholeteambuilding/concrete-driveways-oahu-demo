import { Helmet } from 'react-helmet-async'
import { SITE } from '../content/site'

export default function Legal() {
  return (
    <>
      <Helmet>
        <title>Privacy and Terms | {SITE.shortName}</title>
        <meta name="description" content={`Privacy policy and terms of service for ${SITE.businessName}.`} />
      </Helmet>

      <section className="section page-top">
        <div className="container" style={{ maxWidth: '70ch' }}>
          <span className="section-eyebrow">Legal</span>
          <h1 className="section-heading" style={{ fontSize: 'var(--text-h1)' }}>Privacy and Terms.</h1>

          <h2 style={{ fontSize: 'var(--text-h3)', marginTop: 'var(--space-block)', marginBottom: '0.75rem' }}>Privacy policy</h2>
          <p style={{ marginBottom: '1.25rem', lineHeight: 1.65 }}>
            {SITE.businessName} collects only the information you provide on contact forms and during the estimate process: name, contact details, address, and photos of the project site. We share that information only with our material suppliers for job-specific ordering and with the permitting authority when required. We never sell or rent customer data. We retain project records for seven years to support the workmanship warranty. To request a copy of your records or deletion of contact data, call {SITE.phone} and ask for the office.
          </p>

          <h2 style={{ fontSize: 'var(--text-h3)', marginTop: 'var(--space-block)', marginBottom: '0.75rem' }}>Workmanship warranty</h2>
          <p style={{ marginBottom: '1.25rem', lineHeight: 1.65 }}>
            Every concrete pour we complete carries a five-year workmanship warranty for the original property owner. The warranty covers cracks attributable to base prep defects, control-joint spacing errors, or finishing defects on the slabs we poured. It does not cover damage from natural disasters, neglect, or modifications made after final walk. The warranty transfers to a new owner if the property is sold, with the original invoice as proof.
          </p>

          <h2 style={{ fontSize: 'var(--text-h3)', marginTop: 'var(--space-block)', marginBottom: '0.75rem' }}>Terms of service</h2>
          <p style={{ marginBottom: '1.25rem', lineHeight: 1.65 }}>
            All work performed by {SITE.businessName} is done under Hawaii contractor license {SITE.license}. Estimates are valid for sixty days from the date of issue. Final invoice matches the written estimate; any changes to scope require a written change order signed by the property owner before additional work begins. Payment terms are net thirty from the date of substantial completion.
          </p>

          <h2 style={{ fontSize: 'var(--text-h3)', marginTop: 'var(--space-block)', marginBottom: '0.75rem' }}>Contact</h2>
          <p style={{ lineHeight: 1.65 }}>
            Questions about this policy can be sent to {SITE.email} or by mail to {SITE.address}.
          </p>
        </div>
      </section>
    </>
  )
}
