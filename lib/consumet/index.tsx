import axios from "axios";
import { CONSUMET_API } from "../constants";
import { AnimeInfo, AnimeProvider, AnimeStreamingLink, MangaInfo, MangaProvider, MangaStreamingLink, RecentEpisodes } from "@/types/consumet";
import { Media } from "@/types/anilist";

export const getMangaInfo = async ({
  mangaId,
  provider="mangadex"
}: {
  mangaId: string | number;
  provider?: MangaProvider
}): Promise<MangaInfo | undefined> => {
  const mangaIdToString = String(mangaId)
  const url = `meta/anilist-manga/info/${mangaIdToString}`

  try {
    const { data }: {data: MangaInfo} = await axios.get(`${CONSUMET_API}/${url}`, { params: { provider: provider } });
    return data;

  } catch (error) {
    console.error("Error fetching details:", error);
    return undefined;
  }
};

export const getAnimeInfo = async ({
  animeId,
  provider
}: {
  animeId: string
  provider?: AnimeProvider
}): Promise<AnimeInfo | undefined> => {
  const url = `meta/anilist/info/${animeId}`

  try {
    const { data }: {data: AnimeInfo} = await axios.get(`${CONSUMET_API}/${url}`, { params: { provider: provider } });
    return data;

  } catch (error) {
    console.error("Error fetching details:", error);
    return undefined;
  }
};

export const getAnimeStreamingLink = async ({
  watchId,
}: {
  watchId: string
}): Promise<AnimeStreamingLink | undefined> => {
  const url = `meta/anilist/watch/${watchId}`

  try {
    const { data }: {data: AnimeStreamingLink} = await axios.get(`${CONSUMET_API}/${url}`);
    return data;

  } catch (error) {
    console.error("Error fetching details:", error);
    return undefined;
  }
};




export const getRecentEpisodes = async ({
  page=1,
  perPage,
  provider="gogoanime"
}: {
  page?: number
  perPage: number
  provider?: AnimeProvider
}): Promise<RecentEpisodes | undefined> => {
  const url = `meta/anilist/recent-episodes`

  try {
    const { data }: {data: RecentEpisodes} = await axios.get(`${CONSUMET_API}/${url}`, { params: { 
      page,
      perPage,
      provider 
    } });
    return data;

  } catch (error) {
    console.error("Error fetching details:", error);
    return undefined;
  }
};

export const getMangaStreamingLink = async ({
  chapterId,
  provider="mangadex"
}: {
  chapterId: string
  provider?: MangaProvider
}): Promise<MangaStreamingLink> => {
  const url = `meta/anilist-manga/read`

  try {
    const { data }: {data: MangaStreamingLink} = await axios.get(`${CONSUMET_API}/${url}`, { params: { chapterId: chapterId, provider: provider } });
    return data;

  } catch (error) {
    console.error("Error fetching details:", error);
    return [];
  }
};