export const ANILIST_ENDPOINT = "https://graphql.anilist.co"
export const PER_PAGE = 8
export const FIRST_PAGE = 1
export const NEAREST_PAGES = 3


export type MediaSort = 
'POPULARITY' | 
'POPULARITY_DESC' | 
'TRENDING' | 
'TRENDING_DESC'

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