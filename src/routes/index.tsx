import { createFileRoute } from '@tanstack/react-router'
import React, { useState, useRef } from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Products } from '../components/Products'
import { ProductModal } from '../components/ProductModal'
import { WhyVNI } from '../components/WhyVNI'
import { Process } from '../components/Process'
import { About } from '../components/About'
import { ContactQuote } from '../components/ContactQuote'
import type { ContactQuoteHandle } from '../components/ContactQuote'
import { FAQ } from '../components/FAQ'
import { Footer } from '../components/Footer'
import { FloatingActions } from '../components/FloatingActions'
import { PRODUCTS_DATA } from '../data/products'
import type { ProductItem } from '../types'

export const Route = createFileRoute('/')({
  component: HomePage,
})

export function HomePage() {
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null)
  const contactFormRef = useRef<ContactQuoteHandle>(null)

  const handleScrollToQuote = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectProductForQuote = (product: ProductItem) => {
    if (contactFormRef.current) {
      contactFormRef.current.prefillProduct(product.name, product.category)
    } else {
      handleScrollToQuote()
    }
  }

  const handleOpenSpecsModal = (product: ProductItem) => {
    setSelectedProductForModal(product)
  }

  const handleCloseSpecsModal = () => {
    setSelectedProductForModal(null)
  }

  return (
    <div className="vni-page-wrapper">
      {/* Top bar & Sticky Navigation Header */}
      <Header onQuoteClick={handleScrollToQuote} />

      <main id="main-content">
        {/* Hero Section & Key Metrics */}
        <Hero onRequestQuote={handleScrollToQuote} />

        {/* Six Categories Product Catalog */}
        <Products
          products={PRODUCTS_DATA}
          onSelectProduct={handleSelectProductForQuote}
          onOpenSpecs={handleOpenSpecsModal}
        />

        {/* Why VNI - 4 Pillars & Port Routing */}
        <WhyVNI />

        {/* How We Export - 4 Steps */}
        <Process />

        {/* About VNI - Surat Global Agro Trade Hub */}
        <About />

        {/* Interactive Quote Request Form & Contact Info */}
        <ContactQuote ref={contactFormRef} />

        {/* International Trade FAQs */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Technical Specs Modal */}
      <ProductModal
        product={selectedProductForModal}
        onClose={handleCloseSpecsModal}
        onSelectForQuote={handleSelectProductForQuote}
      />

      {/* Floating WhatsApp and Scroll Top */}
      <FloatingActions />
    </div>
  )
}
