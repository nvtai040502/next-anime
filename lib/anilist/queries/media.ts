import mediaFragment from "../fragments/media";

export const getMediaQuery = /* GraphQL */ `
  query getMedia ($id: Int) {
    Media(id: $id, type: ANIME) {
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