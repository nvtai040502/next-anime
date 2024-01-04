import type { Icons } from "@/components/icons"
import { Media, MediaSort } from "./anilist"
export type MediaListWithSortType = {
  title: string
  mediaList: Media[]
}


export type SortItem = {
  title: string;
  slug: string | null;
  sortKey: MediaSort;
  description?: string
};

export type NavItem = {
  title: string
  href?: string
  disabled?: boolean
  icon?: keyof typeof Icons
}
