import { getMediaListWithSortTypeList } from "@/lib/fetchers";
import { Media, MediaSort, MediaType } from "@/types/anilist";
import { MAX_ITEMS_CAROUSEL_BODY, MAX_ITEMS_CAROUSEL_HERO } from "@/lib/constants";
import MediaListHeroCarousel from "@/components/carousel/media-list/hero";
import React, { Suspense } from "react";
import { ProductCardSkeleton } from "@/components/skeletons/hero";
import { getPage } from "@/lib/anilist";
import MediaListBodyCarousel from "@/components/carousel/media-list/body";


const BodyHomePage = async () => {
  const perPage = MAX_ITEMS_CAROUSEL_BODY
  const page = 1
  return ( 
    <div className="w-full space-y-5 sm:space-y-10 -mt-24 relative z-10">
      <MediaListBodyCarousel
        title="Treding Now"
        link="/" 
        mediaType={"ANIME"} 
        perPage={perPage}
        sort={"TRENDING_DESC"}
        page={page}
      />
      <MediaListBodyCarousel
        title="Popularity"
        mediaType={"ANIME"} 
        perPage={perPage}
        sort="POPULARITY_DESC"
        page={page}
      />

    </div>
   );
}
 
export default BodyHomePage;