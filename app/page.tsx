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
import MediaCarousel from "@/components/carousel/media-carousel";
import { cn } from "@/lib/utils";
import MediaListContainer from "@/components/media/list-container";
import { MediaList } from "@/types/anilist";
import HeroCarousel from "@/components/carousel/hero-carousel";


interface HomePageProps {
  searchParams: {

  }
}
export default async function HomePage({
  searchParams
}:HomePageProps
) {
    
    const {media: mediaTrending} = await getPage({page: 1, sort: "TRENDING_DESC", perPage: MAX_ITEMS_CAROUSEL})
    const {media: mediaPopular} = await getPage({page: 1, sort: "POPULARITY_DESC", perPage: MAX_ITEMS_CAROUSEL})
    const {media: mediaNewest} = await getPage({page: 1, sort: "UPDATED_AT_DESC", perPage: MAX_ITEMS_CAROUSEL})
    const mediaList: MediaList[] = [
      {
        title: "Trending Now",
        media: mediaTrending,
      },
      {
        title: "Popularity",
        media: mediaPopular,
      },
      {
        title: "Newest",
        media: mediaNewest,
      },
    ]


    
    return (
      <section>
        <div className="">
          <HeroCarousel items={mediaTrending} />   
          <MediaListContainer items={mediaList} />
            
        </div>
      </section>
    );
}