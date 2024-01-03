import React, { Suspense } from "react";
import HeroMediaPage from "@/components/layout/pages/media-hero";
import { searchParamsSchema } from "@/lib/validations/params";
import { defaultSort, sorting } from "@/lib/constants";
import BodyMediaPage from "@/components/layout/pages/media-body";
import { ProductCardSkeleton } from "@/components/skeletons/hero";

interface AnimePageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
export default async function AnimePage({searchParams}:AnimePageProps) {
  const params = searchParamsSchema.parse(searchParams)
  const {sortKey, title} = sorting.find((item) => item.slug === params.sort) || defaultSort;
    return (
      <section className="mt-24 container w-full max-w-screen-2xl space-y-1 sm:space-y-2.5">
       
        <HeroMediaPage sortKey={sortKey}/>
        <Suspense fallback={<ProductCardSkeleton />}>
          <BodyMediaPage sort={sortKey} page={params.page} mediaType="ANIME"/>
        </Suspense>
        
      </section>
    );
}