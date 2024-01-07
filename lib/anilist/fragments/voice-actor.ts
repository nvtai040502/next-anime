const voiceActorFragment = /* GraphQL */ `
  fragment voiceActor on Staff {
    id
    name {
      first
      last
      full
      userPreferred
    }
    languageV2
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
    yearsActive
    homeTown
    dateOfDeath {
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

export default voiceActorFragment;