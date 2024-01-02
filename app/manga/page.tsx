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
import HeroCarousel from "@/components/carousel/hero-carousel";
import { MediaListWithSortType } from "@/types";
import { getMediaListTrending, getMediaListWithSortTypeList } from "@/lib/fetchers";


interface MangePageProps {
  searchParams: {

  }
}
export default async function MangePage({
  searchParams
}:MangePageProps
) {
    
  
    const mangaListTrending = await getMediaListTrending(MAX_ITEMS_CAROUSEL, "MANGA")
    const mangaListWithSortTypeList = await getMediaListWithSortTypeList("MANGA", MAX_ITEMS_CAROUSEL)
    
    return (
      <section>
        <div className="">
          
          <HeroCarousel mediaList={mangaListTrending} />   
          <MediaListContainer items={mangaListWithSortTypeList} />
            
        </div>
      </section>
    );
}