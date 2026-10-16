const categories = [
  {
    id: 'construction', count: 420, name: { en: 'Construction', am: 'ግንባታ' },
    icon: <path d="M3 21h18M5 21V9l7-5 7 5v12M10 21v-6h4v6" />,
  },
  {
    id: 'it', count: 310, name: { en: 'IT & Software', am: 'አይቲ እና ሶፍትዌር' },
    icon: (<><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>),
  },
  {
    id: 'medical', count: 185, name: { en: 'Medical supplies', am: 'የሕክምና አቅርቦቶች' },
    icon: (<><path d="M12 5v14M5 12h14" /><rect x="3" y="3" width="18" height="18" rx="4" /></>),
  },
  {
    id: 'agriculture', count: 260, name: { en: 'Agriculture', am: 'ግብርና' },
    icon: <path d="M12 21c0-6 0-9 0-13M12 12c-4 0-6-2-6-6 4 0 6 2 6 6zM12 15c4 0 6-2 6-6-4 0-6 2-6 6z" />,
  },
  {
    id: 'logistics', count: 230, name: { en: 'Logistics', am: 'ሎጂስቲክስ' },
    icon: (<><path d="M2 7h12v9H2zM14 10h4l4 3v3h-8z" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>),
  },
  {
    id: 'manufacturing', count: 175, name: { en: 'Manufacturing', am: 'ማምረቻ' },
    icon: <path d="M4 20V10l5 3V8l5 3V5l6 3v12z" />,
  },
  {
    id: 'consulting', count: 205, name: { en: 'Consulting', am: 'ማማከር' },
    icon: <path d="M4 6h16M4 12h16M4 18h10" />,
  },
]
export default categories