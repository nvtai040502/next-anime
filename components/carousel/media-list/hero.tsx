"use client";

import { Media, MediaSort, MediaType } from "@/types/anilist";
import MediaHeroCard from "../../cards/media-hero";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi, CarouselDotButton, } from "../../ui/carousel";
import { MediaListWithSortType } from "@/types";
import { useEffect, useState, useTransition } from "react";
import Autoplay from "embla-carousel-autoplay"
import { getPage } from "@/lib/anilist";
import { ProductCardSkeleton } from "@/components/skeletons/hero";

interface MediaListHeroCarouselProps {
  mediaList: Media[]
}
export default function MediaListHeroCarousel({
  mediaList
}: MediaListHeroCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  

  useEffect(() => {
    if (!api || !mediaList.length) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

  }, [api, mediaList]);

  

  if (!mediaList.length) {
    return null;
  }

  

  return (
    <Carousel
      // plugins={[
      //   Autoplay({
      //     delay: 5000,
      //   }),
      // ]}
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      
      <CarouselContent className="">
        {mediaList.map((media) => (
          <CarouselItem key={media.id} className="relative">
            <MediaHeroCard item={media}/>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      
      <CarouselPrevious />
      <CarouselNext />
      
      <CarouselDotButton numberOfDots={count} currentSlide={current} className="gap-4 "/>

    </Carousel>
    
    
    
  );
}