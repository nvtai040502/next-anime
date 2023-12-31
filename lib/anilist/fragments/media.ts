const mediaFragment = /* GraphQL */ `
  fragment media on Media {
    id
    title {
      romaji
      english
      native
    }
  }
`;

export default mediaFragment;