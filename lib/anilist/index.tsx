import { getMediaQuery, getPageQuery } from "./queries/media";
import { ANILIST_ENDPOINT } from "../constants";
import { AnilistCharacter, AnilistReview, Character, CharacterRole, CharacterSort, Media, MediaOperation, MediaSort, MediaTrend, MediaTrendOperation, MediaType, Page, PageInfo, PageOperation, Review, ReviewSortKey, VoiceActor } from "@/types/anilist";
import { getMediaTrendQuery } from "./queries/media-trend";
import { getReviewsQuery } from "./queries/review";
import { getFranchiseQuery } from "./queries/franchise";
import { getCharactersQuery } from "./queries/character";

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
export async function getCharacters({
  mediaId,
  page,
  perPage, 
  sort=["FAVOURITES_DESC"]
}:{
  mediaId: number | string, 
  perPage: number
  page: number
  sort?: CharacterSort[]
}): Promise<{
  pageInfo: PageInfo
  characters: Character[]
}> {
  const idToNum = Number(mediaId)
  const res = await anilistFetch<{
    data: {
      Media: {characters: {
        pageInfo: PageInfo,
        edges: {
          node: AnilistCharacter,
          role: CharacterRole,
          voiceActors: VoiceActor[]
        }[]
      }}
    },
    variables: {
      mediaId: number
      sort: CharacterSort[]
      page: number
      perPage: number
    }
  }>({
    query: getCharactersQuery,
    variables: {
      mediaId: idToNum,
      sort,
      perPage,
      page
    }
  });
  const { pageInfo, edges } = res.body.data.Media.characters;
  const characters = edges.map((edge) => {
    const { node, role, voiceActors } = edge;
    return { ...node, role, voiceActors };
  });

  return { pageInfo, characters };
}

export async function getReviews({
  mediaId, 
  limit,
  page,
  perPage,
  sort
}:{
  mediaId: number | string,
  limit?: number,
  page: number,
  perPage: number 
  sort: ReviewSortKey[]
}): Promise<{
  pageInfo: PageInfo
  reviews: Review[]
}> {
  const idToNum = Number(mediaId)
  const res = await anilistFetch<{
    data: {
      Media: {reviews: {
        pageInfo: PageInfo,
        edges: {
          node: AnilistReview,
        }[]
      }}
    },
    variables: {
      mediaId: number
      sort: ReviewSortKey[]
      limit?: number
      page: number
      perPage: number
    }
  }>({
    query: getReviewsQuery,
    variables: {
      mediaId: idToNum,
      perPage,
      page,
      limit,
      sort
    }
  });
  const { pageInfo, edges } = res.body.data.Media.reviews;
  const reviews = edges.map((edge) => {
    const { node } = edge;
    return { ...node };
  });
  return {pageInfo, reviews};
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

export async function getFranchise({
  mediaId,
}: {
  mediaId: string | number

}): Promise<Media[]> {
  const idToNum = Number(mediaId)
  const res = await anilistFetch<{
    data: {
      Media: {
        relations: {
          edges: {
            node: Media
            relationType: string
          }[]
        }
      }
    }, variables: {
      id: number
    }}>({
    query: getFranchiseQuery,
    variables: {
      id: idToNum,
    }
  });
  const { edges } = res.body.data.Media.relations;
  const franchise = edges.map((edge) => {
    const { node, relationType } = edge;
    return { ...node, relationType };
  });

  return franchise;
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

