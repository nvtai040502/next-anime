"use client";

import { Media } from "@/types/anilist";
import MediaHeroCard from "../cards/media-hero";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi, CarouselDotButton, } from "../ui/carousel";
import { MediaListWithSortType } from "@/types";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay"
export default function HeroCarousel({ mediaList }: { mediaList: Media[] }) {
  if (!mediaList.length) return null
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
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
      
      <CarouselContent>
        {mediaList.map((media) => (
          <CarouselItem key={media.id} className="relative h-[120vh]">
            <MediaHeroCard item={media}/>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      
      <CarouselPrevious />
      <CarouselNext />
      
      <CarouselDotButton numberOfDots={count} currentSlide={current} className="gap-4 left-4"/>

    </Carousel>
    
    
    
  );
}