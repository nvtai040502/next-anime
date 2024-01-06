export const getMediaCharactersPageQuery = /* GraphQL */ `
  query getMediaCharacters($mediaId: Int, $perPage: Int, $sort: [CharacterSort]) {
  Media(id: $mediaId) {
    characters(perPage: $perPage, sort: $sort) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      edges {
        node {
          id
          name {
            full
            userPreferred
          }
          image {
            large
            medium
          }
        }
      }
    }
  }
}
`;
