import streamingEpisodeFragment from "./episode";
import coverImageFragment from "./image";

const mediaFragment = /* GraphQL */ `
  fragment media on Media {
    id
    description
    genres
    averageScore
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