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
  mediaType: MediaType;
  perPage: number;
  sort: MediaSort;
  page?: number
}

const BodyCarouselItems = ({ 
  mediaType,
  perPage,
  sort,
  page
}: BodyCarouselItemsProps) => {
  
  const [mediaList, setMediaList] = useState<Media[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { media } = await getPage({ sort, type: mediaType, perPage, page });
        setMediaList(media || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [mediaType, perPage, sort, page]);

  if (isLoading) {
    return <ProductCardSkeleton />;
  }

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