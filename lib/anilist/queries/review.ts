import reviewFragment from "../fragments/review";

export const getReviewsQuery = /* GraphQL */ `
  query GetReviews($mediaId: Int, $page: Int, $perPage: Int, $sort: [ReviewSort], $limit: Int) {
    Media(id: $mediaId) {
      reviews(page: $page, perPage: $perPage, limit: $limit, sort: $sort) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        edges {
          node {
            ...review
          }
        }
      }
    }
  }
  ${reviewFragment}
`;
