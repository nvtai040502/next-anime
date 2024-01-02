import { AnilistMedia } from '@/types/anilist';
import React from 'react';
import MediaCarouselBase from './base';
import MediaCarouselItems from './items';

interface MediaCarouselProps {
  title?: React.ReactNode | string
  link?: string
  items: AnilistMedia[]
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ items, title, link }) => {
  
  if (!items.length) return null;

  return (
    
    <MediaCarouselBase title={title} link={link}>
      <MediaCarouselItems items={items} />
    </MediaCarouselBase>
  );
};

export default MediaCarousel;