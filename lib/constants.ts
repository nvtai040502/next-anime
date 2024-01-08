import { MediaSortItem, ReviewSortItem } from "@/types"
import { MediaSort } from "@/types/anilist"
export const MAX_ITEMS_FOR_PREVIEW = 6
export const THRESHOLD_INFINITY_SCROLL = 100
export const MAX_ITEMS_INFINITY_SCROLL = 6
export const MAX_ITEMS_CAROUSEL_HERO = 10
export const MAX_ITEMS_CAROUSEL_BODY = 12
export const MAX_ITEMS_PER_PAGE = 3
export const ANILIST_ENDPOINT = "https://graphql.anilist.co"
export const ANIFY_API = "https://api.anify.tv"
export const CONSUMET_API = "https://api-consumet-org-six.vercel.app"
export const FIRST_PAGE = 1
export const NEAREST_PAGES = 3



export const defaultMediaSort: MediaSortItem = {
  title: "Popularity",
  slug: null,
  sortKey: "POPULARITY_DESC",
  description: "Popular description"
};

export const MediaSorting: MediaSortItem[] = [
  defaultMediaSort,
  { title: 'Trending Now', description: "Trending description", slug: 'trending', sortKey: "TRENDING_DESC"},
  { title: 'Newest', slug: 'new', sortKey: "UPDATED_AT_DESC"},
];

export const ReviewSorting: ReviewSortItem[] = [
  { title: 'Hightest Rate', sortKey: "RATING"},
  { title: 'Recent', sortKey: "UPDATED_AT"},
]