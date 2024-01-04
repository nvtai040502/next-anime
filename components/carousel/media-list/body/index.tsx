import React from 'react';
import MediaCarouselItems from './items';
import BodyCarouselBase from './base';
import BodyCarouselItems from './items';
import { Media, MediaSort, MediaType } from '@/types/anilist';

interface MediaListBodyCarouselProps {
  title?: React.ReactNode | string
  link?: string
  mediaList: Media[]
}

const MediaListBodyCarousel = ({ 
  mediaList,
  title, 
  link 
}: MediaListBodyCarouselProps) => {
  
  return (
    
    <BodyCarouselBase title={title} link={link}>
      <BodyCarouselItems mediaList={mediaList} />
    </BodyCarouselBase>
  );
};

export default MediaListBodyCarousel;