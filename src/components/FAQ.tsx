import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { FAQ_ITEMS } from '../data/company'

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section className="section" style={{ background: '#f5f8fc' }} aria-label="Frequently Asked Questions">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="cap">Trade FAQs</div>
          <h2>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '17px', marginTop: '8px' }}>
            Everything you need to know about purchasing, packaging, and international shipment.
          </p>
        </div>

        <div>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="faq-item">
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpCircle size={18} color="var(--color-orange-main)" />
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div id={`faq-answer-${index}`} className="faq-content">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
