import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  Check,
  Clock3,
  Droplets,
  Flower2,
  House,
  Leaf,
  MapPin,
  Menu,
  Phone,
  Scissors,
  ShieldCheck,
  Shovel,
  Sparkles,
  Sprout,
  Trees,
  Waves,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PHONE_DISPLAY = "(951) 837-5781";
const PHONE_LINK = "tel:+19518375781";

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: House,
    title: "Residential landscaping",
    description: "Thoughtful, dependable care that keeps your home's outdoor spaces looking their best.",
  },
  {
    icon: Trees,
    title: "Commercial & community care",
    description: "Professional property maintenance for businesses, HOAs, and apartment communities.",
  },
  {
    icon: Clock3,
    title: "Weekly & biweekly upkeep",
    description: "A consistent maintenance rhythm to keep your landscape clean, healthy, and presentable.",
  },
  {
    icon: Scissors,
    title: "Trimming & weed control",
    description: "Pruning, trimming, and weed management for tidy edges and well-kept planting beds.",
  },
  {
    icon: Droplets,
    title: "Irrigation solutions",
    description: "Irrigation repairs and installation to support a thriving, water-wise landscape.",
  },
  {
    icon: Shovel,
    title: "Gravel, rock & pavers",
    description: "Clean, lasting hardscape details that bring structure and character to your property.",
  },
  {
    icon: Sprout,
    title: "Landscape improvements",
    description: "Refresh your outdoor space with practical upgrades and thoughtful enhancements.",
  },
  {
    icon: Flower2,
    title: "Seasonal cleanups",
    description: "Get your property back in shape with a thorough, detail-minded landscape cleanup.",
  },
];

const promises = [
  "Competitive pricing",
  "Quality workmanship",
  "Professional service",
  "Free property estimates",
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#top" aria-label="Green Horizon Landscaping Co. home">
      <svg className="brand-emblem" viewBox="0 0 58 48" role="img" aria-label="Mountain and leaf emblem">
        <path d="M3 36 22 18l8 7 12-15 13 13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 37h49" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M41 10c1-6 7-8 12-7-1 6-4 10-11 10" fill="currentColor" />
        <path d="M42 12c3-2 5-4 8-6" fill="none" stroke={light ? "#dce9d6" : "#ffffff"} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="brand-copy">
        <span className="brand-name">GREEN HORIZON</span>
        <span className="brand-subtitle"><i /> LANDSCAPING CO. <i /></span>
      </span>
    </a>
  );
}

