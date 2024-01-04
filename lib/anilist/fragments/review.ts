const reviewFragment = /* GraphQL */ `
  fragment review on Review {
    id
    summary
    body
    rating
    ratingAmount
    score
    user {
      id
      name
    }
  }
`;

export default reviewFragment;