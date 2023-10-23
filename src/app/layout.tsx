import type { Metadata } from 'next'
import { Trispace } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import './globals.css'
import Header from '@/app/components/Header'
import RandomNews from './components/RandomNews'

const trispace = Trispace({weight: ['400','500','600'],
subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Technology',
  description: 'Notícias sobre tecnologia',
  icons:{
    icon: [{ url: '/img/icon.jpg',sizes:"32x32" }, {url: '/img/icon-2.jpg',sizes:"16x16"}],
    apple: {
      url: "/img/logo.jpg",
      sizes: "180x180"
    }
  },
  manifest: "",
  openGraph: {
    title: 'Technology',
    description: 'Notícias sobre tecnologia',
    type: 'article',
    authors: 'Sabrina',
  },
  keywords:['technology','tecnologia','noticias sobre tecnologia']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={trispace.className}>
        <main className='px-2 md:px-20'>
          <Header />
          <Navbar />
          <section className="flex justify-between">
            {children}
            <RandomNews />
          </section>
        </main>
      </body>
    </html>
  )
}