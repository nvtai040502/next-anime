import { Icons } from "@/components/icons"
import { NavItem } from "@/types"
export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
  mainNav: NavItem[]
  profileDropdownItems: NavItem[]
  footerItems: NavItem[]
  socialLinks: NavItem[]
}

const links = {
  github: "https://github.com/nvtai040502",
  twitter: "https://twitter.com/NVTai0452"
}

export const siteConfig: SiteConfig = {
  name: "Netflix Web",
  description:
    "An open source Netflix clone built using the new app router, server components, trpc, and everything new in Next.js 13.",
  url: "https://netflx-web.vercel.app",
  ogImage: "https://netflx-web.vercel.app/opengraph-image.png",
  links,
  mainNav: [
    {
      title: "Home",
      href: "/",
      icon: "home"
    },
    {
      title: "TV Shows",
      href: "/tv-shows",
      icon: "tvShow"
    },
    {
      title: "Movies",
      href: "/movies",
      icon: "movie",
    },
    {
      title: "New & Popular",
      href: "/new-and-popular",
      icon: "trendingUp",
    },
    {
      title: "My List",
      href: "/my-list",
      icon: "list",
    },
    {
      title: "Notifications",
      icon: "bell",
    },
  ],
  profileDropdownItems: [
    {
      title: "Manage Profiles",
      href: "/profiles",
      icon: "edit",
    },
    
    {
      title: "Account",
      href: "/account",
      icon: "user",
    },
    {
      title: "Help Center",
      href: "/help-center",
      icon: "help",
    },
    {
      title: "Sign Out of Netflix",
    },
  ],
  footerItems: [
    { title: "Audio Description", href: "/" },
    { title: "Help Center", href: "/" },
    { title: "Gift Cards", href: "/" },
    { title: "Media Center", href: "/" },
    { title: "Investor Relations", href: "/" },
    { title: "Jobs", href: "/" },
    { title: "Terms of Use", href: "/terms-of-use" },
    { title: "Privacy", href: "/" },
    { title: "Legal Notices", href: "/" },
    { title: "Cookie Preferences", href: "/" },
    { title: "Corporate Information", href: "/" },
    { title: "Contact Us", href: "/" },
  ],
  socialLinks: [
    {
      title: "Facebook",
      href: "https://www.facebook.com/NetflixAsia",
      icon: "facebook",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/netflixasia/",
      icon: "instagram",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/NetflixAsia",
      icon: "twitter",
    },
    {
      title: "Youtube",
      href: "https://www.youtube.com/channel/UCZoC-XeDO7HxbAdeCaRPPCw/videos",
      icon: "youtube",
    },
  ],
}