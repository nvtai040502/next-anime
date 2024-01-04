import { MAX_ITEMS_CAROUSEL_HERO, defaultSort, sorting } from "@/lib/constants";
import HeroCarousel from "@/components/carousel/media-list/hero";
import { getMediaListTrending, getMediaListWithSortTypeList } from "@/lib/fetchers";
import { ProductCardSkeleton } from "@/components/skeletons/hero";
import { getPage } from "@/lib/anilist";
import React, { Suspense } from "react";
import BodyHomePage from "@/components/layout/pages/home-body";
import HeroHomePage from "@/components/layout/pages/home-hero";

export default async function HomePage() {
    
    return (
      <>
        <Suspense fallback={<ProductCardSkeleton />}>
          <HeroHomePage />
        </Suspense>

        <Suspense fallback={<ProductCardSkeleton />}>
          <BodyHomePage />
        </Suspense>
      </>
    );
}