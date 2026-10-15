import React, { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Floating WhatsApp Action */}
      <a
        href="https://wa.me/919510736285?text=Hello%20VNI%20Export%2C%20I%20would%20like%20to%20inquire%20about%20agricultural%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Direct WhatsApp Chat with Export Desk"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Floating Back-to-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  )
}
