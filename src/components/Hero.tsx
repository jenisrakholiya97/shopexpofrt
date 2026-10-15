import React from 'react'
import { ArrowRight, ShieldCheck, Award, Globe, Ship } from 'lucide-react'
import { VniLogo } from './VniLogo'

interface HeroProps {
  onRequestQuote: () => void
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  return (
    <>
      {/* Hero Section matching original ID #top and colors */}
      <section id="top" className="hero-section" aria-label="Hero Introduction">
        <div className="container">
          <div className="hero-content">
            {/* Front Hero Brand Logo Emblem */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                marginBottom: '16px',
                padding: '6px 16px',
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <VniLogo size="sm" variant="light" />
            </div>

            <div className="cap cap-gold">
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--color-gold)',
                }}
              />
              Farm to port, Surat to the world
            </div>

            <h1>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.42em',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '10px',
                }}
              >
                VNI Export &amp; Import • Surat, Gujarat
              </span>
              Indian fruits, vegetables, pulses &amp; spices, exported with care
            </h1>

            <p className="hero-description">
              VNI Export &amp; Import supplies fresh produce, nuts, pulses, soyabean, basmati rice,
              and whole and ground spices to buyers worldwide, packed to your specification and shipped on time.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                onClick={onRequestQuote}
                className="btn btn-primary"
                aria-label="Request an Export Quote"
              >
                <span>Request a Quote</span>
                <ArrowRight size={18} />
              </button>

              <a href="#products" className="btn btn-outline" aria-label="View our product range">
                <span>View Products</span>
              </a>
            </div>

            {/* Certifications and Trust Indicators */}
            <div className="hero-badges-row">
              <div className="hero-badge-item">
                <ShieldCheck size={18} color="#ff9f1c" />
                <span>APEDA &amp; FSSAI Certified</span>
              </div>
              <div className="hero-badge-item">
                <Award size={18} color="#ff9f1c" />
                <span>Sortex 99.5% Graded</span>
              </div>
              <div className="hero-badge-item">
                <Ship size={18} color="#ff9f1c" />
                <span>Hazira, Mundra &amp; Mumbai (Air)</span>
              </div>
              <div className="hero-badge-item">
                <Globe size={18} color="#ff9f1c" />
                <span>CIF / CIP / FOB / FCA Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar matching original: background: #12263f, [XX]+ Countries served etc. */}
      <section className="stats-section" aria-label="Key Export Statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-num">28+</div>
              <div className="stat-label">Countries served worldwide</div>
            </div>

            <div className="stat-item">
              <div className="stat-num">16+</div>
              <div className="stat-label">Years in agricultural trade</div>
            </div>

            <div className="stat-item">
              <div className="stat-num">50+</div>
              <div className="stat-label">Agro products in export range</div>
            </div>

            <div className="stat-item">
              <div className="stat-num">IEC &amp; FSSAI</div>
              <div className="stat-label">Govt. certified registered exporter</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