function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a className={className} href={PHONE_LINK}>
      <Phone size={17} aria-hidden="true" />
      <span>{PHONE_DISPLAY}</span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <div className="topline">
        <div className="topline-inner">
          <span><MapPin size={13} aria-hidden="true" /> Proudly serving the Inland Empire</span>
          <a href={PHONE_LINK}><Phone size={13} aria-hidden="true" /> Call us: {PHONE_DISPLAY}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>Why Green Horizon</a>
            <a href="#service-area" onClick={closeMenu}>Service area</a>
            <a className="mobile-nav-phone" href={PHONE_LINK}><Phone size={16} /> {PHONE_DISPLAY}</a>
          </nav>
          <div className="header-actions">
            <PhoneLink className="header-phone" />
            <a className="button button-small button-green" href="#contact">Free estimate <ArrowUpRight size={16} /></a>
          </div>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-photo" src="/manus-storage/async-images/UdVljUgCLl1iDiSfESZdSF/image-1.webp" alt="A beautifully landscaped Southern California home with a fresh green lawn and palms" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A fresh start for your landscape</p>
              <h1 id="hero-title">A better view<br />starts <em>right outside.</em></h1>
              <p className="hero-description">Ready for a change in your landscaping service? Let’s make your property clean, cared for, and looking its best.</p>
              <div className="hero-actions">
                <a className="button button-lime" href="#contact">Get a free estimate <ArrowUpRight size={18} /></a>
                <a className="button button-outline-light" href={PHONE_LINK}><Phone size={17} /> Call {PHONE_DISPLAY}</a>
              </div>
              <div className="hero-footnote"><Check size={15} /> Professional care for homes, businesses & communities</div>
            </div>
            <div className="hero-note">
              <div className="hero-note-icon"><Leaf size={19} /></div>
              <div><strong>Rooted in quality.</strong><span>Growing trust across the Inland Empire.</span></div>
              <ArrowDown size={17} className="hero-note-arrow" />
            </div>
          </div>
          <div className="hero-bottom-fade" />
        </section>

        <section className="intro section-pad" id="about">
          <div className="intro-kicker"><span className="kicker-index">01</span><span>Where quality exceeds expectations</span></div>
          <div className="intro-main">
            <h2>Good landscaping is more than a first impression.</h2>
            <div className="intro-text">
              <p>It’s the care you notice every time you come home, welcome a customer, or walk your community. Green Horizon Landscaping Co. takes pride in keeping properties clean, maintained, and looking their best.</p>
              <a className="text-link" href="#services">Explore what we do <ArrowRight size={17} /></a>
            </div>
          </div>
          <div className="audience-row" aria-label="Who we work with">
            <span><House size={18} /> Homeowners</span>
            <span><Sparkles size={18} /> Business owners</span>
            <span><Trees size={18} /> Property managers</span>
            <span><Leaf size={18} /> HOAs & apartments</span>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> Landscapes made to feel cared for</p>
              <h2>Care that covers<br /><em>every corner.</em></h2>
            </div>
            <p className="section-heading-copy">From dependable routine maintenance to thoughtful outdoor improvements, we bring quality and attention to the details that make a difference.</p>
          </div>

          <div className="services-layout">
            <div className="service-list">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-number">0{index + 1}</div>
                    <div className="service-icon"><Icon size={21} strokeWidth={1.7} /></div>
                    <div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p></div>
                    <ArrowUpRight className="service-arrow" size={19} />
                  </article>
                );
              })}
            </div>
            <aside className="service-aside">
              <div className="aside-photo-wrap">
                <img src="/manus-storage/async-images/UdVljUgCLl1iDiSfESZdSF/image-2.webp" alt="Neatly maintained residential garden with a clean lawn and planting beds" loading="lazy" />
                <span className="photo-caption"><Leaf size={14} /> Thoughtful care, right at home</span>
              </div>
              <div className="aside-card">
                <span className="aside-card-label">A schedule that fits</span>
                <h3>Consistent care.<br /><em>Beautifully done.</em></h3>
                <p>Choose weekly or biweekly maintenance and enjoy a property that’s ready for the everyday.</p>
                <a href="#contact" className="aside-link">Let’s talk about your property <ArrowRight size={16} /></a>
              </div>
            </aside>
          </div>
          <div className="service-cta-band">
            <div><span className="service-cta-leaf"><Leaf size={18} /></span><p><strong>Have a project in mind?</strong> Tell us what your landscape needs.</p></div>
            <a href="#contact" className="button button-dark">Request a free estimate <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section className="promise-section" aria-labelledby="promise-title">
          <div className="promise-photo">
            <img src="/manus-storage/async-images/UdVljUgCLl1iDiSfESZdSF/image-3.webp" alt="Professionally maintained commercial landscape at a Southern California property" loading="lazy" />
            <div className="promise-photo-label"><span className="photo-label-dot" /> Care that makes a difference</div>
          </div>
          <div className="promise-content">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> The Green Horizon difference</p>
            <h2 id="promise-title">The right team<br />changes <em>everything.</em></h2>
            <p className="promise-description">Give us the opportunity to earn your business. We show up with a professional approach, quality workmanship, and real attention to your property.</p>
            <div className="promise-list">
              {promises.map((promise) => <div key={promise}><span><Check size={14} strokeWidth={2.7} /></span>{promise}</div>)}
            </div>
            <a href="#contact" className="button button-lime">Let’s talk about your property <ArrowUpRight size={17} /></a>
            <div className="promise-stamp"><ShieldCheck size={19} /><span>Professional<br />property care</span></div>
          </div>
        </section>

        <section className="service-area section-pad" id="service-area">
          <div className="area-marker"><MapPin size={22} /></div>
          <div className="area-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Your local landscape partner</p>
            <h2>Rooted in the<br /><em>Inland Empire.</em></h2>
            <p>From the front yard to the whole community, we’re ready to help local homeowners, businesses, and property managers care for the places they call theirs.</p>
          </div>
          <div className="area-detail">
            <div className="area-detail-icon"><BadgeDollarSign size={23} /></div>
            <span>Start with a conversation</span>
            <strong>Free property estimates.</strong>
            <p>No pressure—just a chance to talk through your landscape and what it needs.</p>
            <a href={PHONE_LINK} className="text-link">Call {PHONE_DISPLAY} <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Let’s get your property looking its best</p>
              <h2>Ready for a<br /><em>greener horizon?</em></h2>
              <p>Property managers, business owners, and homeowners—we’d love the opportunity to earn your business.</p>
              <a className="button button-lime contact-primary" href={PHONE_LINK}><Phone size={18} /> Call for your free estimate <ArrowUpRight size={17} /></a>
            </div>
            <div className="contact-panel">
              <div className="contact-item">
                <span className="contact-icon"><Phone size={20} /></span>
                <div><span>Call or message us</span><a className="contact-phone" href={PHONE_LINK}>{PHONE_DISPLAY}</a><span className="contact-direct-actions"><a href={PHONE_LINK}>Call</a><a href="sms:+19518375781">Message us</a></span></div>
                <ArrowUpRight className="contact-arrow" size={19} />
              </div>
              <div className="contact-item">
                <span className="contact-icon"><MapPin size={20} /></span>
                <div><span>Our service area</span><strong>Inland Empire, California</strong><small>Residential & commercial properties</small></div>
                <ArrowUpRight className="contact-arrow" size={19} />
              </div>
              <div className="contact-panel-note"><Waves size={17} /> Competitive pricing. Quality work. Professional care.</div>
            </div>
          </div>
          <div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-wrap"><BrandMark light /><p>Where quality exceeds expectations.</p></div>
          <div className="footer-note"><span className="footer-note-mark"><Leaf size={17} /></span><p>Keeping Inland Empire properties<br />clean, maintained & looking their best.</p></div>
          <a className="footer-call" href={PHONE_LINK}><span>Call Green Horizon</span><strong>{PHONE_DISPLAY}</strong><ArrowUpRight size={19} /></a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Green Horizon Landscaping Co.</span><a href="#top">Back to top <ArrowUpRight size={14} /></a><span>Serving the Inland Empire</span></div>
      </footer>
    </div>
  );
}
