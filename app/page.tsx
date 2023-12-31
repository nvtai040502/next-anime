import React, { Suspense } from "react";
import { getMedia, getPage } from "@/lib/anilist";
import { PER_PAGE, defaultSort, sorting } from "@/lib/constants";
import { AnimeList } from "@/components/animeList";
import { searchParamsSchema } from "@/lib/validations/params";
import { PaginationButton } from "@/components/pagination-button";

interface HomePageProps {
  searchParams: {

  }
}

export default async function HomePage({
  searchParams
}:HomePageProps
) {
    const params = searchParamsSchema.parse(searchParams)
    const { sortKey } = sorting.find((item) => item.slug === params.sort) || defaultSort;
    const page = await getPage({
      sort: sortKey,
      page: params.page,
      perPage: PER_PAGE
    })
    return (
        <div>
          {sortKey}
          <AnimeList animeList={page.media}/>
          {page.media.length > 0 ? (
            <PaginationButton pageInfo={page.pageInfo}/>
          ): null}          
          
        </div>
    );
}