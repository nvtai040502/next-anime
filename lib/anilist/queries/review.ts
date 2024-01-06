
export const getMediaReviewsPageQuery = /* GraphQL */ `
  query getMediaReviewsPage($perPage: Int, $mediaId: Int, $sort: [ReviewSort]) {
    Page(perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    reviews(mediaId: $mediaId, sort: $sort) {
      id
      summary
      rating
      ratingAmount
      userRating
      body
      user {
        id
        name
        avatar {
          large
          medium
        }
      }
    }
  }
  }
`;
