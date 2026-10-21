import {
  Scale,
  Home,
  HeartPulse,
  Wrench,
  DollarSign,
  Shield,
  HardHat,
  Building2,
  Briefcase,
  Car,
  Server,
  Package
} from 'lucide-react';

export const INDUSTRY_CATEGORIES = [
  { id: 'all', label: 'All Industries' },
  { id: 'professional', label: 'Professional & Legal' },
  { id: 'property', label: 'Property & Trades' },
  { id: 'health', label: 'Health & Care' },
  { id: 'tech-logistics', label: 'Tech, Auto & Commerce' },
];

export const INDUSTRIES_DATA = [
  {
    id: 'legal',
    name: 'Legal Practices',
    tag: 'Law Firms, Solo Practitioners & Corporate Counsel',
    category: 'professional',
    categoryLabel: 'Professional & Legal',
    icon: Scale,
    challenges: [
      'Urgent prospective client calls missed while attorneys are in court, depositions, or client consultations.',
      'Manual conflict-of-interest checking and lengthy intake questionnaires delaying retainer agreement execution.',
      'High partner billing rates consumed by standard legal correspondence, status calls, and document retrieval.'
    ],
    solution: 'Deploy 24/7 Voice AI receptionists to qualify prospective matters, screen conflict parameters against internal records, and book consultations directly into Clio or PracticePanther with zero attorney friction.',
    workflow: 'Inbound Call or Web Lead → AI Urgency Triage & Conflict Check → Retainer Drafted → Consultation Booked in Clio',
    stack: ['Clio', 'PracticePanther', 'DocuSign', 'Twilio Voice AI', 'HubSpot'],
    impact: '0 missed client inquiries • Instant conflict pre-screening • 4+ hours saved weekly per attorney'
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Brokerages',
    tag: 'Commercial Agencies, Residential Teams & Brokerages',
    category: 'property',
    categoryLabel: 'Property & Trades',
    icon: Home,
    challenges: [
      'Lead leakage from Zillow, Realtor.com, and lawn signage outside business hours when buyers call hot.',
      'Agents inundated with repetitive questions on property availability, HOA restrictions, and price terms.',
      'Fragmented client tracking between listing agents, buyer representatives, and escrow coordinators.'
    ],
    solution: 'Voice and conversational AI agents answer property inquiries within seconds, verify buyer budget and financing status, and book private showings directly into agent calendars.',
    workflow: 'Portal Lead or Call → Instant AI Pre-Qualification → Private Showing Slot Offered → Confirmed Tour Logged to Follow Up Boss',
    stack: ['Follow Up Boss', 'KvCORE', 'Google Calendar', 'Twilio SMS', 'Zillow API'],
    impact: '< 15s lead response time • 3x higher showing conversion • 100% CRM record hygiene'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    tag: 'Dental, Physical Therapy, MedSpas & Outpatient Practices',
    category: 'health',
    categoryLabel: 'Health & Care',
    icon: HeartPulse,
    challenges: [
      'Front desk staff constantly interrupted by phone inquiries for scheduling, cancellations, and directions.',
      'Up to 25% appointment no-show rate due to absent or delayed multi-channel confirmation workflows.',
      'Tedious manual transcription of paper intake forms into electronic health records (EHR).'
    ],
    solution: 'A HIPAA-conscious AI phone assistant handles routine clinic calls 24/7, negotiates calendar openings, answers clinic FAQs, and dispatches automated digital intake links before the appointment.',
    workflow: 'Patient Inbound Call → Routine Triage & Slot Offered → Practice Management Booking → Automated SMS Reminders & Intake Link',
    stack: ['AthenaHealth', 'Kareo', 'Google Calendar', 'Twilio Voice', 'HIPAA Secure Gateway'],
    impact: '80% fewer phone interruptions • 40% reduction in patient no-shows • Zero handwritten intake data entry'
  },
  {
    id: 'home-services',
    name: 'Home Services & Trades',
    tag: 'HVAC, Plumbing, Electrical & Roofing Contractors',
    category: 'property',
    categoryLabel: 'Property & Trades',
    icon: Wrench,
    challenges: [
      'Technicians in crawl spaces or on rooftops cannot answer ringing phones, losing urgent high-ticket jobs to rivals.',
      'Disorganized dispatching leading to scheduling overlaps and inefficient drive-time across service territories.',
      'Delayed invoice dispatch and forgotten review collection after service completion.'
    ],
    solution: 'Autonomous voice dispatch agents capture emergency repair calls 24/7, record the service address and issue description, and book technician arrival windows directly into ServiceTitan or Jobber.',
    workflow: 'Emergency Inbound Call → AI Identifies Issue & Service Address → Emergency Job Created in ServiceTitan → Customer Receives Tech ETA SMS',
    stack: ['ServiceTitan', 'Jobber', 'Housecall Pro', 'Twilio Voice AI', 'QuickBooks'],
    impact: '0 lost emergency service calls • Dynamic technician routing • Instant customer SMS status updates'
  },
  {
    id: 'financial-services',
    name: 'Financial Services & Accounting',
    tag: 'CPAs, Wealth Management, Tax Preparers & Bookkeeping',
    category: 'professional',
    categoryLabel: 'Professional & Legal',
    icon: DollarSign,
    challenges: [
      'Chasing clients for missing receipts, bank statements, and 1099 forms during high-stress tax and audit periods.',
      'Manual line-item entry of vendor invoices and tax documents into QuickBooks, Xero, or general ledgers.',
      'Phone lines overwhelmed with routine client calls asking for filing status updates.'
    ],
    solution: 'Event-driven document chasing agents systematically verify client upload checklists, send polite automated reminders, and run intelligent OCR pipelines to extract invoice data with zero manual typing.',
    workflow: 'Client Uploads Documents → Vision OCR Parses Line Items → Automated Reconciliation Gate → Xero/QuickBooks Ledger Updated',
    stack: ['Xero', 'QuickBooks', 'AWS Textract', 'Google Workspace', 'Stripe'],
    impact: '90% reduction in document chasing overhead • Sub-minute invoice extraction • Complete audit trail'
  },
  {
    id: 'insurance',
    name: 'Insurance Agencies',
    tag: 'Independent Brokers, Commercial Lines & Claims Teams',
    category: 'professional',
    categoryLabel: 'Professional & Legal',
    icon: Shield,
    challenges: [
      'Slow quote turnaround while manually gathering property, vehicle, or liability details across multiple carrier portals.',
      'Policyholders calling repeatedly for basic policy declaration pages, insurance cards, and claims status updates.',
      'Dropped renewal retention rates due to lack of timely, structured pre-renewal reviews.'
    ],
    solution: 'Conversational intake agents gather underwriting requirements upfront, pre-fill carrier rating systems, and provide 24/7 self-service policy document lookups and First Notice of Loss (FNOL) logging.',
    workflow: 'Policy Inquiry or Claim Call → Intake Verification & Entity Extraction → Carrier Quoting API / FNOL Form Pushed → Agent Alerted with Full File',
    stack: ['Applied Epic', 'AMS360', 'HubSpot', 'Twilio Voice AI', 'Zapier/Make'],
    impact: 'Instant 24/7 FNOL claim capture • 60% faster quote assembly • Proactive 45-day renewal outreach'
  },
  {
    id: 'construction',
    name: 'Construction & Contracting',
    tag: 'General Contractors, Commercial Builders & Specialty Subs',
    category: 'property',
    categoryLabel: 'Property & Trades',
    icon: HardHat,
    challenges: [
      'Requests for Information (RFIs) and change orders bottlenecked in email threads, causing costly project standstills.',
      'Subcontractor insurance certificates, licenses, and safety compliance expiring unnoticed.',
      'Discrepancies between field delivery slips and original purchase order invoices.'
    ],
    solution: 'Centralize site-to-office communication with automated RFI logging, subcontractor compliance verification, and instant 3-way matching between job tickets and accounting systems.',
    workflow: 'Field RFI Submitted → AI Classifies Specs & Blueprints → Subcontractor Routing → Procore Change Order Updated',
    stack: ['Procore', 'Buildertrend', 'Autodesk Construction Cloud', 'Google Drive', 'Slack'],
    impact: '75% faster RFI turnaround • Zero non-compliant subcontractors on site • Real-time project cost tracking'
  },
  {
    id: 'property-management',
    name: 'Property Management',
    tag: 'Residential Portfolios, Commercial Assets & HOA Communities',
    category: 'property',
    categoryLabel: 'Property & Trades',
    icon: Building2,
    challenges: [
      'After-hours maintenance emergency calls waking property managers for non-urgent routine inquiries.',
      'Extended vacancy cycles due to sluggish response times on rental listing inquiries and self-guided tour bookings.',
      'Tenant payment reminders and lease renewal notices handled through disconnected manual spreadsheets.'
    ],
    solution: 'An intelligent 24/7 maintenance dispatcher assesses genuine emergencies (burst pipes vs routine squeaks), alerts vetted on-call contractors, and automatically logs work orders in AppFolio or Buildium.',
    workflow: 'Tenant Call or Text → AI Assesses Urgency (Water/Power vs Routine) → Dispatches Preferred Vendor if Emergency → AppFolio Work Order Generated',
    stack: ['AppFolio', 'Buildium', 'Yardi', 'Twilio Voice & SMS', 'Slack'],
    impact: 'Instant 24/7 emergency dispatch • 60% reduction in after-hours false alarms • Faster lease turnaround'
  },
  {
    id: 'professional-services',
    name: 'Professional Services & Consulting',
    tag: 'Management Consultancies, Creative Agencies & Engineering Firms',
    category: 'professional',
    categoryLabel: 'Professional & Legal',
    icon: Briefcase,
    challenges: [
      'Senior consultants spending up to 20% of their time assembling SOWs, engagement proposals, and client meeting notes.',
      'Disjointed handoffs between sales discovery, account directors, and project delivery teams.',
      'Unchecked scope creep because client change requests stay buried in Slack or email messages.'
    ],
    solution: 'Automate post-discovery workflows: AI agents summarize requirements, generate formatted SOW drafts, and provision project workspaces (Linear, Asana, Notion) upon contract signature.',
    workflow: 'Client Discovery Call → AI Generates Scoped SOW & Timeline → DocuSign Signature Captured → Asana Board & Slack Channel Auto-Provisioned',
    stack: ['DocuSign', 'Notion', 'Asana', 'Linear', 'HubSpot CRM', 'Slack'],
    impact: '4x faster proposal generation • Zero onboarding delays • Automated contract-to-project provisioning'
  },
  {
    id: 'automotive',
    name: 'Automotive & Repair Centers',
    tag: 'Dealerships, Collision Centers & Independent Service Bays',
    category: 'tech-logistics',
    categoryLabel: 'Tech, Auto & Commerce',
    icon: Car,
    challenges: [
      'Service advisors constantly interrupted by phone inquiries for vehicle repair status updates and inspection reports.',
      'Lost vehicle sales when evening and weekend test drive requests go uncontacted until Monday morning.',
      'Low service bay utilization due to manual booking processes and forgotten routine service intervals.'
    ],
    solution: 'Voice AI agents handle inbound service bookings 24/7, integrate directly with Dealer Management Systems (DMS), and send automated vehicle completion alerts via SMS to keep service advisors focused on repair quality.',
    workflow: 'Service Booking Call → Vehicle VIN / Problem Extracted → Bay Slot Booked in DMS → Customer Receives Calendar SMS & Drop-off Instructions',
    stack: ['CDK Global', 'Reynolds & Reynolds', 'Shop-Ware', 'Twilio Voice', 'HubSpot'],
    impact: '24/7 service bay appointment scheduling • 50% fewer phone calls for service advisors • Higher customer retention'
  },
  {
    id: 'it-services',
    name: 'IT & Managed Service Providers',
    tag: 'MSPs, Cloud Consultancies & Technical Support Teams',
    category: 'tech-logistics',
    categoryLabel: 'Tech, Auto & Commerce',
    icon: Server,
    challenges: [
      'Helpdesk engineers overwhelmed by repetitive Tier-1 tickets (password resets, VPN access, software provisioning).',
      'SLA breach risks when critical infrastructure alerts get lost inside noisy, unprioritized ticket queues.',
      'Manual onboarding and offboarding workflows across Google Workspace, Microsoft 365, and IAM systems.'
    ],
    solution: 'Autonomous Tier-1 support agents authenticate users, execute approved diagnostic and provisioning runbooks, and intelligently correlate infrastructure alerts to route only high-priority incidents to on-call engineers.',
    workflow: 'Inbound Ticket / Slack Request → Identity & Urgency Scored → Automated Runbook or Fast Triage → Ticket Auto-Closed or Warm Escalated',
    stack: ['ConnectWise', 'Datto', 'Jira Service Management', 'PagerDuty', 'Microsoft 365 API'],
    impact: 'Sub-2-minute Tier-1 resolution • 45% reduction in ticket volume for human staff • Zero missed SLA targets'
  },
  {
    id: 'ecommerce-logistics',
    name: 'E-commerce & Logistics',
    tag: 'D2C Brands, Omnichannel Retailers & 3PL Warehouses',
    category: 'tech-logistics',
    categoryLabel: 'Tech, Auto & Commerce',
    icon: Package,
    challenges: [
      'Support inboxes inundated with "Where is my order?" (WISMO) and return policy queries during peak sales spikes.',
      'Inventory synchronization delays between warehouse databases, Shopify, and Amazon causing overselling cancellations.',
      'Manual shipping label preparation and customs document compilation for international freight.'
    ],
    solution: 'Multi-channel AI support agents resolve tracking inquiries, generate return labels in Gorgias or Zendesk, and run real-time bidirectional inventory sync pipelines between 3PL warehouses and digital storefronts.',
    workflow: 'Order Ingested → Multi-Warehouse Stock Verified → Automated Shipping Label & 3PL API Dispatch → Tracking Link Dispatched to Customer',
    stack: ['Shopify Plus', 'ShipStation', 'Gorgias', 'Klaviyo', 'PostgreSQL'],
    impact: '70% automated resolution of WISMO tickets • Real-time inventory sync • 24/7 instant customer tracking'
  }
];
