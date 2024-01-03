import { getMediaQuery, getPageQuery } from "./queries/media";
import { ANILIST_ENDPOINT } from "../constants";
import { Media, MediaOperation, MediaSort, MediaType, Page, PageOperation } from "@/types/anilist";

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;


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


export async function getMedia({
  id,
}:{
  id: number
}): Promise<Media | undefined> {
  const res = await anilistFetch<MediaOperation>({
    query: getMediaQuery,
    variables: {
      id
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

