export type ProductCategory =
  | 'All'
  | 'Fruits'
  | 'Vegetables'
  | 'Nuts'
  | 'Chana'
  | 'Moong'
  | 'Spices'

export interface ProductItem {
  id: string
  name: string
  category: 'Fruits' | 'Vegetables' | 'Nuts' | 'Chana' | 'Moong' | 'Spices'
  title: string
  tagline: string
  summary: string
  varieties: string[]
  origin: string
  grades: string
  moisture: string
  purity: string
  packaging: string
  shelfLife: string
  storageTemp: string
  moq: string
  loadingPort: string
  badge: string
  accentColor: string
  bgSoft: string
  imageSrc: string
}

export interface QuoteFormData {
  fullName: string
  companyAndCountry: string
  contactMethod: string
  productAndQuantity: string
  category: string
  incoterm: 'FOB' | 'CIF' | 'CFR' | 'EXW'
  destinationPort: string
  message: string
}

export interface FormErrors {
  fullName?: string
  companyAndCountry?: string
  contactMethod?: string
  productAndQuantity?: string
}

export interface SubmittedInquiry extends QuoteFormData {
  inquiryId: string
  submittedAt: string
}
