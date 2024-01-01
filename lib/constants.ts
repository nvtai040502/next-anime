import { MediaSort } from "@/types/anilist"

export const ANILIST_ENDPOINT = "https://graphql.anilist.co"
export const ANIFY_API = "https://api.anify.tv"
export const PER_PAGE = 8
export const FIRST_PAGE = 1
export const NEAREST_PAGES = 3




export type SortItem = {
  title: string;
  slug: string | null;
  sortKey: MediaSort;
};

export const defaultSort: SortItem = {
  title: "Popularity",
  slug: null,
  sortKey: "POPULARITY"
};

export const sorting: SortItem[] = [
  defaultSort,
  { title: 'Populatiry Descent', slug: 'popularity-desc', sortKey: "POPULARITY_DESC"},
  { title: 'Trending', slug: 'trending', sortKey: "TRENDING" },
  { title: 'Trending Descent', slug: 'trending-desc', sortKey: "TRENDING_DESC"},
];