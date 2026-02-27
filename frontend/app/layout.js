import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import SessionWrapper from '@/components/SessionWrapper'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Dub Sar Systema',
  description: 'ERP web application using Next JS, Strapi, Tailwind and Shadcn',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={poppins.className}>
        <SessionWrapper>        
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  )
}
