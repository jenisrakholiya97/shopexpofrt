import React, { useState } from 'react'
import { CheckCircle2, ShieldCheck, Box, Ship, DollarSign, Clock, MapPin } from 'lucide-react'
import { WHY_VNI_PILLARS, EXPORT_PORTS } from '../data/company'
import type { PortInfo } from '../data/company'

export const WhyVNI: React.FC = () => {
  const [selectedPort, setSelectedPort] = useState<PortInfo>(EXPORT_PORTS[0])

  return (
    <section id="why" className="section why-section" aria-label="Why Choose VNI Export and Import">
      <div className="container">
        {/* Cap and Title matching original */}
        <div className="cap">Why VNI</div>
        <h2 style={{ marginBottom: '40px' }}>What buyers can count on</h2>

        {/* 4 Pillars Grid */}
        <div className="grid-auto">
          {WHY_VNI_PILLARS.map((pillar, idx) => (
            <div key={idx} className="why-pillar-card">
              <div className="why-pillar-icon">
                {idx === 0 && <ShieldCheck size={22} />}
                {idx === 1 && <Box size={22} />}
                {idx === 2 && <Ship size={22} />}
                {idx === 3 && <DollarSign size={22} />}
              </div>

              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{pillar.title}</h3>

              <p style={{ lineHeight: '1.6', color: 'var(--color-text-muted)', fontSize: '15px' }}>
                {pillar.description}
              </p>

              <ul className="why-pillar-points">
                {pillar.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Strategic Seaport Dispatch Routing Widget */}
        <div className="ports-container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            <div>
              <span className="cap" style={{ marginBottom: '4px' }}>
                Strategic Seaport Connectivity
              </span>
              <h3 style={{ fontSize: '20px' }}>Direct Dispatch from Western India Ports</h3>
            </div>

            {/* Port Selection Tabs */}
            <div className="port-tabs" role="tablist" aria-label="Export Seaports">
              {EXPORT_PORTS.map((port) => (
                <button
                  key={port.code}
                  role="tab"
                  aria-selected={selectedPort.code === port.code}
                  className={`port-tab-btn ${selectedPort.code === port.code ? 'is-active' : ''}`}
                  onClick={() => setSelectedPort(port)}
                >
                  {port.name}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gap: '20px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              background: '#f8fafc',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid var(--color-border)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 700,
                  fontSize: '16px',
                  marginBottom: '6px',
                }}
              >
                <MapPin size={18} color="var(--color-orange-main)" />
                <span>{selectedPort.name}</span>
                <span
                  style={{
                    fontSize: '12px',
                    padding: '2px 8px',
                    background: '#e2e8f0',
                    borderRadius: '4px',
                    color: 'var(--color-navy-main)',
                  }}
                >
                  {selectedPort.code}
                </span>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '8px' }}>
                {selectedPort.specialty}
              </p>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-orange-main)' }}>
                {selectedPort.badge}
              </div>
            </div>

            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 700,
                  fontSize: '15px',
                  marginBottom: '10px',
                }}
              >
                <Clock size={16} color="var(--color-orange-main)" />
                <span>Indicative Transit Lead Times</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  fontSize: '13.5px',
                }}
              >
                <div style={{ background: '#ffffff', padding: '8px 12px', borderRadius: '6px' }}>
                  <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '12px' }}>
                    Middle East / GCC:
                  </span>
                  <strong>{selectedPort.transitToMiddleEast}</strong>
                </div>

                <div style={{ background: '#ffffff', padding: '8px 12px', borderRadius: '6px' }}>
                  <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '12px' }}>
                    Europe (Rotterdam/UK):
                  </span>
                  <strong>{selectedPort.transitToEurope}</strong>
                </div>

                <div style={{ background: '#ffffff', padding: '8px 12px', borderRadius: '6px' }}>
                  <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '12px' }}>
                    Southeast Asia:
                  </span>
                  <strong>{selectedPort.transitToAsia}</strong>
                </div>

                <div style={{ background: '#ffffff', padding: '8px 12px', borderRadius: '6px' }}>
                  <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '12px' }}>
                    North America:
                  </span>
                  <strong>{selectedPort.transitToUS}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
