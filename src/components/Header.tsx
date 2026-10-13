import React, { useState } from 'react'
import { MapPin, Phone, Mail, Menu, X, ArrowRight, Clock } from 'lucide-react'

interface HeaderProps {
  onQuoteClick?: () => void
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (onQuoteClick) {
      onQuoteClick()
    } else {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* Top Bar matching original: background: #12263f */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-items">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="#ff9f1c" />
              <span>Surat, Gujarat, India</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', opacity: 0.85 }}>
              <Clock size={13} color="#ff9f1c" />
              <span style={{ fontSize: '12.5px' }}>Mon–Sat: 9:00 AM – 7:00 PM IST</span>
            </span>
          </div>

          <div className="top-bar-items">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar-link"
              aria-label="WhatsApp Contact"
            >
              <Phone size={13} color="#25d366" />
              <span>+91 98765 43210</span>
            </a>
            <span style={{ opacity: 0.4 }}>|</span>
            <a
              href="mailto:exports@vniexport.com"
              className="top-bar-link"
              aria-label="Email Contact"
            >
              <Mail size={13} color="#ff9f1c" />
              <span>exports@vniexport.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="site-header" id="top-nav">
        <div className="container header-nav">
          {/* Logo matching original: "VNI Export & Import" */}
          <a href="#top" className="brand-logo" aria-label="VNI Export and Import Home">
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                background: '#12263f',
                color: '#ffffff',
                borderRadius: '6px',
                fontSize: '18px',
                fontWeight: 800,
                letterSpacing: '-0.03em',
              }}
            >
              V
            </span>
            <span>
              VNI <span className="brand-accent">Export &amp; Import</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-links" aria-label="Main Navigation">
            <a href="#products">Products</a>
            <a href="#why">Why VNI</a>
            <a href="#process">How We Export</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Header Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="nav-cta-wrapper">
              <a href="#contact" onClick={handleQuoteClick} className="btn btn-primary btn-sm">
                <span>Get a Quote</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-nav-drawer"
          className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
          aria-hidden={!mobileMenuOpen}
        >
          <nav className="mobile-nav-links" aria-label="Mobile Navigation">
            <a href="#products" onClick={handleNavClick}>
              <span>Products</span>
              <ArrowRight size={16} />
            </a>
            <a href="#why" onClick={handleNavClick}>
              <span>Why VNI</span>
              <ArrowRight size={16} />
            </a>
            <a href="#process" onClick={handleNavClick}>
              <span>How We Export</span>
              <ArrowRight size={16} />
            </a>
            <a href="#about" onClick={handleNavClick}>
              <span>About Us</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" onClick={handleNavClick}>
              <span>Contact &amp; Enquiry</span>
              <ArrowRight size={16} />
            </a>
          </nav>

          <a
            href="#contact"
            onClick={handleQuoteClick}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Request Instant Quote</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </header>
    </>
  )
}
