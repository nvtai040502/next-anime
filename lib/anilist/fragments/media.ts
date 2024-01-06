import streamingEpisodeFragment from "./episode";
import coverImageFragment from "./image";
import reviewFragment from "./review";

const mediaFragment = /* GraphQL */ `
  fragment media on Media {
    id
    description
    genres
    averageScore
    bannerImage
    type
    startDate {
      year
      month
      day
    }
    season
    seasonYear
    format
    status
    episodes
    duration
    chapters
    volumes
    
    endDate {
      year
      month
      day
    }
    rankings {
        rank
        type
        format
        year
        allTime
        context
        season
      }
    airingSchedule {
      nodes {
        episode
        airingAt
      }
    }
    
    title {
      romaji
      english
      native
      userPreferred
    }
    coverImage {
      ...coverImage
    }
    streamingEpisodes {
      ...streamingEpisode
    }
  }
  ${coverImageFragment}
  ${streamingEpisodeFragment}

`;

export default mediaFragment;