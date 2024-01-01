import React, { Suspense } from "react";
import { getMedia, getPage } from "@/lib/anilist";
import { MAX_ITEMS_CAROUSEL, PER_PAGE, defaultSort, sorting } from "@/lib/constants";
import { AnimeList } from "@/components/animeList";
import { searchParamsSchema } from "@/lib/validations/params";
import { PaginationButton } from "@/components/pagination-button";
import { type Option } from 'artplayer/types/option';
import { getEpisodes, getEpisodesWithProviderId, getSources } from "@/lib/anify";
import Player from "@/components/player";
import Artplayer from "artplayer";
import MediaHero from "@/components/media/hero";
import MediaCarousel from "@/components/carousel/media";


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
    const {media, pageInfo} = await getPage({page: params.page, sort: sortKey, perPage: MAX_ITEMS_CAROUSEL})
    return (
      <main>
        <MediaHero media={media[1]} />   
        <div className="mt-8 space-y-8">
          <MediaCarousel
            title="Trending Movies"
            link="/movie/trending"
            items={media}
          />
          <MediaCarousel
            title="Trending TV Shows"
            link="/tv/trending"
            items={media}
          />
        </div>
      </main>
    );
}