import { Button, buttonVariants } from "@/components/ui/button"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { MainNav } from "./navbar"
import { dashboardConfig } from "@/config/dashboard"
import { Search } from "./search"

export function SiteHeader() {
  return (
    <header className="top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav items={dashboardConfig.mainNav} />
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Search />

          </nav>
        </div>
      </div>
    </header>
  )
}