import { getMediaQuery, getPageQuery, getRelatedMediaQuery } from "./queries/media";
import { ANILIST_ENDPOINT } from "../constants";
import { Media, MediaOperation, MediaSort, MediaTrend, MediaTrendOperation, MediaType, Page, PageOperation } from "@/types/anilist";
import { getMediaTrendQuery } from "./queries/media-trend";

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

type Connection<T> = {
  edges: Array<Edge<T>>;
};
export type Edge<T> = {
  node: T;
};
const removeEdgesAndNodes = (array: Connection<any>) => {
  return array.edges.map((edge) => edge?.node);
};

export async function anilistFetch<T>({
  query,
  variables,
  headers
}: {
  query: string;
  variables?: ExtractVariables<T>;
  headers?: HeadersInit;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(ANILIST_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...headers
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
     
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    throw {
      error: e,
      query
    };
  }
}

export async function getMediaTrend(mediaId: number | string): Promise<MediaTrend | undefined> {
  const idToNum = Number(mediaId)
  const res = await anilistFetch<MediaTrendOperation>({
    query: getMediaTrendQuery,
    variables: {
      mediaId: idToNum
    }
  });
  return res.body.data.MediaTrend;
}

export async function getRelatedMedia(id: number | string): Promise<Media[]> {
  const idToNum = Number(id)
  const res = await anilistFetch<{
    data: {
      Media: {
        relations: Connection<Media>
      }
    }, variables: {
      id: number
    }}>({
    query: getRelatedMediaQuery,
    variables: {
      id: idToNum,
    }
  });
  return removeEdgesAndNodes(res.body.data.Media.relations);
}

export async function getMedia(id: number | string): Promise<Media | undefined> {
  const idToNum = Number(id)
  const res = await anilistFetch<MediaOperation>({
    query: getMediaQuery,
    variables: {
      id: idToNum,
    }
  });
  return res.body.data.Media;
}

export async function getPage({
  page=1, 
  perPage,
  sort,
  type
}:{
  sort: MediaSort,
  page?: number,
  perPage: number,
  type: MediaType
}): Promise<Page> {
  const res = await anilistFetch<PageOperation>({
    query: getPageQuery,
    variables: {
      sort,
      page,
      perPage,
      type
    }
  });
  return res.body.data.Page;
}

