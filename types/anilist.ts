import { MediaSort } from "@/lib/constants";

export type AnilistMedia = {
  id: string;
  title: {
    romaji: string,
    english: string,
    native: string
}
};
export type AnilistMediaOperation = {
  data: {
    Media: AnilistMedia;
  };
  variables: {
    id: number;
  };
};

export type PageInfo = {
  total: number,
  currentPage: number,
  lastPage: number,
  hasNextPage: boolean,
  perPage: number
};

export type AnilistPage = {
  pageInfo: PageInfo,
  media: AnilistMedia[]
  
};

export type AnilistPageOperation = {
  data: {
    Page: AnilistPage
  },
  variables: {
    sort: MediaSort,
    page: number,
    perPage: number
  };
}

