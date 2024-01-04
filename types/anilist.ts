
export type Media = {
  id: number;
  title: TitleMedia
  coverImage: CoverImage
  streamingEpisodes: AnilistEpisode[]
  type: MediaType
  description: string
  genres: string[]
  averageScore: number
  bannerImage: string
  watchId: string // take from Anify
  reviews: {
    nodes: Review[]
  }
};

export type MediaTrend = {
  date: number
  trending: number
  averageScore: number
  popularity: number
  episode: number
  releasing: boolean
  mediaId_not: number
  mediaId_in: number
}


export type MediaType = "ANIME" | "MANGA"
export type MediaSort = 
  'POPULARITY_DESC' | 
  'TRENDING_DESC' |
  "UPDATED_AT_DESC"

export type Review = {
  id: number
  summary: string
  body: string
  rating: number
  ratingAmount: number
  score: number
  user: {
    id: number,
    name: string
  }
}



export type CoverImage = {
  extraLarge: string,
  large: string,
  medium: string,
  color: string,
}

export type AnilistEpisode = {
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
export type MediaTrendOperation = {
  data: {
    MediaTrend: MediaTrend;
  };
  variables: {
    mediaId: number;
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

