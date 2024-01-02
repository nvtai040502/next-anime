import type { Icons } from "@/components/icons"
import { Media } from "./anilist"
export type MediaListWithSortType = {
  title: string
  mediaList: Media[]
}

export type NavItem = {
  title: string
  href?: string
  disabled?: boolean
  icon?: keyof typeof Icons
}
