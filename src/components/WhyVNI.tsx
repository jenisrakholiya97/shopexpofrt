import React, { useState } from 'react'
import {
  CheckCircle2,
  ShieldCheck,
  Box,
  Ship,
  Plane,
  Truck,
  DollarSign,
  Clock,
  MapPin,
  FileCheck2,
} from 'lucide-react'
import { WHY_VNI_PILLARS, EXPORT_PORTS, DELIVERY_TERMS, MOQ_INFO } from '../data/company'
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

        {/* Strategic Sea & Air Port Dispatch Routing Widget */}
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
                Strategic Sea &amp; Air Connectivity
              </span>
              <h3 style={{ fontSize: '20px' }}>Direct Dispatch from Western India Ports &amp; Air Cargo</h3>
            </div>

            {/* Port Selection Tabs */}
            <div className="port-tabs" role="tablist" aria-label="Export Seaports and Air Cargo">
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

        {/* Requirements 5 & 6: Delivery Terms (Incoterms) and Minimum Order Quantity (MOQ) */}
        <div
          style={{
            marginTop: '32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '24px',
          }}
        >
          {/* 5. Delivery Terms Card */}
          <div
            className="card"
            style={{
              padding: '24px',
              borderLeft: '4px solid var(--color-navy-main)',
              background: '#ffffff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  background: 'rgba(18, 38, 63, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Truck size={20} color="var(--color-navy-main)" />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', margin: 0 }}>Delivery Terms</h3>
                <span style={{ fontSize: '12.5px', color: 'var(--color-orange-main)', fontWeight: 600 }}>
                  Incoterms: CIF / CIP / FOB / FCA
                </span>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', margin: '12px 0 16px' }}>
              We provide transparent international freight quotations under standard Incoterms 2020:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '10px',
              }}
            >
              {DELIVERY_TERMS.map((term) => (
                <div
                  key={term.code}
                  style={{
                    background: '#f8fafc',
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '4px',
                    }}
                  >
                    <strong style={{ fontSize: '17px', color: 'var(--color-navy-main)' }}>
                      {term.code}
                    </strong>
                    <span
                      style={{
                        fontSize: '10.5px',
                        padding: '1px 6px',
                        background: 'var(--color-navy-main)',
                        color: '#ffffff',
                        borderRadius: '3px',
                        fontWeight: 600,
                      }}
                    >
                      Incoterm
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-main)' }}>
                    {term.title}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    {term.mode}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. MOQ (Minimum Order Quantity) Card */}
          <div
            className="card"
            style={{
              padding: '24px',
              borderLeft: '4px solid var(--color-orange-main)',
              background: '#ffffff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  background: 'var(--color-orange-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box size={20} color="var(--color-orange-main)" />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', margin: 0 }}>MOQ (Minimum Order Quantity)</h3>
                <span style={{ fontSize: '12.5px', color: 'var(--color-navy-main)', fontWeight: 600 }}>
                  By Sea: 20 ft container &bull; By Air: 1 ton
                </span>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', margin: '12px 0 16px' }}>
              Flexible commercial order volumes tailored for full ocean containers and air shipments:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
              }}
            >
              <div
                style={{
                  background: '#f8fafc',
                  padding: '16px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    padding: '8px',
                    borderRadius: '50%',
                    background: 'rgba(18, 38, 63, 0.08)',
                    marginBottom: '6px',
                  }}
                >
                  <Ship size={22} color="var(--color-navy-main)" />
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  By Sea
                </div>
                <div
                  style={{
                    fontSize: '19px',
                    fontWeight: 800,
                    color: 'var(--color-navy-main)',
                    margin: '4px 0',
                  }}
                >
                  20 ft container
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-light)' }}>
                  Full Container Load (FCL)
                </div>
              </div>

              <div
                style={{
                  background: '#f8fafc',
                  padding: '16px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    padding: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-orange-subtle)',
                    marginBottom: '6px',
                  }}
                >
                  <Plane size={22} color="var(--color-orange-main)" />
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  By Air
                </div>
                <div
                  style={{
                    fontSize: '19px',
                    fontWeight: 800,
                    color: 'var(--color-orange-main)',
                    margin: '4px 0',
                  }}
                >
                  1 ton
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-light)' }}>
                  Air Cargo via Mumbai (BOM)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
