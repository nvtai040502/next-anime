import coverImageFragment from "../fragments/image";
import mediaFragment from "../fragments/media";

export const getRelatedMediaQuery = /* GraphQL */ `
  query GetRelatedMedia($id: Int) {
    Media(id: $id) {
      relations {
        edges {
          relationType
          node {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
            type
            coverImage {
              ...coverImage
            }
          }
        }
      }
    }
  }
  ${coverImageFragment}

`;

export const getMediaQuery = /* GraphQL */ `
  query getMedia ($id: Int) {
    Media(id: $id) {
      ...media
    }
  }
  ${mediaFragment}
`;


export const getPageQuery = /* GraphQL */ `
  query getPage ($page: Int, $perPage: Int, $sort: [MediaSort], $type: MediaType) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (sort: $sort, type: $type) {
        ...media
      }
    }
  }
  ${mediaFragment}
`;

