import { getMediaListWithSortTypeList } from "@/lib/fetchers";
import { Media, MediaSort, MediaType } from "@/types/anilist";
import { FIRST_PAGE, MAX_ITEMS_CAROUSEL_HERO } from "@/lib/constants";
import MediaListHeroCarousel from "@/components/carousel/media-list/hero";
import React, { Suspense } from "react";
import { ProductCardSkeleton } from "@/components/skeletons/hero";
import { getPage } from "@/lib/anilist";



const HeroHomePage = async () => {
  const { media: mediaList } = await getPage({page:FIRST_PAGE, sort: "TRENDING_DESC", perPage: MAX_ITEMS_CAROUSEL_HERO, type: "ANIME"})
  return ( 
    <div>
      
      <MediaListHeroCarousel 
        mediaList={mediaList}
      />
      
    </div>
   );
}
 
export default HeroHomePage;