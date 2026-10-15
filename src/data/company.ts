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

export const COMPANY_DETAILS = {
  name: 'VNI Export & Import',
  phone: '+91 95107 36285',
  phoneRaw: '919510736285',
  email: 'info@vniexport.com',
  address: {
    line1: 'Plot No. 18, Bhajiwala Estate-2,',
    line2: 'A.K. Road, Surat - 395006',
    region: '(Gujarat, India)',
    full: 'Plot No. 18, Bhajiwala Estate-2, A.K. Road, Surat - 395006 (Gujarat, India)',
  },
}

export const DELIVERY_TERMS = [
  {
    code: 'CIF',
    title: 'Cost, Insurance and Freight',
    description: 'Seller pays costs, sea freight and minimum insurance to destination seaport.',
    mode: 'Sea / Ocean Freight',
  },
  {
    code: 'CIP',
    title: 'Carriage and Insurance Paid to',
    description: 'Seller pays carriage and comprehensive all-risk insurance to named destination.',
    mode: 'Multimodal / Air / Sea',
  },
  {
    code: 'FOB',
    title: 'Free on Board',
    description: 'Seller clears goods for export and delivers on board vessel at departure port.',
    mode: 'Hazira / Mundra / JNPT Ports',
  },
  {
    code: 'FCA',
    title: 'Free Carrier',
    description: 'Seller delivers export-cleared goods to buyer-appointed carrier at Surat or Mumbai.',
    mode: 'Surat Packhouse / Mumbai (by Air)',
  },
]

export const MOQ_INFO = {
  sea: {
    label: 'By Sea',
    value: '20 ft container',
    description: 'Full Container Load (FCL) approx. 14 to 25 metric tons depending on commodity',
  },
  air: {
    label: 'By Air',
    value: '1 ton',
    description: 'Express Air Cargo via Mumbai (by Air) for time-critical consignments',
  },
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
  {
    name: 'Mumbai (by Air)',
    location: 'Mumbai, Maharashtra (Air Cargo Complex)',
    code: 'BOM AIR',
    transitToMiddleEast: '24 - 48 Hours',
    transitToEurope: '1 - 3 Days',
    transitToUS: '2 - 4 Days',
    transitToAsia: '1 - 2 Days',
    specialty: 'Chhatrapati Shivaji Maharaj International Airport (BOM) Air Cargo Terminal for express perishable consignments and swift air shipments.',
    badge: 'Air Cargo Gateway (MOQ: 1 ton)',
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Enquiry & Requirements',
    description: 'Share your exact product, grade, caliber, required packing format, target volume, and destination seaport or airport.',
    deliverable: 'Prompt response within 24 hours with market price and seasonal calendar',
  },
  {
    number: '02',
    title: 'Quote & Samples',
    description: 'Receive competitive CIF, CIP, FOB, or FCA price quotation, certificate of analysis (COA) specifications, and air-couriered product samples.',
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
    deliverable: 'Complete document package: BL/AWB, Phytosanitary, Certificate of Origin, Insurance & Invoice',
  },
]

export const WHY_VNI_PILLARS = [
  {
    title: 'Quality Checked',
    subtitle: 'Grading and inspection before every dispatch',
    description: 'Multi-stage sorting using sortex optical sorters and certified laboratory testing for moisture, aflatoxins, and pesticide residues. Pre-shipment certificates issued on demand.',
    points: ['SGS / Intertek / Bureau Veritas inspection', 'Certified Phytosanitary compliance', 'Batch-coded traceability to farm clusters'],
  },
  {
    title: 'Custom Packing',
    subtitle: 'Tailored for retail, wholesale & bulk buyers',
    description: 'From 500g retail stand-up pouches with buyer private label to 50kg export grade jute sacks and 1-ton jumbo bags. Nitrogen flushed and vacuum sealed for extended freshness.',
    points: ['Private label printing & multilingual barcodes', 'Vacuum & nitrogen-flushed barrier bags', 'Palletized & shrink-wrapped container stuffing'],
  },
  {
    title: 'On-time Shipping',
    subtitle: 'Surat, Hazira, Mundra & Mumbai multimodal routing',
    description: 'Direct road and rail connectivity to Hazira (25 mins away), Mundra, Nhava Sheva, and Mumbai Air Cargo. Dedicated customs brokers expedite export filing without port congestion delays.',
    points: ['Direct access to 3 major seaports & Mumbai Air Cargo', 'Reefer cold-chain monitoring with data loggers', 'Real-time vessel and bill-of-lading tracking'],
  },
  {
    title: 'Fair, Clear Pricing',
    subtitle: 'Transparent CIF, CIP, FOB and FCA quotations',
    description: 'Direct farm-gate sourcing eliminates intermediaries, providing importers with true wholesale pricing, seasonal futures guidance, and zero hidden port surcharges.',
    points: ['Transparent Incoterms (CIF / CIP / FOB / FCA)', 'Flexible payment options: Irrevocable LC, T/T, CAD', 'No hidden demurrage or administrative surcharges'],
  },
]

export const FAQ_ITEMS = [
  {
    q: 'What delivery terms (Incoterms) do you offer for international shipments?',
    a: 'We routinely execute international trade contracts under CIF (Cost, Insurance & Freight), CIP (Carriage & Insurance Paid to), FOB (Free on Board at Hazira, Mundra, or Nhava Sheva), and FCA (Free Carrier at Surat Packhouse or Mumbai Air Cargo). All freight and insurance components are quoted transparently.',
  },
  {
    q: 'What is your Minimum Order Quantity (MOQ)?',
    a: 'Our Minimum Order Quantity (MOQ) depends on the mode of transport: By Sea: 20 ft container (Full Container Load - FCL, approx. 14 to 25 metric tons depending on the commodity). By Air: 1 ton via Mumbai (by Air) for high-value or urgent perishable shipments.',
  },
  {
    q: 'Can you provide product samples before placing a commercial order?',
    a: 'Yes, we dispatch representative physical samples via DHL or FedEx Express within 48 to 72 hours. Samples are complimentary for serious commercial buyers; recipient bears express courier freight or provides their courier account.',
  },
  {
    q: 'What quality testing and export certifications do you provide?',
    a: 'Every export consignment is accompanied by a government-approved Phytosanitary Certificate, Certificate of Origin (COO / Form A), and food safety compliance certificates. We also coordinate third-party inspection (SGS, Bureau Veritas, GeoChem) for moisture, purity, aflatoxin, and pesticide residue verification.',
  },
]
