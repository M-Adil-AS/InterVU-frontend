import '../../app/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar.js'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { headers } from "next/headers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jobster',
  description: 'NextJS 13 Project',
  keywords: 'NextJS, NextJS 13, web development, Tailwind CSS, Jobster',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
}

export default function RootLayout({ children }) {
  const cookieStore = cookies()
  const userCookie = cookieStore.get('user')
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  return (
    <html lang="en">
      <body className={inter.className}>
        {
          (userCookie && userCookie.value) || activePath=='/landing' ?
          <>
            <Navbar user={userCookie}/>
            {children}
          </>:
          redirect('/landing')
        }
      </body>
    </html>
  )
}
