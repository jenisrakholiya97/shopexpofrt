import React from 'react'
import { ArrowRight, Info, CheckCircle2, PackageCheck } from 'lucide-react'
import type { ProductItem } from '../types'

interface ProductCardProps {
  product: ProductItem
  onSelectProduct: (product: ProductItem) => void
  onOpenSpecs: (product: ProductItem) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onOpenSpecs,
}) => {
  return (
    <article className="card product-card" aria-labelledby={`product-heading-${product.id}`}>
      <div>
        {/* Photo with actual product image, overlay and label matching original layout */}
        <div
          className="product-photo-holder"
          style={{ backgroundColor: product.bgSoft }}
          data-testid={`product-photo-${product.id}`}
        >
          <img
            src={product.imageSrc}
            alt={`${product.name} - ${product.tagline}`}
            className="product-photo-img"
            loading="lazy"
          />
          <div className="product-photo-overlay" />

          <div className="product-photo-badge" style={{ color: product.accentColor }}>
            {product.badge}
          </div>

          <div className="product-photo-label">
            <PackageCheck size={16} color="#ff9f1c" />
            <span>[Photo: {product.name.toLowerCase()}]</span>
          </div>
        </div>

        {/* Product Heading & Varieties */}
        <h3 id={`product-heading-${product.id}`} style={{ marginBottom: '8px' }}>
          {product.name}
        </h3>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '13.5px', marginBottom: '14px', minHeight: '38px', lineHeight: '1.45' }}>
          {product.varieties.join(' • ')}
        </p>

        {/* Quick Specs summary */}
        <div className="product-specs-list">
          <div className="spec-line">
            <span>Grade:</span>
            <strong>{product.grades.split(',')[0]}</strong>
          </div>
          <div className="spec-line">
            <span>Packaging:</span>
            <strong>{product.packaging.split(',')[0]}</strong>
          </div>
          <div className="spec-line">
            <span>MOQ:</span>
            <strong style={{ fontSize: '12.5px' }}>{product.moq}</strong>
          </div>
        </div>
      </div>

      {/* Card Action Row */}
      <div className="product-card-actions">
        <button
          type="button"
          onClick={() => onOpenSpecs(product)}
          className="btn btn-subtle btn-sm"
          style={{ fontSize: '13px', padding: '6px 12px', minHeight: '34px' }}
          aria-label={`View detailed specifications for ${product.name}`}
        >
          <Info size={14} />
          <span>Quick Specs</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectProduct(product)}
          className="enquire-link"
          aria-label={`Enquire about ${product.name}`}
        >
          <span>Enquire</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  )
}
