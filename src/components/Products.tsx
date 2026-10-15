import React, { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import type { ProductItem, ProductCategory } from '../types'
import { ProductCard } from './ProductCard'

interface ProductsProps {
  products: ProductItem[]
  onSelectProduct: (product: ProductItem) => void
  onOpenSpecs: (product: ProductItem) => void
}

const CATEGORIES: ProductCategory[] = [
  'All',
  'Fruits',
  'Vegetables',
  'Nuts',
  'Pulses',
  'Soyabean',
  'Rice',
  'Spices',
]

export const Products: React.FC<ProductsProps> = ({
  products,
  onSelectProduct,
  onOpenSpecs,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      const matchesCategory =
        selectedCategory === 'All' || prod.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        query === '' ||
        prod.name.toLowerCase().includes(query) ||
        prod.varieties.some((v) => v.toLowerCase().includes(query)) ||
        prod.summary.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [products, selectedCategory, searchQuery])

  return (
    <section id="products" className="section" aria-label="Our Export Product Catalog">
      <div className="container">
        {/* Section Header */}
        <div className="cap">Our products</div>
        <div className="products-header">
          <div>
            <h2 style={{ marginBottom: '8px' }}>Seven categories, one reliable supplier</h2>
            <p style={{ fontSize: '18px', color: 'var(--color-text-muted)', maxWidth: '640px' }}>
              Sourced from trusted growers across India and graded before shipment.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search products, varieties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Filter products by name or variety"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs" role="tablist" aria-label="Product Categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`category-tab-btn ${selectedCategory === cat ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'All' ? 'All Products' : cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid-auto">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onOpenSpecs={onOpenSpecs}
              />
            ))}
          </div>
        ) : (
          <div
            className="card"
            style={{ textAlign: 'center', padding: '48px 24px', color: 'var(--color-text-muted)' }}
          >
            <p style={{ fontSize: '17px', fontWeight: 600, marginBottom: '8px' }}>
              No export products match "{searchQuery}"
            </p>
            <p style={{ fontSize: '14px', marginBottom: '16px' }}>
              Try searching for "Alphonso", "Onion", "Cashew", or "Turmeric".
            </p>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
