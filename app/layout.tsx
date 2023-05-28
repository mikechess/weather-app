import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '600'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Weather App',
  description: 'Weather app using the api',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
