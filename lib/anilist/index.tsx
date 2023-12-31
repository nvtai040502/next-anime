import { AnilistMedia, AnilistMediaOperation, AnilistPage, AnilistPageOperation } from "@/types/anilist";
import { getMediaQuery, getPageQuery } from "./queries/media";
import { ANILIST_ENDPOINT, MediaSort } from "../constants";

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


export async function getMedia({id}:{id: number}): Promise<AnilistMedia | undefined> {
  const res = await anilistFetch<AnilistMediaOperation>({
    query: getMediaQuery,
    variables: {
      id
    }
  });
  return res.body.data.Media;
}

export async function getPage({
  page, 
  perPage,
  sort
}:{
  sort: MediaSort,
  page: number,
  perPage: number
}): Promise<AnilistPage> {
  const res = await anilistFetch<AnilistPageOperation>({
    query: getPageQuery,
    variables: {
      sort,
      page,
      perPage
    }
  });
  console.log(res.body.data.Page.pageInfo)
  return res.body.data.Page;
}