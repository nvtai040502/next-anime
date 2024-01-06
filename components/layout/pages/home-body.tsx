import { getMediaListWithSortTypeList } from "@/lib/fetchers";
import { Media, MediaSort, MediaType } from "@/types/anilist";
import { FIRST_PAGE, MAX_ITEMS_CAROUSEL_BODY, MAX_ITEMS_CAROUSEL_HERO } from "@/lib/constants";
import MediaListHeroCarousel from "@/components/carousel/media-list/hero";
import React, { Suspense } from "react";
import { ProductCardSkeleton } from "@/components/skeletons/hero";
import { getPage } from "@/lib/anilist";
import MediaListBodyCarousel from "@/components/carousel/media-list/body";


const BodyHomePage = async () => {
  const { media: mediaList } = await getPage({ 
    sort: "TRENDING_DESC", 
    type: "ANIME", 
    perPage: MAX_ITEMS_CAROUSEL_BODY, 
    page: FIRST_PAGE
   });
  return ( 
    <div className="w-full space-y-5 sm:space-y-10 pt-24">
      <MediaListBodyCarousel
        title="Treding Now"
        link="/" 
        mediaList={mediaList}
      />
      <MediaListBodyCarousel
        title="Popularity"
        mediaList={mediaList}
      />

    </div>
   );
}
 
export default BodyHomePage;