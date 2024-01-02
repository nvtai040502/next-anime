import { MediaListWithSortType } from "@/types"
import { getPage } from "./anilist"
import { MAX_ITEMS_CAROUSEL } from "./constants"
import { Media, MediaType } from "@/types/anilist"

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