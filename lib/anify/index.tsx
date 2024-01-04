// Reference from https://docs.anify.tv/
import axios from "axios";
import { ANIFY_API, CONSUMET_API } from "../constants";
import {
  AnifyEpisode,
  AnifyEpisodesWithProviderId,
  AnifyEpisodesWithProviderIdOperation,
  AnifyMediaInfoRelations,
  AnifyProviderId,
  AnifySources,
  SubType,
} from "@/types/anify";
import { ensureStartsWithSlash } from "../utils";


export const getMediaInfoRelations = async ({
  mediaId,
}: {
  mediaId: string | number;
}): Promise<AnifyMediaInfoRelations | undefined> => {
  const mediaToString = String(mediaId)
  const url = `relations/${mediaToString}`;

  try {
    const { data }: {data: AnifyMediaInfoRelations[]} = await axios.get(`${ANIFY_API}/${url}`);
    return data[0];
  } catch (error) {
    console.error("Error fetching details:", error);
    return undefined;
  }
};


export const getEpisodesWithProviderId = async ({
  animeId,
}: {
  animeId: string | number;
}): Promise<AnifyEpisodesWithProviderId[]> => {
  const animeIdToString = String(animeId)
  const url = `episodes/${animeIdToString}`;

  try {
    const { data }: AnifyEpisodesWithProviderIdOperation = await axios.get(`${ANIFY_API}/${url}`);
    return data;
  } catch (error) {
    console.error("Error fetching details:", error);
    return [];
  }
};



export const getEpisodes = async ({
  animeId,
  providerId,
}: {
  animeId: string | number;
  providerId: AnifyProviderId;
}): Promise<AnifyEpisode[]> => {
  const animeIdToString = String(animeId)
  const url = `episodes/${animeIdToString}`;

  try {
    const { data }: AnifyEpisodesWithProviderIdOperation = await axios.get(`${ANIFY_API}/${url}`);

    
    const foundProvider = data.find((item) => item.providerId === providerId);

    if (!foundProvider) {
      console.log(`Provider Id: ${providerId} not found`);
      return [];
    }

    return foundProvider.episodes;

  } catch (error) {
    console.error("Error fetching details:", error);
    return [];
  }
};

export const getSources = async ({
  watchId,
  providerId,
  episodeNumber,
  mediaId,
  subType = "sub"
}: {
  watchId: string;
  providerId: AnifyProviderId;
  episodeNumber: string;
  mediaId: string;
  subType?: SubType;
}):Promise<AnifySources | undefined> => {
  const watchIdWithSlash = ensureStartsWithSlash(watchId)
  const url = `sources?providerId=${providerId}&watchId=${encodeURIComponent(watchIdWithSlash)}&episodeNumber=${episodeNumber}&id=${mediaId}&subType=${subType}`;
  try {
    const { data }: {data: AnifySources} = await axios.get(`${ANIFY_API}/${url}`);
    return data;
  } catch (error) {
    console.log("Error fetching details:", error);
    return undefined;
  }
};