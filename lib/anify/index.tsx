import axios from "axios";
import { ANIFY_API } from "../constants";
import {
  AnifyEpisode,
  AnifyEpisodesWithProviderId,
  AnifyEpisodesWithProviderIdOperation,
  AnifyProviderId,
  AnifySources,
  SubType,
} from "@/types/anify";

export const getEpisodesWithProviderId = async ({
  animeId,
}: {
  animeId: string;
}): Promise<AnifyEpisodesWithProviderId[]> => {
  const url = `episodes/${animeId}`;

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
  animeId: string;
  providerId: AnifyProviderId;
}): Promise<AnifyEpisode[]> => {
  const url = `episodes/${animeId}`;

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
  const url = `sources?providerId=${providerId}&watchId=${encodeURIComponent(watchId)}&episodeNumber=${episodeNumber}&id=${mediaId}&subType=${subType}`;
  try {
    const { data }: {data: AnifySources} = await axios.get(`${ANIFY_API}/${url}`);
    return data;
  } catch (error) {
    console.error("Error fetching details:", error);
    return undefined;
  }
};