import { Routes, Route } from 'react-router-dom'
import { NavCenteredBadgeTrades } from './components/library/nav-centered-badge-trades'
import { CtaStickyBottomBar } from './components/library/cta-sticky-bottom-bar'
import { CookieBanner } from './components/library/cookie-banner'
import ScrollToTop from './components/ScrollToTop'
import SkipLink from './components/SkipLink'
import SiteFooter from './components/SiteFooter'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'
import { SITE } from './content/site'

const LEFT_LINKS = [{ label: 'About', href: '/about' }]

const SERVICES_LINKS = [
  { label: 'All Services', href: '/services' },
]

const RIGHT_LINKS = [
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/#contact' },
]

export default function App() {
  return (
    <>
      <SkipLink />
      <ScrollToTop />
      <NavCenteredBadgeTrades
        brand={{ label: SITE.badgeShort, subline: 'Concrete', href: '/' }}
        leftLinks={LEFT_LINKS}
        servicesLabel="Services"
        servicesLinks={SERVICES_LINKS}
        rightLinks={RIGHT_LINKS}
        cta={{ label: 'Free Estimate', href: '/#contact' }}
        socialLinks={[
          { label: 'Facebook', href: SITE.facebookHref },
          { label: 'Instagram', href: SITE.instagramHref },
        ]}
      />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
      <CtaStickyBottomBar
        ctaHref="/#contact"
        ctaLabel="Free estimate"
        phoneHref={SITE.phoneHref}
        phoneLabel="Call now"
      />
      <CookieBanner policyHref="/legal" />
    </>
  )
}
