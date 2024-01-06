import { getMediaQuery, getPageQuery } from "./queries/media";
import { ANILIST_ENDPOINT } from "../constants";
import { Character, CharacterSort, Media, MediaOperation, MediaReview, MediaSort, MediaTrend, MediaTrendOperation, MediaType, Page, PageOperation, ReviewSort } from "@/types/anilist";
import { getMediaTrendQuery } from "./queries/media-trend";
import { getMediaReviewsPageQuery } from "./queries/review";
import { getMediaCharactersPageQuery } from "./queries/character";
import { getRelatedMediaQuery } from "./queries/related-media";

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
      const errorReason = body.errors[0]?.extensions?.code;

      if (errorReason === 'INVALID_REQUEST') {
        throw body.errors[0]; // Throwing the error for syntax-related issues
      }

      // Returning an object with error details for other kinds of errors
      return {
        status: result.status,
        body: body.errors[0]
      };
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
export async function getCharacters({
  mediaId, 
  sort
}:{
  mediaId: number | string, 
  sort: CharacterSort[]
}): Promise<Character[]> {
  const idToNum = Number(mediaId)
  const res = await anilistFetch<{
    data: {
      Media: {characters: Connection<Character>}
    },
    variables: {
      mediaId: number
      perPage: number
      sort: CharacterSort[]
    }
  }>({
    query: getMediaCharactersPageQuery,
    variables: {
      mediaId: idToNum,
      perPage: 4,
      sort
    }
  });
  return removeEdgesAndNodes(res.body.data.Media.characters);
}

export async function getFewReviewsMedia({
  mediaId, 
  sort
}:{
  mediaId: number | string, 
  sort: ReviewSort[]
}): Promise<MediaReview[]> {
  const idToNum = Number(mediaId)
  const res = await anilistFetch<{
    data: {
      Page: {reviews: MediaReview[]}
    },
    variables: {
      mediaId: number
      perPage: number
      sort: ReviewSort[]
    }
  }>({
    query: getMediaReviewsPageQuery,
    variables: {
      mediaId: idToNum,
      perPage: 4,
      sort
    }
  });
  return res.body.data.Page.reviews;
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
  if (!res.body.data) return undefined
  return res.body.data.Media
  
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

