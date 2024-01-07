const reviewFragment = /* GraphQL */ `
  fragment review on Review {
    id
    summary
    body
    rating
    ratingAmount
    score
    createdAt
    updatedAt
    userRating
    private
    user {
      id
      name
    }
  }
`;

export default reviewFragment;