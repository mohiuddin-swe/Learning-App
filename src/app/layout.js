import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <NextTopLoader
  color="#65B741"
  initialPosition={0.08}
  crawlSpeed={200}
  height={5}
  crawl={true}
  showSpinner={false}
  easing="ease"
  speed={400}
  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  zIndex={1600}
  showAtBottom={false}
/>
      
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
