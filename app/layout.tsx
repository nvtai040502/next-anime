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
         <div className="flex min-h-screen flex-col">
          <SiteHeader/>
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
