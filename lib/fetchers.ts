import { MediaListWithSortType } from "@/types"
import { getPage } from "./anilist"
import { Media, MediaSort, MediaType } from "@/types/anilist"
import { getEpisodes, getSources } from "./anify"

export async function getMediaWithWatchIdList (page: number, sort: MediaSort, perPage: number): Promise<Media[]> {
  const { media: mediaList } = await getPage({
    page,
    sort,
    perPage,
    type: "ANIME"
  });

  for (const media of mediaList) {
    const episodes = await getEpisodes({ animeId: media.id, providerId: "gogoanime" });
    // Here, 'episodes' will contain the episodes for the current 'media' item
    if (episodes.length > 0) {
      const watchIdEpisodes = episodes.map((episode) => episode.id);
      // Now you can use 'episodeIds' as needed for each 'media' item
      // For example, assign 'episodeIds' to a field in the 'media' object
      media.watchId = watchIdEpisodes[0];
    }
  }

  return mediaList;
}


export async function getMediaListTrending (perPage:number, type: MediaType): Promise<Media[]> {
  const {media: mediaListTrending} = await getPage({sort: "TRENDING_DESC", perPage: perPage, type: type})
  return mediaListTrending
}

export async function getMediaListPopular (perPage:number, type: MediaType): Promise<Media[]> {
  const {media: mediaListPopular} = await getPage({sort: "POPULARITY_DESC", perPage: perPage, type: type})
  return mediaListPopular
}

export async function getMediaListNewest (perPage:number, type: MediaType): Promise<Media[]> {
  const {media: mediaListNewest} = await getPage({sort: "UPDATED_AT_DESC", perPage: perPage, type: type})
  return mediaListNewest
}

export async function getMediaListWithSortTypeList (type: MediaType, perPage: number): Promise<MediaListWithSortType[]> {
  const mediaListPopular = await getMediaListPopular(perPage, type)
  const mediaListTrending = await getMediaListTrending(perPage, type)
  const mediaListNewest = await getMediaListNewest(perPage, type)
  const mediaListWithSortTypeList: MediaListWithSortType[] = [
    {
      title: "Trending Now",
      mediaList: mediaListTrending,
    },
    {
      title: "Popularity",
      mediaList: mediaListPopular,
    },
    {
      title: "Newest",
      mediaList: mediaListNewest,
    },
  ]
  return mediaListWithSortTypeList
}