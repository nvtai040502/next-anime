"use client"
import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { Media } from '@/types/anilist';
import { MediaCardBody } from '../cards/media-body';

export const MediaListBodyCarousel = ({ mediaList }: { mediaList: Media[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const gridStyles = {
    gridAutoColumns: '25%', // Default value
  };

  return (
    <div className="overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container grid gap-5 grid-cols-auto grid-flow-col" style={gridStyles} >
          {mediaList.map((media, i) => (
            <div className="embla__slide flex-[0_0_50%] min-w-0" key={i}>
              <MediaCardBody media={media} />
            </div>
          ))}
        </div>
      </div>
      <Button className="embla__prev" onClick={scrollPrev}>
        Prev
      </Button>
      <Button className="embla__next" onClick={scrollNext}>
        Next
      </Button>
    </div>
  );
};

export default MediaListBodyCarousel;
