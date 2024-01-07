import characterFragment from "../fragments/character";
import voiceActorFragment from "../fragments/voice-actor";

export const getCharactersQuery = /* GraphQL */ `
  query GetCharacters($mediaId: Int, $page: Int, $perPage: Int, $sort: [CharacterSort]) {
    Media(id: $mediaId) {
      characters(page: $page, perPage: $perPage, sort: $sort) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        edges {
          node {
            ...character
          }
          role
          voiceActors {
            ...voiceActor
          }
        }
      }
    }
  }
  ${characterFragment}
  ${voiceActorFragment}
`;
