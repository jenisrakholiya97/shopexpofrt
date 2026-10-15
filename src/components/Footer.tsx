import React from 'react'
import { ArrowUp, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react'
import { VniLogo } from './VniLogo'
import { COMPANY_DETAILS } from '../data/company'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container">
        {/* Top footer row with company info and links */}
        <div className="footer-top">
          <div>
            <div style={{ marginBottom: '16px' }}>
              <VniLogo variant="light" size="md" />
            </div>
            <p style={{ color: '#9fb2c8', maxWidth: '420px', lineHeight: '1.6', fontSize: '14px' }}>
              Direct supplier and merchant exporter of certified Indian fruits, vegetables, nuts,
              pulses (chana, moong, kidney beans), soyabean, basmati rice, and authentic spices. Sourced ethically from farm clusters
              and dispatched via Western Indian seaports and Mumbai Air Cargo.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
              <ShieldCheck size={18} color="var(--color-gold)" />
              <span style={{ fontSize: '13px' }}>Government of India Registered Exporter</span>
            </div>
          </div>

          <div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px' }}>Quick Navigation</div>
            <ul className="footer-links-list">
              <li>
                <a href="#products">Export Products</a>
              </li>
              <li>
                <a href="#why">Why VNI Quality</a>
              </li>
              <li>
                <a href="#process">How We Export</a>
              </li>
              <li>
                <a href="#about">About Our Facility</a>
              </li>
              <li>
                <a href="#contact">Request Quotation</a>
              </li>
            </ul>
          </div>

          <div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px' }}>Surat Trade Office</div>
            <div style={{ marginTop: '12px', lineHeight: '1.8', fontSize: '13.5px' }}>
              <div>{COMPANY_DETAILS.address.line1}</div>
              <div>{COMPANY_DETAILS.address.line2}</div>
              <div>{COMPANY_DETAILS.address.region}</div>
              <div style={{ marginTop: '8px' }}>
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} style={{ color: '#9fb2c8' }}>
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div>
                <a href={`mailto:${COMPANY_DETAILS.email}`} style={{ color: '#9fb2c8' }}>
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer row: all licence numbers removed */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} VNI Export &amp; Import, Surat, Gujarat. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', fontSize: '13px', color: '#94a3b8' }}>
            <span>Merchant Exporter</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span>Surat, Gujarat (India)</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span>Worldwide Delivery (CIF / CIP / FOB / FCA)</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-subtle btn-sm"
            style={{
              padding: '6px 12px',
              fontSize: '12.5px',
              minHeight: '32px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              borderColor: 'rgba(255, 255, 255, 0.15)',
            }}
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
