const characterFragment = /* GraphQL */ `
  fragment character on Character {
    id
    name {
      first
      last
      full
      userPreferred
    }
    image {
      large
      medium
    }
    description
    gender
    dateOfBirth {
      year
      month
      day
    }
    age 
    bloodType
    isFavourite
    isFavouriteBlocked
  }
`;

export default characterFragment;