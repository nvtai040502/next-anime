"use client";

import { AnilistMedia } from "@/types/anilist";
import MediaHeroCard from "../cards/media-hero";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function HeroCarousel({ items }: { items: AnilistMedia[] }) {
  if (!items.length) return null
  return (
    <Carousel className="w-full ">
      <CarouselContent className="">
        {items.map((item) => (
          <CarouselItem key={item.id} className="relative h-[140vh]">
            <MediaHeroCard item={item}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
    
    
    
  );
}