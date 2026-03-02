import { Metadata } from 'next'

export const siteConfig = {
  name: 'Techskii',
  title: 'Techskii - Career Support for International Tech Professionals',
  description: 'Strategic career support platform helping international tech professionals navigate the U.S. job market with clarity, structure, and confidence. Expert guidance for visa holders, resume optimization, and interview preparation.',
  url: 'https://techskii.com',
  ogImage: '/og-image.jpg',
  keywords: [
    'tech career support',
    'international tech professionals',
    'H1B visa career support',
    'tech job search USA',
    'resume optimization tech',
    'interview preparation',
    'career coaching tech',
    'LinkedIn optimization',
    'tech recruitment',
    'software engineer career',
    'international candidates USA',
    'visa sponsorship jobs'
  ],
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
}
