import React from 'react'
import { Building2, CheckCircle2, Award, Truck, Shield } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="section about-section" aria-label="About VNI Export and Import">
      <div className="container">
        <div
          className="grid-2"
          style={{ alignItems: 'center', gap: '48px' }}
        >
          {/* Left Column Text */}
          <div>
            <div className="cap cap-gold">About us</div>
            <h2 style={{ marginBottom: '16px' }}>Based in Surat, trading with the world</h2>

            <p
              style={{
                lineHeight: '1.7',
                color: 'var(--color-text-inv-muted)',
                fontSize: '18px',
                marginBottom: '18px',
              }}
            >
              Founded in Surat—the vibrant commercial capital of Gujarat—VNI Export &amp; Import
              bridges India's fertile agricultural belts with global food importers, wholesale distributors,
              and supermarket chains.
            </p>

            <p
              style={{
                lineHeight: '1.7',
                color: 'var(--color-text-inv-muted)',
                fontSize: '16px',
                marginBottom: '24px',
              }}
            >
              With direct grower partnerships across Gujarat, Maharashtra, Rajasthan, and Madhya Pradesh,
              we ensure absolute origin traceability, stringent sortex cleaning, and climate-controlled
              cold storage from farm harvest to ocean vessel loading.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px',
                marginTop: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                <CheckCircle2 size={16} color="var(--color-gold)" />
                <span>Modern 40,000 sq.ft. Packhouse</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                <CheckCircle2 size={16} color="var(--color-gold)" />
                <span>Zero-Delay Customs Filing</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                <CheckCircle2 size={16} color="var(--color-gold)" />
                <span>100% Phytosanitary Clean</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                <CheckCircle2 size={16} color="var(--color-gold)" />
                <span>Temperature Data Loggers</span>
              </div>
            </div>
          </div>

          {/* Right Column Photo block matching original placeholder */}
          <div className="about-photo-card">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(18, 38, 63, 0.7)',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12.5px',
                fontWeight: 600,
                alignSelf: 'flex-start',
              }}
            >
              <Building2 size={16} color="var(--color-gold)" />
              <span>Surat Packhouse &amp; Cold Storage Hub</span>
            </div>

            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <Truck size={32} color="var(--color-gold)" />
              </div>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '6px',
                }}
              >
                [Photo: warehouse / team / packing]
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-text-inv-muted)', maxWidth: '340px', margin: '0 auto' }}>
                Multi-commodity grading lines, vacuum nitrogen-flush packing machinery, and pre-cooling reefer chambers.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <span>IEC: 082100XXXX</span>
              <span>FSSAI: 10722026000123</span>
              <span>APEDA: RCMC-AP/9876</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
