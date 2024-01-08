import mediaFragment from "../fragments/media";

export const getMediaSearchQuery = /* GraphQL */ `
  query getMedia ($page: Int, $perPage: Int, $type: MediaType, $sort: [MediaSort], $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (sort: $sort, type: $type, search: $search) {
        ...media
      }
    }
  }
  ${mediaFragment}
`;
