import type { Metadata } from 'next'
import './globals.css'
import Providers from './Providers'
import NavbarLayout from '@/layouts/Navbar'
import FooterLayout from '@/layouts/Footer'

export const metadata: Metadata = {
  title: 'Triton',
  description: 'We are Triton. Conquering the waves, one race one win.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <Providers>
          <NavbarLayout />
          <main className='min-h-screen overflow-x-hidden px-6 sm:px-8 md:px-12 lg:px-16'>
            {children}
          </main>
          <FooterLayout />
        </Providers>
      </body>
    </html>
  )
}
