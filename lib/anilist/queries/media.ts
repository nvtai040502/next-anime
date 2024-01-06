import coverImageFragment from "../fragments/image";
import mediaFragment from "../fragments/media";
import mediaTrendFragment from "../fragments/media-trend";



export const getMediaTrendQuery = /* GraphQL */ `
  query getMediaTrend ($id: Int) {
    MediaTrend(mediaId: $mediaId) {
      ...mediaTrend
    }
  }
  ${mediaTrendFragment}
`;
export const getMediaQuery = /* GraphQL */ `
  query getMedia ($id: Int) {
    Media(id: $id) {
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

