import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pizza',
  description: 'Pizza App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <NavBar />
        {children}
      <Footer />
      </body>
    </html>
  )
}
