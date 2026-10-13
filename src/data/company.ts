export interface PortInfo {
  name: string
  location: string
  code: string
  transitToMiddleEast: string
  transitToEurope: string
  transitToUS: string
  transitToAsia: string
  specialty: string
  badge: string
}

export const EXPORT_PORTS: PortInfo[] = [
  {
    name: 'Hazira Port (Surat)',
    location: 'Surat, Gujarat (Direct Local Access)',
    code: 'IN HZR 1',
    transitToMiddleEast: '3 - 5 Days',
    transitToEurope: '18 - 22 Days',
    transitToUS: '24 - 28 Days',
    transitToAsia: '8 - 12 Days',
    specialty: 'Immediate transit from Surat packhouses, ideal for fresh perishable vegetables & reefer containers.',
    badge: 'Local Port (25 km from VNI hub)',
  },
  {
    name: 'Mundra Port',
    location: 'Kutch, Gujarat',
    code: 'IN MUN 1',
    transitToMiddleEast: '3 - 4 Days',
    transitToEurope: '16 - 20 Days',
    transitToUS: '22 - 26 Days',
    transitToAsia: '7 - 10 Days',
    specialty: "India's largest commercial port with high container turnaround, daily mother-vessel sailings.",
    badge: 'High Frequency Sailings',
  },
  {
    name: 'Nhava Sheva (JNPT)',
    location: 'Navi Mumbai, Maharashtra',
    code: 'IN NSA 1',
    transitToMiddleEast: '4 - 6 Days',
    transitToEurope: '18 - 22 Days',
    transitToUS: '24 - 28 Days',
    transitToAsia: '8 - 12 Days',
    specialty: 'Premier gateway for worldwide agricultural commodities, direct rail connectivity.',
    badge: 'Global Connectivity Gateway',
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Enquiry & Requirements',
    description: 'Share your exact product, grade, caliber, required packing format, target volume, and destination seaport.',
    deliverable: 'Prompt response within 24 hours with market price and seasonal calendar',
  },
  {
    number: '02',
    title: 'Quote & Samples',
    description: 'Receive competitive FOB, CIF, or CFR price quotation, certificate of analysis (COA) specifications, and air-couriered product samples.',
    deliverable: 'Binding commercial proforma invoice & physical sample sign-off',
  },
  {
    number: '03',
    title: 'Packing & Inspection',
    description: 'Grading, Sortex cleaning, and customized packing with customer private branding. SGS, Bureau Veritas or Geochem inspection before dispatch.',
    deliverable: 'Pre-shipment inspection certificate and packing photographic report',
  },
  {
    number: '04',
    title: 'Shipping & Documentation',
    description: 'Container stuffing under supervised temperature controls, fast customs clearance, bill of lading issuance, and continuous GPS/vessel tracking.',
    deliverable: 'Complete document package: BL, Phytosanitary, Certificate of Origin, Insurance & Invoice',
  },
]

export const WHY_VNI_PILLARS = [
  {
    title: 'Quality Checked',
    subtitle: 'Grading and inspection before every dispatch',
    description: 'Multi-stage sorting using sortex optical sorters and certified laboratory testing for moisture, aflatoxins, and pesticide residues. Pre-shipment certificates issued on demand.',
    points: ['SGS / Intertek / Bureau Veritas inspection', 'Certified Phytosanitary & APEDA compliance', 'Batch-coded traceability to farm clusters'],
  },
  {
    title: 'Custom Packing',
    subtitle: 'Tailored for retail, wholesale & bulk buyers',
    description: 'From 500g retail stand-up pouches with buyer private label to 50kg export grade jute sacks and 1-ton jumbo bags. Nitrogen flushed and vacuum sealed for extended freshness.',
    points: ['Private label printing & multilingual barcodes', 'Vacuum & nitrogen-flushed barrier bags', 'Palletized & shrink-wrapped container stuffing'],
  },
  {
    title: 'On-time Shipping',
    subtitle: 'Surat, Hazira & Mundra multimodal routing',
    description: 'Direct road and rail connectivity to Hazira (25 mins away), Mundra, and Nhava Sheva. Dedicated customs brokers expedite export filing without port congestion delays.',
    points: ['Direct access to 3 major Western seaports', 'Reefer cold-chain monitoring with data loggers', 'Real-time vessel and bill-of-lading tracking'],
  },
  {
    title: 'Fair, Clear Pricing',
    subtitle: 'Transparent FOB, CIF, CFR and EXW quotations',
    description: 'Direct farm-gate sourcing eliminates intermediaries, providing importers with true wholesale pricing, seasonal futures guidance, and zero hidden port surcharges.',
    points: ['Transparent Incoterms 2020 contracts', 'Flexible payment options: Irrevocable LC, T/T, CAD', 'No hidden demurrage or administrative surcharges'],
  },
]

export const FAQ_ITEMS = [
  {
    q: 'What Incoterms do you offer for international shipments?',
    a: 'We routinely execute contracts under FOB (Free on Board at Hazira, Mundra, or Nhava Sheva), CIF (Cost, Insurance & Freight to your destination port), CFR (Cost and Freight), and EXW (Ex Works Surat packhouse). We quote all freight components transparently.',
  },
  {
    q: 'Can you provide product samples before placing a commercial order?',
    a: 'Yes, we dispatch representative physical samples via DHL or FedEx Express within 48 to 72 hours. Samples are complimentary for serious commercial buyers; recipient bears express courier freight or provides their courier account.',
  },
  {
    q: 'What quality testing and export certifications do you provide?',
    a: 'Every export consignment is accompanied by a government-approved Phytosanitary Certificate, Certificate of Origin (COO / Form A), and FSSAI health certificate. We also coordinate third-party inspection (SGS, Bureau Veritas, GeoChem) for moisture, purity, aflatoxin, and pesticide residue verification.',
  },
  {
    q: 'What is your Minimum Order Quantity (MOQ)?',
    a: 'Our standard MOQ is one 20ft container (approx. 14 to 24 metric tons depending on the commodity) or one 40ft reefer container (approx. 20 to 28 metric tons for fresh fruits & vegetables). For high-value spices or trial orders, mixed container loads (LCL or multi-commodity FCL) are accommodated.',
  },
  {
    q: 'What are your accepted international payment terms?',
    a: 'We accommodate verified Letter of Credit (100% Irrevocable LC at Sight from prime international banks), Telegraphic Transfer (T/T with advance deposit and balance upon BL copy), and Cash Against Documents (CAD) for established recurring partners.',
  },
]
