"use client"
import { Button, buttonVariants } from "@/components/ui/button"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { dashboardConfig } from "@/config/dashboard"
import { Search } from "../search"
import React from "react"
import { siteConfig } from "@/config/site"
import { Skeleton } from "../ui/skeleton"
import { MainNav } from "./navbar"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  // change background color on scroll
  React.useEffect(() => {
    const changeBgColor = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
    }
    window.addEventListener("scroll", changeBgColor)
    return () => window.removeEventListener("scroll", changeBgColor)
  }, [isScrolled])

  return (
    <header
      aria-label="Header"
      className={cn(
        "fixed top-0 z-40 w-full",
        isScrolled ? "bg-neutral-900 shadow-md" : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 max-w-screen-2xl items-center justify-between space-x-4 sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center space-x-1.5">
          <Search />
          <Link
            aria-label="Sign in"
            href="/"
            className={cn(
              buttonVariants({
                variant: "brand",
                size: "auto",
                className: "h-auto rounded",
              })
            )}
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
   
  )
}