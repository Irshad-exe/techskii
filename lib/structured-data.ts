export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Techskii',
  description: 'Strategic career support platform for international tech professionals',
  url: 'https://techskii.com',
  logo: 'https://techskii.com/logo.png',
  sameAs: ['https://linkedin.com/company/techskii'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@techskii.com',
  },
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Career Counseling',
  provider: {
    '@type': 'Organization',
    name: 'Techskii',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  description: 'Professional career support for international tech professionals including resume optimization, interview preparation, and job search strategy.',
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Techskii for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Techskii is designed for international tech professionals (H1B, OPT, CPT holders) navigating the U.S. job market.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from other career coaches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialize in the unique challenges international candidates face: visa timelines, ATS optimization, cultural nuances, and strategic positioning.',
      },
    },
  ],
}
