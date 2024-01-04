"use client"
import { MediaCardBody } from '@/components/cards/media-body';
import { ProductCardSkeleton } from '@/components/skeletons/hero';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import { getPage } from '@/lib/anilist';
import { MAX_ITEMS_CAROUSEL_BODY } from '@/lib/constants';
import { Media, MediaSort, MediaType } from '@/types/anilist';
import React, { useEffect, useState } from 'react';

interface BodyCarouselItemsProps {
  mediaList: Media[]
}

const BodyCarouselItems = ({ 
  mediaList
}: BodyCarouselItemsProps) => {
  
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  if (!mediaList.length) {
    return null;
  }
  return (
    <Carousel className="w-full">
      <CarouselContent>
          {mediaList.map((media) => (
            <CarouselItem key={media.id} className="sm:basis-1/3 md:basis-1/5 lg:basis-1/6">
              <MediaCardBody media={media}/>
            </CarouselItem>
          ))}
      </CarouselContent>
        
      
    </Carousel>
  );
};

export default BodyCarouselItems;