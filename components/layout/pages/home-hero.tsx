import { getMediaListWithSortTypeList, getMediaWithWatchIdList } from "@/lib/fetchers";
import { Media, MediaSort, MediaType } from "@/types/anilist";
import { FIRST_PAGE, MAX_ITEMS_CAROUSEL_HERO } from "@/lib/constants";
import MediaListHeroCarousel from "@/components/carousel/media-list/hero";
import React, { Suspense } from "react";
import { ProductCardSkeleton } from "@/components/skeletons/hero";
import { getPage } from "@/lib/anilist";
import { getEpisodes } from "@/lib/anify";
import Image from "next/image";
import Blur from "@/components/blur";



const HeroHomePage = async () => {
  const { media: mediaList } = await getPage({page:FIRST_PAGE, sort: "TRENDING_DESC", perPage: MAX_ITEMS_CAROUSEL_HERO, type: "ANIME"})
  return ( 
    <>
      <MediaListHeroCarousel mediaList={mediaList}/>
      




    </>
  )
}
 
export default HeroHomePage;