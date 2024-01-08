import { MAX_ITEMS_CAROUSEL_BODY, MAX_ITEMS_CAROUSEL_HERO } from "@/lib/constants";
import HeroCarousel from "@/components/carousel/media-list/hero";
import { ProductCardSkeleton } from "@/components/skeletons/hero";
import { getAllGenres, getMediaList } from "@/lib/anilist";
import React, { Suspense } from "react";
import BodyHomePage from "@/components/layout/pages/home-body";
import HeroHomePage from "@/components/layout/pages/home-hero";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Shell } from "@/components/shells/shell";
import CarouselShell from "@/components/shells/carousel-shell";
import { MediaListBodyCarousel } from "@/components/carousel/media-body";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { GenresCarousel } from "@/components/carousel/genres";

export default async function DashboardPage() {
    const genresPromise = getAllGenres()
    const animeListTrendingPromise = getMediaList({
      type:"ANIME",
      perPage: MAX_ITEMS_CAROUSEL_BODY,
      sort: "TRENDING_DESC"
    })
    const mangaListTrendingPromise = getMediaList({
      type: "MANGA",
      perPage: MAX_ITEMS_CAROUSEL_BODY,
      sort: "TRENDING_DESC"
    })
    const animeListPopularPromise = getMediaList({
      type:"ANIME",
      perPage: MAX_ITEMS_CAROUSEL_BODY,
      sort: "POPULARITY_DESC"
    })
    const mangaListPopularPromise = getMediaList({
      type: "MANGA",
      perPage: MAX_ITEMS_CAROUSEL_BODY,
      sort: "POPULARITY_DESC"
    })

    const animeListNewPromise = getMediaList({
      type:"ANIME",
      perPage: MAX_ITEMS_CAROUSEL_BODY,
      sort: "POPULARITY_DESC"
    })
    const mangaListNewPromise = getMediaList({
      type: "MANGA",
      perPage: MAX_ITEMS_CAROUSEL_BODY,
      sort: "UPDATED_AT_DESC"
    })
    return (
      <Shell className="pt-0 md:pt-0">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-12 text-center md:pt-32"
      >
        <Balancer
          as="h1"
          className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          An e-commerce skateshop built with 
        </Balancer>
        <Balancer className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Buy and sell skateboarding gears from independent brands and stores
          around the world with ease
        </Balancer>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/products" className={cn(buttonVariants())}>
            Buy now
            <span className="sr-only">Buy now</span>
          </Link>
          <Link
            href="/dashboard/stores"
            className={cn(
              buttonVariants({
                variant: "outline",
              })
            )}
          >
            Sell now
            <span className="sr-only">Sell now</span>
          </Link>
        </div>
      </section>
      

      <Suspense fallback={<ProductCardSkeleton />}>
        <CarouselShell 
          title="Trending Anime"
          // description="Explore stores from around the world"
          href="/stores"
          // linkText="View all"
          className="py-8 md:py-10 lg:py-12 "
        >
          <MediaListBodyCarousel mediaListPromise={animeListTrendingPromise} />
        </CarouselShell>
      </Suspense>

      <Suspense fallback={<ProductCardSkeleton />}>
        <CarouselShell 
          title="Popular Anime"
          href="/stores"
          className="py-8 md:py-10 lg:py-12 "
        >
          <MediaListBodyCarousel mediaListPromise={animeListPopularPromise} />
        </CarouselShell>
      </Suspense>

      <Suspense fallback={<ProductCardSkeleton />}>
        <CarouselShell 
          title="Newest Anime"
          href="/stores"
          className="py-8 md:py-10 lg:py-12 "
        >
          <MediaListBodyCarousel mediaListPromise={animeListNewPromise} />
        </CarouselShell>
      </Suspense>

      <Suspense fallback={<ProductCardSkeleton />}>
        <CarouselShell 
          title="All Genres"
          description="Genres available to explore"
          href="/stores"
          className="py-8 md:py-10 lg:py-12 "
        >
          <GenresCarousel genresPromise={genresPromise} />
        </CarouselShell>
      </Suspense>

      <Suspense fallback={<ProductCardSkeleton />}>
        <CarouselShell 
          title="Trending Manga"
          href="/stores"
          className="py-8 md:py-10 lg:py-12 "
        >
          <MediaListBodyCarousel mediaListPromise={mangaListTrendingPromise} />
        </CarouselShell>
      </Suspense>

      <Suspense fallback={<ProductCardSkeleton />}>
        <CarouselShell 
          title="Trending Now"
          description="Explore stores from around the world"
          href="/stores"
          linkText="View all stores"
          className="py-8 md:py-10 lg:py-12 "
        >
          <MediaListBodyCarousel mediaListPromise={mangaListPopularPromise} />
        </CarouselShell>
      </Suspense>

      <Suspense fallback={<ProductCardSkeleton />}>
        <CarouselShell 
          title="Trending Now"
          href="/stores"
          linkText="View all stores"
          className="py-8 md:py-10 lg:py-12 "
        >
          <MediaListBodyCarousel mediaListPromise={mangaListNewPromise} />
        </CarouselShell>
      </Suspense>

      
    </Shell>
    );
}

       