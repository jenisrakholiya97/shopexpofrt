export type ProductCategory =
  | 'All'
  | 'Fruits'
  | 'Vegetables'
  | 'Nuts'
  | 'Pulses'
  | 'Soyabean'
  | 'Rice'
  | 'Spices'

export interface ProductItem {
  id: string
  name: string
  category: 'Fruits' | 'Vegetables' | 'Nuts' | 'Pulses' | 'Soyabean' | 'Rice' | 'Spices'
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
  incoterm: 'EXW' | 'FCA' | 'FOB' | 'CFR' | 'CIF' | 'CIP' | string
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
