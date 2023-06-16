import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbars'
import Modal from './components/modals'
import ClientOnly from './components/ClientOnly'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn NextJS',
  description: 'Learn to Work',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
