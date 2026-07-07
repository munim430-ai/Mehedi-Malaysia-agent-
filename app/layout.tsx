import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/nav/Header';
import { Footer } from '@/components/Footer';
import { QuickActionsFab } from '@/components/QuickActionsFab';
import { NewsletterPopup } from '@/components/NewsletterPopup';
import { siteConfig } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Malaysia Work Visa Recruitment Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Malaysia work visa',
    'Bangladeshi workers Malaysia',
    'manpower agency Bangladesh',
    'Malaysia job recruitment',
    'foreign worker sourcing Malaysia',
    'BMET recruitment agency',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} | Malaysia Work Visa Recruitment Agency`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: '/images/mehedi-hasan.jpg', width: 864, height: 1184, alt: siteConfig.founder }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Malaysia Work Visa Recruitment Agency`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: siteConfig.name,
  founder: siteConfig.founder,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/mehedi-hasan.jpg`,
  email: siteConfig.email,
  telephone: siteConfig.whatsapp,
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Kuala Lumpur',
      addressCountry: 'MY',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
  ],
  areaServed: ['Malaysia', 'Bangladesh'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <QuickActionsFab />
          <NewsletterPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
