import React from 'react';
import MediaCarouselItems from './items';
import BodyCarouselBase from './base';
import BodyCarouselItems from './items';
import { MediaSort, MediaType } from '@/types/anilist';

interface MediaListBodyCarouselProps {
  title?: React.ReactNode | string
  link?: string
  mediaType: MediaType
  sort: MediaSort
  perPage: number
  page?: number
}

const MediaListBodyCarousel = ({ 
  mediaType,
  sort,
  perPage,
  page,
  title, 
  link 
}: MediaListBodyCarouselProps) => {
  
  return (
    
    <BodyCarouselBase title={title} link={link}>
      <BodyCarouselItems mediaType={mediaType} sort={sort} perPage={perPage} page={page} />
    </BodyCarouselBase>
  );
};

export default MediaListBodyCarousel;