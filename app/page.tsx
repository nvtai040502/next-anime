import React, { Suspense } from "react";
import { MAX_ITEMS_CAROUSEL, PER_PAGE, defaultSort, sorting } from "@/lib/constants";
import MediaListContainer from "@/components/media/list-container";
import HeroCarousel from "@/components/carousel/hero-carousel";
import { getMediaListTrending, getMediaListWithSortTypeList } from "@/lib/fetchers";
import Hero from "@/components/hero";
import { ProductCardSkeleton } from "@/components/skeletons/hero";

export default async function HomePage() {
    
  const mangaListWithSortTypeList = await getMediaListWithSortTypeList("MANGA", MAX_ITEMS_CAROUSEL)
  
    
    return (
      <>
        <Suspense fallback={<ProductCardSkeleton />}>
          <Hero mediaType="ANIME" perPage={10} />
        </Suspense>
        <MediaListContainer items={mangaListWithSortTypeList} />
      </>
    );
}