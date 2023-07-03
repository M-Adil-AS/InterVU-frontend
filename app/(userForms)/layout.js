import '../../app/globals.css'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

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

  return (
    <html lang="en">
      <body className={inter.className}>
        {userCookie && userCookie.value ? redirect('/') : children}
      </body>
    </html>
  )
}
