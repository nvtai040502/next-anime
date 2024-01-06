import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Next Anime",
  description:
    "Millions of anime, mange and people to discover. Explore now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
         
          <SiteHeader/>
          <main>{children}</main>
          {/* <SiteFooter /> */}
       
        </ThemeProvider>
      </body>
    </html>
  )
}
