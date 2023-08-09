import Navbar from '@/components/Navbar/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Navbar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elecrto Nest',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <div className='flex container'>
      <Sidebar />
      {children}
    </div>
  )
}
