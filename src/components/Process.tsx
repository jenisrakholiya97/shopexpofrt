import React from 'react'
import { PROCESS_STEPS } from '../data/company'

export const Process: React.FC = () => {
  return (
    <section id="process" className="section" aria-label="Our Export Process">
      <div className="container">
        {/* Cap and Title matching original */}
        <div className="cap">How we export</div>
        <h2 style={{ marginBottom: '40px' }}>From your enquiry to your port</h2>

        {/* 4 Process Step Cards */}
        <div className="grid-auto">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="process-step-card">
              <div className="process-step-num">{step.number}</div>
              <h3 style={{ fontSize: '20px', margin: '8px 0 10px' }}>{step.title}</h3>
              <p style={{ lineHeight: '1.5', color: 'var(--color-text-muted)', fontSize: '15px' }}>
                {step.description}
              </p>
              <div className="process-step-deliverable">
                <span style={{ fontWeight: 600, color: 'var(--color-navy-main)' }}>Key Output: </span>
                {step.deliverable}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
