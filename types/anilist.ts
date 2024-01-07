export type MediaRank = {
  rank: number,
  type: MediaRankType,
  format: string,
  year: number,
  allTime: boolean,
  context: string,
}
export type CharacterRole = "MAIN" | "SUPPORTING" | "BACKGROUND"

export type Name = {
  first: string
  middle: string
  last: string
  full: string
  userPreferred: string
}

export type VoiceActor = {
  name: Name
  id: number
  languageV2: string
  image: {
    large: string
    medium: string
  }
  description: string
  primaryOccupations: string[]
  gender: string
  dateOfBirth: FuzzyDate
  dateOfDeath: FuzzyDate
  age: number
  yearsActive: number[]
  homeTown: string
  bloodType: string
  isFavourite: boolean
  isFavouriteBlocked: boolean
}

export type Character = Omit<AnilistCharacter, 'role' | 'voiceActors'> & {
  role: CharacterRole;
  voiceActors: VoiceActor[];
};

export type AnilistCharacter = {
  
  id: number
  name: {
    full: string
    userPreferred: string
  }
  image: {
    large: string
    medium: string
  }
  description: string,
  gender: string
  dateOfBirth: FuzzyDate
  age: string
  bloodStyle: string
  isFavourite: boolean
  isFavouriteBlocked: boolean
  siteUrl: string
}

export type FuzzyDate = {
  year: number
  month: number
  day: number
}

export type CharacterSort = "SEARCH_MATCH" | "FAVOURITES" | "RELEVANCE" | "ID" | "ID_DESC" | "FAVOURITES_DESC"
export type ReviewSortKey = "RATING" | "UPDATED_AT"

export type Review = AnilistReview
export type AnilistReview = {
  id: number
  createdAt: number
  updatedAt: number
  private: boolean
  summary: string
  body: string
  rating: number
  ratingAmount: number
  score: number
  user: {
    id: number
    name: string
  }
}

export type MediaRankType = "RATED" | "POPULAR"
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
  season: "WINTER" | "FALL" | "SPRING" | "SUMMER"
  seasonYear: number
  format: "TV" | "TV_SHORT" | "MOVIE" | "SPECIAL" | "OVA" | "ONA" | "MUSIC" | "MANGA" | "NOVEL" | "ONE_SHOT"
  status: "FINISHED" | "RELEASING" | "NOT_YET_RELEASED" | "CANCELLED" | "HIATUS"
  episodes: number
  duration: number
  chapters: number
  volumes: number
  watchId: string // take from Anify
  rankings: MediaRank[]
  startDate: FuzzyDate
  endDate: FuzzyDate
  airingSchedule: {
    nodes: {
      episode: number,
      airingAt: number
    }[]
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

