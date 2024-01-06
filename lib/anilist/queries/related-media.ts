import coverImageFragment from "../fragments/image";

export const getRelatedMediaQuery = /* GraphQL */ `
  query GetRelatedMedia($id: Int) {
    Media(id: $id) {
      relations{
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