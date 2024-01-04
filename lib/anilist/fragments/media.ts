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
    reviews {
      nodes {
        ...review
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
  ${reviewFragment}
`;

export default mediaFragment;