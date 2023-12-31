import coverImageFragment from "./image";

const mediaFragment = /* GraphQL */ `
  fragment media on Media {
    id
    title {
      romaji
      english
      native
      userPreferred
    }
    coverImage {
      ...coverImage
    }
  }
  ${coverImageFragment}
`;

export default mediaFragment;