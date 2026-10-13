import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import React from 'react'
import { HomePage } from '../routes/index'

describe('VNI Export & Import Landing Page Suite', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    window.scrollTo = vi.fn()
  })

  describe('1. Header & Navigation', () => {
    it('renders top bar contact info and Surat location', () => {
      render(<HomePage />)
      expect(screen.getAllByText(/Surat, Gujarat, India/i).length).toBeGreaterThan(0)
      expect(screen.getAllByText(/\+91 98765 43210/i).length).toBeGreaterThan(0)
      expect(screen.getAllByText(/exports@vniexport\.com/i).length).toBeGreaterThan(0)
    })

    it('renders brand logo with VNI Export & Import', () => {
      render(<HomePage />)
      const logos = screen.getAllByText(/Export & Import/i)
      expect(logos.length).toBeGreaterThan(0)
    })

    it('renders main desktop navigation links', () => {
      render(<HomePage />)
      const nav = screen.getByLabelText('Main Navigation')
      expect(nav).toHaveTextContent('Products')
      expect(nav).toHaveTextContent('Why VNI')
      expect(nav).toHaveTextContent('How We Export')
      expect(nav).toHaveTextContent('About')
      expect(nav).toHaveTextContent('Contact')
    })

    it('toggles mobile navigation drawer', () => {
      render(<HomePage />)
      const menuBtn = screen.getByLabelText('Open Navigation Menu')
      expect(menuBtn).toHaveAttribute('aria-expanded', 'false')

      // Open drawer
      fireEvent.click(menuBtn)
      expect(screen.getByLabelText('Close Navigation Menu')).toHaveAttribute('aria-expanded', 'true')

      // Click a link inside mobile drawer
      const mobileNav = screen.getByLabelText('Mobile Navigation')
      const productsLink = mobileNav.querySelector('a[href="#products"]')
      expect(productsLink).toBeInTheDocument()
      if (productsLink) {
        fireEvent.click(productsLink)
      }

      // Drawer closes
      expect(screen.getByLabelText('Open Navigation Menu')).toHaveAttribute('aria-expanded', 'false')
    })
  })

  describe('2. Hero Section & Stats Bar', () => {
    it('renders hero cap and headline', () => {
      render(<HomePage />)
      expect(screen.getByText(/Farm to port, Surat to the world/i)).toBeInTheDocument()
      expect(
        screen.getByText(/Indian fruits, vegetables, pulses & spices, exported with care/i)
      ).toBeInTheDocument()
    })

    it('renders 4 key statistics metrics', () => {
      render(<HomePage />)
      expect(screen.getByText('28+')).toBeInTheDocument()
      expect(screen.getByText(/Countries served worldwide/i)).toBeInTheDocument()

      expect(screen.getByText('16+')).toBeInTheDocument()
      expect(screen.getByText(/Years in agricultural trade/i)).toBeInTheDocument()

      expect(screen.getByText('50+')).toBeInTheDocument()
      expect(screen.getByText(/Agro products in export range/i)).toBeInTheDocument()

      expect(screen.getByText('IEC & FSSAI')).toBeInTheDocument()
      expect(screen.getByText(/Govt\. certified registered exporter/i)).toBeInTheDocument()
    })
  })

  describe('3. Products Catalog & Filtering', () => {
    it('renders all six initial categories', () => {
      render(<HomePage />)
      expect(screen.getByRole('heading', { name: /^Fruits$/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /^Vegetables$/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /^Nuts$/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /^Chana$/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /^Moong$/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /^Indian Spices$/i })).toBeInTheDocument()
    })

    it('filters products when clicking category tabs', () => {
      render(<HomePage />)
      const spicesTab = screen.getByRole('tab', { name: 'Spices' })
      fireEvent.click(spicesTab)

      expect(screen.getByRole('heading', { name: /^Indian Spices$/i })).toBeInTheDocument()
      expect(screen.queryByRole('heading', { name: /^Fruits$/i })).not.toBeInTheDocument()
      expect(screen.queryByRole('heading', { name: /^Vegetables$/i })).not.toBeInTheDocument()

      // Reset to all
      const allTab = screen.getByRole('tab', { name: 'All Products' })
      fireEvent.click(allTab)
      expect(screen.getByRole('heading', { name: /^Fruits$/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /^Vegetables$/i })).toBeInTheDocument()
    })

    it('filters products via search input', () => {
      render(<HomePage />)
      const searchInput = screen.getByPlaceholderText(/Search products, varieties\.\.\./i)
      fireEvent.change(searchInput, { target: { value: 'Turmeric' } })

      expect(screen.getByRole('heading', { name: /^Indian Spices$/i })).toBeInTheDocument()
      expect(screen.queryByRole('heading', { name: /^Fruits$/i })).not.toBeInTheDocument()

      // Search non-existing
      fireEvent.change(searchInput, { target: { value: 'NonExistentItem123' } })
      expect(screen.getByText(/No export products match/i)).toBeInTheDocument()

      // Reset filters button
      const resetBtn = screen.getByRole('button', { name: /Reset Filters/i })
      fireEvent.click(resetBtn)
      expect(screen.getByRole('heading', { name: /^Fruits$/i })).toBeInTheDocument()
    })
  })

  describe('4. Product Technical Specifications Modal', () => {
    it('opens modal on Quick Specs click and closes on close button', () => {
      render(<HomePage />)
      const quickSpecsButtons = screen.getAllByRole('button', { name: /View detailed specifications/i })
      fireEvent.click(quickSpecsButtons[0]) // Open Fruits specs

      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(screen.getByText(/Fruits Details/i)).toBeInTheDocument()
      expect(screen.getByText(/Export Specifications/i)).toBeInTheDocument()

      // Close modal
      const closeBtn = screen.getByLabelText('Close dialog')
      fireEvent.click(closeBtn)

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('closes modal on Escape key press', () => {
      render(<HomePage />)
      const quickSpecsButtons = screen.getAllByRole('button', { name: /View detailed specifications/i })
      fireEvent.click(quickSpecsButtons[0])
      expect(screen.getByRole('dialog')).toBeInTheDocument()

      fireEvent.keyDown(window, { key: 'Escape' })
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  describe('5. Why VNI & Seaport Routing', () => {
    it('renders 4 pillars', () => {
      render(<HomePage />)
      expect(screen.getByRole('heading', { name: /Quality Checked/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /Custom Packing/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /On-time Shipping/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /Fair, Clear Pricing/i })).toBeInTheDocument()
    })

    it('switches port information when selecting port tabs', () => {
      render(<HomePage />)
      expect(screen.getByText(/IN HZR 1/i)).toBeInTheDocument()

      const mundraTab = screen.getByRole('tab', { name: /Mundra Port/i })
      fireEvent.click(mundraTab)

      expect(screen.getByText(/IN MUN 1/i)).toBeInTheDocument()
      expect(screen.getByText(/High Frequency Sailings/i)).toBeInTheDocument()
    })
  })

  describe('6. Process & About Sections', () => {
    it('renders 4 step export milestones', () => {
      render(<HomePage />)
      expect(screen.getByText('01')).toBeInTheDocument()
      expect(screen.getByText('02')).toBeInTheDocument()
      expect(screen.getByText('03')).toBeInTheDocument()
      expect(screen.getByText('04')).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /Enquiry & Requirements/i })).toBeInTheDocument()
    })

    it('renders About section with Surat heritage and credentials', () => {
      render(<HomePage />)
      expect(screen.getByRole('heading', { name: /Based in Surat, trading with the world/i })).toBeInTheDocument()
      expect(screen.getByText(/\[Photo: warehouse \/ team \/ packing\]/i)).toBeInTheDocument()
    })
  })

  describe('7. Interactive Quote Form & Enquire Trigger', () => {
    it('pre-fills product when clicking Enquire on a card', () => {
      render(<HomePage />)
      const chanaEnquire = screen.getByLabelText(/Enquire about Chana/i)
      fireEvent.click(chanaEnquire)

      const productInput = screen.getByLabelText(/Product and quantity/i) as HTMLInputElement
      expect(productInput.value).toContain('Chana')
    })

    it('shows validation errors when submitting empty form', () => {
      render(<HomePage />)
      const submitBtn = screen.getByRole('button', { name: /Send Export Enquiry/i })
      fireEvent.click(submitBtn)

      expect(screen.getByText(/Please enter your name\./i)).toBeInTheDocument()
      expect(screen.getByText(/Please enter your company name and country\./i)).toBeInTheDocument()
      expect(screen.getByText(/Please enter your email or WhatsApp number\./i)).toBeInTheDocument()
      expect(screen.getByText(/Please specify the product and required quantity\./i)).toBeInTheDocument()
    })

    it('validates invalid email format', () => {
      render(<HomePage />)
      const nameInput = screen.getByLabelText(/^Name/i)
      const companyInput = screen.getByLabelText(/Company and country/i)
      const contactInput = screen.getByLabelText(/Email or WhatsApp/i)
      const productInput = screen.getByLabelText(/Product and quantity/i)

      fireEvent.change(nameInput, { target: { value: 'Rashid Khan' } })
      fireEvent.change(companyInput, { target: { value: 'Gulf Agro, Dubai' } })
      fireEvent.change(contactInput, { target: { value: 'invalid-email@' } })
      fireEvent.change(productInput, { target: { value: 'Kabuli Chana 20 MT' } })

      const submitBtn = screen.getByRole('button', { name: /Send Export Enquiry/i })
      fireEvent.click(submitBtn)

      expect(screen.getByText(/Please enter a valid email address\./i)).toBeInTheDocument()
    })

    it('submits valid form and displays confirmation voucher with reference ID', async () => {
      render(<HomePage />)
      const nameInput = screen.getByLabelText(/^Name/i)
      const companyInput = screen.getByLabelText(/Company and country/i)
      const contactInput = screen.getByLabelText(/Email or WhatsApp/i)
      const productInput = screen.getByLabelText(/Product and quantity/i)

      fireEvent.change(nameInput, { target: { value: 'Fatima Zahra' } })
      fireEvent.change(companyInput, { target: { value: 'Middle East Foods LLC, UAE' } })
      fireEvent.change(contactInput, { target: { value: 'trade@mefoods.ae' } })
      fireEvent.change(productInput, { target: { value: 'Salem Turmeric, 2 x 20ft FCL' } })

      const submitBtn = screen.getByRole('button', { name: /Send Export Enquiry/i })
      fireEvent.click(submitBtn)

      await waitFor(
        () => {
          expect(screen.getByTestId('quote-success-card')).toBeInTheDocument()
        },
        { timeout: 1500 }
      )

      expect(screen.getByText(/Enquiry Received Successfully!/i)).toBeInTheDocument()
      expect(screen.getByText(/Fatima Zahra/i)).toBeInTheDocument()
      expect(screen.getByText(/VNI-REQ-/i)).toBeInTheDocument()

      // Reset test
      const resetBtn = screen.getByRole('button', { name: /Submit Another Enquiry/i })
      fireEvent.click(resetBtn)
      expect(screen.getByTestId('quote-form')).toBeInTheDocument()
    })
  })

  describe('8. FAQ Accordion & Footer', () => {
    it('toggles FAQ questions on click', () => {
      render(<HomePage />)
      const secondQuestionBtn = screen.getByText(/Can you provide product samples before placing a commercial order\?/i)
      fireEvent.click(secondQuestionBtn)

      expect(
        screen.getByText(/Yes, we dispatch representative physical samples via DHL or FedEx Express/i)
      ).toBeInTheDocument()
    })

    it('renders footer registration IDs and copyright', () => {
      render(<HomePage />)
      expect(screen.getByText(/IEC No: 082100XXXX/i)).toBeInTheDocument()
      expect(screen.getByText(/GST No: 24AABCV1234F1Z0/i)).toBeInTheDocument()
      expect(screen.getAllByText(/FSSAI: 10722026000123/i).length).toBeGreaterThan(0)
    })
  })
})
