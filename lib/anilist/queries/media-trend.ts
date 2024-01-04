import mediaTrendFragment from "../fragments/media-trend";

export const getMediaTrendQuery = /* GraphQL */ `
  query getMediaTrend ($mediaId: Int) {
    MediaTrend(mediaId: $mediaId) {
      ...mediaTrend
    }
  }
  ${mediaTrendFragment}
`;
