import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { MainNav } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
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
         
         <div className="flex min-h-screen flex-col bg">
          <SiteHeader />
          <div className="container flex-1">{children}</div>
          <SiteFooter className="border-t" />
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
