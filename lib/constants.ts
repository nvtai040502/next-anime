import { MediaSort, SortItem } from "@/types/anilist"
export const MAX_ITEMS_CAROUSEL = 20
export const ANILIST_ENDPOINT = "https://graphql.anilist.co"
export const ANIFY_API = "https://api.anify.tv"
export const PER_PAGE = 8
export const FIRST_PAGE = 1
export const NEAREST_PAGES = 3



export const defaultSort: SortItem = {
  title: "Popularity",
  slug: null,
  sortKey: "POPULARITY_DESC"
};

export const sorting: SortItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending', sortKey: "TRENDING_DESC"},
  { title: 'Newest', slug: 'new', sortKey: "UPDATED_AT_DESC"},
];