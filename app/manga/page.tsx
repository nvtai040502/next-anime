import React, { Suspense } from "react";
import HeroMediaPage from "@/components/layout/pages/media-hero";
import { searchParamsSchema } from "@/lib/validations/params";
import { defaultSort, sorting } from "@/lib/constants";
import BodyMediaPage from "@/components/layout/pages/media-body";
import { ProductCardSkeleton } from "@/components/skeletons/hero";

interface MangaPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
export default async function MangaPage({searchParams}:MangaPageProps) {
  const params = searchParamsSchema.parse(searchParams)
  const {sortKey} = sorting.find((item) => item.slug === params.sort) || defaultSort;
    return (
      <section className="mt-24">
       
        <HeroMediaPage />
        <Suspense fallback={<ProductCardSkeleton />}>
          <BodyMediaPage sort={sortKey} page={params.page} mediaType="MANGA"/>
        </Suspense>
        
      </section>
    );
}