export type Media = {
  id: number;
  title: TitleMedia
  coverImage: CoverImage
  streamingEpisodes: StreamingEpisode[]
  type: MediaType
  description: string
  genres: string[]
  averageScore: number
};

export type MediaType = "ANIME" | "MANGA"
export type MediaSort = 
  'POPULARITY_DESC' | 
  'TRENDING_DESC' |
  "UPDATED_AT_DESC"



export type SortItem = {
  title: string;
  slug: string | null;
  sortKey: MediaSort;
};

export type CoverImage = {
  extraLarge: string,
  large: string,
  medium: string,
  color: string,
}

export type StreamingEpisode = {
  title: string,
  url: string,
  site: string,
  thumbnail: string,
}

export type TitleMedia = {
  romaji: string,
  english: string,
  native: string,
  userPreferred: string
}


export type MediaOperation = {
  data: {
    Media: Media;
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

export type Page = {
  pageInfo: PageInfo,
  media: Media[]
  
};

export type PageOperation = {
  data: {
    Page: Page
  },
  variables: {
    sort: MediaSort,
    page: number,
    perPage: number
    type: MediaType
  };
}

