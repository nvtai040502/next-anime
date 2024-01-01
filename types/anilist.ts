export type MediaSort = 
'POPULARITY' | 
'POPULARITY_DESC' | 
'TRENDING' | 
'TRENDING_DESC'

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

export type AnilistMedia = {
  id: number;
  title: TitleMedia
  coverImage: CoverImage
  streamingEpisodes: StreamingEpisode[]
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

