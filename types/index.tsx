import type { Icons } from "@/components/icons"
import { Media, MediaSort, ReviewSortKey } from "./anilist"
export type MediaListWithSortType = {
  title: string
  mediaList: Media[]
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export type SidebarNavItem = NavItemWithChildren

export type InfinityScrollType = "Reviews" | "Characters"

export type MediaSortItem = {
  title: string;
  sortKey: MediaSort;
  slug: string | null
  description?: string
};

export interface FooterItem {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}
export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithOptionalChildren

export type ReviewSortItem = {
  title: string;
  sortKey: ReviewSortKey;
  description?: string
};

export type NavItem = {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
}
