import React, { useEffect } from 'react'
import { X, ArrowRight, ShieldCheck, Box, Thermometer, Anchor, Calendar } from 'lucide-react'
import type { ProductItem } from '../types'

interface ProductModalProps {
  product: ProductItem | null
  onClose: () => void
  onSelectForQuote: (product: ProductItem) => void
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onSelectForQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (product) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="modal-header">
          <div>
            <span
              className="cap"
              style={{ marginBottom: '4px', fontSize: '11.5px', color: product.accentColor }}
            >
              Export Specifications
            </span>
            <h3 id="modal-title">{product.name} Details</h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div
            style={{
              position: 'relative',
              height: '180px',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '18px',
            }}
          >
            <img
              src={product.imageSrc}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(18, 38, 63, 0.75) 100%)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '14px',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '13px',
                textShadow: '0 1px 4px rgba(0,0,0,0.7)',
              }}
            >
              {product.tagline}
            </span>
          </div>

          <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', fontSize: '15px' }}>
            {product.summary}
          </p>

          <div
            style={{
              display: 'grid',
              gap: '14px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                background: '#f8fafc',
                padding: '14px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-navy-main)',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  marginBottom: '6px',
                }}
              >
                <ShieldCheck size={16} color="var(--color-orange-main)" />
                <span>Grading &amp; Quality</span>
              </div>
              <div style={{ fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
                {product.grades}
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--color-text-light)', marginTop: '4px' }}>
                Purity: {product.purity} | Moisture: {product.moisture}
              </div>
            </div>

            <div
              style={{
                background: '#f8fafc',
                padding: '14px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-navy-main)',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  marginBottom: '6px',
                }}
              >
                <Box size={16} color="var(--color-orange-main)" />
                <span>Export Packaging</span>
              </div>
              <div style={{ fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
                {product.packaging}
              </div>
            </div>

            <div
              style={{
                background: '#f8fafc',
                padding: '14px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-navy-main)',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  marginBottom: '6px',
                }}
              >
                <Thermometer size={16} color="var(--color-orange-main)" />
                <span>Storage &amp; Cold Chain</span>
              </div>
              <div style={{ fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
                {product.storageTemp}
              </div>
            </div>

            <div
              style={{
                background: '#f8fafc',
                padding: '14px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-navy-main)',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  marginBottom: '6px',
                }}
              >
                <Anchor size={16} color="var(--color-orange-main)" />
                <span>MOQ &amp; Loading Ports</span>
              </div>
              <div style={{ fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
                MOQ: {product.moq}
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--color-text-light)', marginTop: '4px' }}>
                Ports: {product.loadingPort}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '15px', marginBottom: '8px', color: 'var(--color-navy-main)' }}>
              Key Export Varieties:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {product.varieties.map((v, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '12.5px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: '#f1f5f9',
                    color: 'var(--color-navy-main)',
                    fontWeight: 500,
                  }}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              onSelectForQuote(product)
              onClose()
            }}
          >
            <span>Request Quote for {product.name}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
