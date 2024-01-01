"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AnilistMedia } from '@/types/anilist';
import React from 'react';
import { MediaCard } from '../cards/media';
import { MAX_ITEMS_CAROUSEL } from '@/lib/constants';

interface MediaCarouselItemsProps {
  items: AnilistMedia[];
  maxItems?: number
}

const MediaCarouselItems: React.FC<MediaCarouselItemsProps> = ({ items, maxItems=MAX_ITEMS_CAROUSEL }) => {
  
  if (!items.length) return null;
  const itemsCarousel = items.slice(0, maxItems);
  return (
    <Carousel className="w-full">
      
      <CarouselContent>
        
          {itemsCarousel.map((item) => (
            <CarouselItem key={item.id} className="sm:basis-1/3 md:basis-1/5 lg:basis-1/6">
              <MediaCard media={item}/>
            </CarouselItem>
          ))}
      </CarouselContent>
        
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MediaCarouselItems;