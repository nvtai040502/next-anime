import { SortItem } from "@/types"
import { MediaSort } from "@/types/anilist"
export const MAX_ITEMS_CAROUSEL_HERO = 10
export const MAX_ITEMS_CAROUSEL_BODY = 20
export const MAX_ITEMS_PER_PAGE = 3
export const ANILIST_ENDPOINT = "https://graphql.anilist.co"
export const ANIFY_API = "https://api.anify.tv"
export const FIRST_PAGE = 1
export const NEAREST_PAGES = 3



export const defaultSort: SortItem = {
  title: "Popularity",
  slug: null,
  sortKey: "POPULARITY_DESC",
  description: "Popular description"
};

export const sorting: SortItem[] = [
  defaultSort,
  { title: 'Trending Now', description: "Trending description", slug: 'trending', sortKey: "TRENDING_DESC"},
  { title: 'Newest', slug: 'new', sortKey: "UPDATED_AT_DESC"},
];