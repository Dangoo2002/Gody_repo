import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adembesa Godfrey - Data Scientist & ML Engineer',
  description: 'Professional Data Scientist and Machine Learning Engineer specializing in predictive modeling, financial risk analytics, and customer behavior analysis.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}