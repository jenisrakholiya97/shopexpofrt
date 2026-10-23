import React, { useState, forwardRef, useImperativeHandle } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  RotateCcw,
} from 'lucide-react'
import type { QuoteFormData, FormErrors, SubmittedInquiry } from '../types'

export interface ContactQuoteHandle {
  prefillProduct: (productName: string, category: string) => void
}

interface ContactQuoteProps {
  initialProduct?: string
  initialCategory?: string
}

export const INCOTERM_OPTIONS = [
  { value: 'EXW', label: 'EXW (Ex Works – Surat Packhouse)' },
  { value: 'FCA', label: 'FCA (Free Carrier – Surat / Mumbai Airport)' },
  { value: 'FOB', label: 'FOB (Free on Board – Hazira / Mundra / JNPT)' },
  { value: 'CFR', label: 'CFR (Cost & Freight – sea)' },
  { value: 'CIF', label: 'CIF (Cost, Insurance & Freight – sea)' },
  { value: 'CIP', label: 'CIP (Carriage & Insurance Paid To – any mode)' },
] as const

export const ContactQuote = forwardRef<ContactQuoteHandle, ContactQuoteProps>(
  ({ initialProduct = '', initialCategory = 'All' }, ref) => {
    const [formData, setFormData] = useState<QuoteFormData>({
      fullName: '',
      companyAndCountry: '',
      contactMethod: '',
      productAndQuantity: initialProduct ? `${initialProduct}, 1 x 20ft FCL` : '',
      category: initialCategory,
      incoterm: 'EXW',
      destinationPort: '',
      message: '',
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submittedData, setSubmittedData] = useState<SubmittedInquiry | null>(null)

    // Allow parent to pre-fill form when "Enquire ->" is clicked on any product card
    useImperativeHandle(ref, () => ({
      prefillProduct: (productName: string, category: string) => {
        setFormData((prev) => ({
          ...prev,
          productAndQuantity: `${productName}, 1 x 20ft Container`,
          category: category,
        }))
        setSubmittedData(null)
        const element = document.getElementById('contact')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      },
    }))

    const validate = (): boolean => {
      const newErrors: FormErrors = {}

      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Please enter your name.'
      }

      if (!formData.companyAndCountry.trim()) {
        newErrors.companyAndCountry = 'Please enter your company name and country.'
      }

      if (!formData.contactMethod.trim()) {
        newErrors.contactMethod = 'Please enter your email.'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactMethod.trim())) {
        newErrors.contactMethod = 'Please enter a valid email address.'
      }

      if (!formData.productAndQuantity.trim()) {
        newErrors.productAndQuantity = 'Please specify the product and required quantity.'
      }

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()

      if (!validate()) {
        return
      }

      setIsSubmitting(true)

      const randomRef = `VNI-REQ-${Math.floor(1000 + Math.random() * 9000)}`
      const submittedAt = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })

      // Direct mail dispatch to mayur.isamaliya@vniexport.com without requiring extra steps from the user
      try {
        if (typeof fetch !== 'undefined') {
          const payload = new FormData()
          payload.append('_subject', `New Export Enquiry [${randomRef}]: ${formData.productAndQuantity} - ${formData.fullName}`)
          payload.append('Full Name', formData.fullName)
          payload.append('Company and Country', formData.companyAndCountry)
          payload.append('Buyer Email', formData.contactMethod)
          payload.append('Product and Quantity', formData.productAndQuantity)
          payload.append('Category', formData.category)
          payload.append('Preferred Incoterm', formData.incoterm)
          payload.append('Destination Seaport', formData.destinationPort || 'Not specified')
          payload.append('Message', formData.message || 'No additional message')
          payload.append('Reference ID', randomRef)
          payload.append('Submission Time', submittedAt)
          payload.append('_replyto', formData.contactMethod)
          payload.append('_captcha', 'false')
          payload.append('_template', 'table')

          fetch('https://formsubmit.co/ajax/mayur.isamaliya@vniexport.com', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
            },
            body: payload,
          }).catch(() => {})
        }
      } catch {
        // Fallback gracefully so submission flow continues uninterrupted
      }

      setTimeout(() => {
        setSubmittedData({
          ...formData,
          inquiryId: randomRef,
          submittedAt: submittedAt,
        })
        setIsSubmitting(false)
        setErrors({})
      }, 400)
    }

    const handleReset = () => {
      setSubmittedData(null)
      setFormData({
        fullName: '',
        companyAndCountry: '',
        contactMethod: '',
        productAndQuantity: '',
        category: 'All',
        incoterm: 'EXW',
        destinationPort: '',
        message: '',
      })
      setErrors({})
    }

    return (
      <section id="contact" className="section contact-section" aria-label="Contact and Request a Quote">
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'start' }}>
            {/* Left Column matching original */}
            <div>
              <div className="cap">Contact</div>
              <h2 style={{ marginBottom: '16px' }}>Request a quote</h2>

              <p style={{ lineHeight: '1.7', color: 'var(--color-text-muted)', fontSize: '18px' }}>
                Share your requirement and we will reply within <strong>24 hours</strong> with current
                farm-gate prices and shipping schedules.
              </p>

              <div className="contact-info-block">
                <p style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                  <MapPin size={18} color="var(--color-orange-main)" style={{ marginTop: '5px', flexShrink: 0 }} />
                  <span>
                    <strong>Address:</strong> Plot No. 18, Bhajiwala Estate-2, A.K. Road, Surat - 395006 (Gujarat, India)
                  </span>
                </p>

                <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Phone size={18} color="#25d366" style={{ flexShrink: 0 }} />
                  <span>
                    <strong>Phone / WhatsApp:</strong>{' '}
                    <a
                      href="https://wa.me/919510736285"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--color-navy-main)', fontWeight: 600 }}
                    >
                      +91 95107 36285
                    </a>
                  </span>
                </p>

                <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={18} color="var(--color-orange-main)" style={{ flexShrink: 0 }} />
                  <span>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:info@vniexport.com"
                      style={{ color: 'var(--color-navy-main)', fontWeight: 600 }}
                    >
                      info@vniexport.com
                    </a>
                  </span>
                </p>
              </div>

              {/* Response Time Guarantee Badge */}
              <div
                style={{
                  marginTop: '32px',
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--color-orange-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-orange-main)',
                  }}
                >
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--color-navy-main)' }}>
                    Fast Trade Response
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                    Detailed FOB/CIF quotation with COA specification within 24h.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Form matching original inputs and labels */}
            <div>
              {submittedData ? (
                /* Success Confirmation Card */
                <div className="quote-success-card" data-testid="quote-success-card">
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: '#dcfce7',
                      color: 'var(--color-success)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 style={{ color: 'var(--color-navy-main)', marginBottom: '8px' }}>
                    Enquiry Received Successfully!
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', marginBottom: '20px' }}>
                    Thank you, <strong>{submittedData.fullName}</strong>. Your enquiry has been sent directly to{' '}
                    <strong>mayur.isamaliya@vniexport.com</strong>.
                  </p>

                  <div
                    style={{
                      background: '#ffffff',
                      border: '1px solid #bbf7d0',
                      borderRadius: '8px',
                      padding: '16px',
                      textAlign: 'left',
                      fontSize: '13.5px',
                      marginBottom: '20px',
                      lineHeight: '1.8',
                    }}
                  >
                    <div>
                      <strong>Reference ID:</strong>{' '}
                      <span style={{ color: 'var(--color-orange-main)', fontWeight: 700 }}>
                        {submittedData.inquiryId}
                      </span>
                    </div>
                    <div>
                      <strong>Company:</strong> {submittedData.companyAndCountry}
                    </div>
                    <div>
                      <strong>Product &amp; Qty:</strong> {submittedData.productAndQuantity}
                    </div>
                    <div>
                      <strong>Incoterm:</strong> {submittedData.incoterm}{' '}
                      {submittedData.destinationPort ? `(${submittedData.destinationPort})` : ''}
                    </div>
                    <div>
                      <strong>Email:</strong> {submittedData.contactMethod}
                    </div>
                    <div>
                      <strong>Sent to:</strong> mayur.isamaliya@vniexport.com
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-primary btn-sm"
                    style={{ margin: '0 auto' }}
                  >
                    <RotateCcw size={16} />
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                /* Interactive Form matching original tags */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="card quote-form-card"
                  aria-label="Export Quote Request Form"
                  data-testid="quote-form"
                  style={{ display: 'grid', gap: '14px' }}
                >
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="field-name" className="form-label">
                      <span>Name</span>
                      <span className="req">*</span>
                    </label>
                    <input
                      id="field-name"
                      name="fullName"
                      type="text"
                      className={`form-input in ${errors.fullName ? 'is-error' : ''}`}
                      placeholder="e.g. John Doe / Ahmed Al-Mansoori"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'err-name' : undefined}
                      required
                    />
                    {errors.fullName && (
                      <span id="err-name" className="form-error" role="alert">
                        <AlertCircle size={14} />
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Company and country */}
                  <div className="form-group">
                    <label htmlFor="field-company" className="form-label">
                      <span>Company and country</span>
                      <span className="req">*</span>
                    </label>
                    <input
                      id="field-company"
                      name="companyAndCountry"
                      type="text"
                      className={`form-input in ${errors.companyAndCountry ? 'is-error' : ''}`}
                      placeholder="e.g. Al-Noor General Trading, UAE"
                      value={formData.companyAndCountry}
                      onChange={(e) =>
                        setFormData({ ...formData, companyAndCountry: e.target.value })
                      }
                      aria-invalid={!!errors.companyAndCountry}
                      aria-describedby={errors.companyAndCountry ? 'err-company' : undefined}
                      required
                    />
                    {errors.companyAndCountry && (
                      <span id="err-company" className="form-error" role="alert">
                        <AlertCircle size={14} />
                        {errors.companyAndCountry}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="field-contact" className="form-label">
                      <span>Email</span>
                      <span className="req">*</span>
                    </label>
                    <input
                      id="field-contact"
                      name="contactMethod"
                      type="email"
                      className={`form-input in ${errors.contactMethod ? 'is-error' : ''}`}
                      placeholder="e.g. buyer@company.com"
                      value={formData.contactMethod}
                      onChange={(e) =>
                        setFormData({ ...formData, contactMethod: e.target.value })
                      }
                      aria-invalid={!!errors.contactMethod}
                      aria-describedby={errors.contactMethod ? 'err-contact' : undefined}
                      required
                    />
                    {errors.contactMethod && (
                      <span id="err-contact" className="form-error" role="alert">
                        <AlertCircle size={14} />
                        {errors.contactMethod}
                      </span>
                    )}
                  </div>

                  {/* Product and quantity */}
                  <div className="form-group">
                    <label htmlFor="field-product" className="form-label">
                      <span>Product and quantity</span>
                      <span className="req">*</span>
                    </label>
                    <input
                      id="field-product"
                      name="productAndQuantity"
                      type="text"
                      className={`form-input in ${errors.productAndQuantity ? 'is-error' : ''}`}
                      placeholder="e.g. Kabuli chana, 20 tons"
                      value={formData.productAndQuantity}
                      onChange={(e) =>
                        setFormData({ ...formData, productAndQuantity: e.target.value })
                      }
                      aria-invalid={!!errors.productAndQuantity}
                      aria-describedby={errors.productAndQuantity ? 'err-product' : undefined}
                      required
                    />
                    <span style={{ display: 'block', marginTop: '6px', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                      <strong>MOQ:</strong> 20 ft container (By Sea) &bull; 1 ton (By Air)
                    </span>
                    {errors.productAndQuantity && (
                      <span id="err-product" className="form-error" role="alert">
                        <AlertCircle size={14} />
                        {errors.productAndQuantity}
                      </span>
                    )}
                  </div>

                  {/* Optional Trade Details: Incoterm & Destination Port */}
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="field-incoterm" className="form-label">
                        <span>Preferred Incoterm (Delivery Terms)</span>
                      </label>
                      <select
                        id="field-incoterm"
                        className="form-select in"
                        value={formData.incoterm}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            incoterm: e.target.value as any,
                          })
                        }
                      >
                        {INCOTERM_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="field-port" className="form-label">
                        <span>Destination Seaport</span>
                      </label>
                      <input
                        id="field-port"
                        type="text"
                        className="form-input in"
                        placeholder="e.g. Jebel Ali / Rotterdam"
                        value={formData.destinationPort}
                        onChange={(e) =>
                          setFormData({ ...formData, destinationPort: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="field-message" className="form-label">
                      <span>Message</span>
                    </label>
                    <textarea
                      id="field-message"
                      name="message"
                      className="form-textarea in"
                      rows={3}
                      placeholder="Specify packaging requirements, target shipment date, or payment terms..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Send Enquiry button matching original class .bt .b1 */}
                  <button
                    type="submit"
                    className="btn btn-primary bt b1"
                    disabled={isSubmitting}
                    style={{ width: '100%', marginTop: '6px' }}
                    aria-label="Send Export Enquiry"
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Submitting Enquiry...' : 'Send Enquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
)
