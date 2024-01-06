import type { Icons } from "@/components/icons"
import { Media, MediaSort, ReviewSort } from "./anilist"
export type MediaListWithSortType = {
  title: string
  mediaList: Media[]
}


export type MediaSortItem = {
  title: string;
  sortKey: MediaSort;
  slug: string | null
  description?: string
};


export type ReviewSortItem = {
  title: string;
  sortKey: ReviewSort;
  description?: string
};

export type NavItem = {
  title: string
  href?: string
  disabled?: boolean
  icon?: keyof typeof Icons
}
