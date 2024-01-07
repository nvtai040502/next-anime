import { MAX_ITEMS_CAROUSEL_HERO } from "@/lib/constants";
import HeroCarousel from "@/components/carousel/media-list/hero";
import { getMediaListTrending, getMediaListWithSortTypeList } from "@/lib/fetchers";
import { ProductCardSkeleton } from "@/components/skeletons/hero";
import { getPage } from "@/lib/anilist";
import React, { Suspense } from "react";
import BodyHomePage from "@/components/layout/pages/home-body";
import HeroHomePage from "@/components/layout/pages/home-hero";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default async function HomePage() {
    
    return (
      <>
      <section>
        <div className="pb-16 ">
          <Suspense fallback={<ProductCardSkeleton />}>
            <HeroHomePage />
          </Suspense> 

           <Suspense fallback={<ProductCardSkeleton />}>
          <BodyHomePage />
        </Suspense>
        </div>
      </section>
      
      </>
    );
}

       