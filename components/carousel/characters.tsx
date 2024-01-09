"use client"
import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Character } from '@/types/anilist';
import { CharacterCard } from '@/components/cards/character';
import { Button } from '@/components/ui/button';

export const CharactersCarousel = ({ characters }: { characters: Character[] }) => {
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
          {characters.map((character, i) => (
            <div className="embla__slide flex-[0_0_50%] min-w-0" key={i}>
              <CharacterCard character={character} />
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

export default CharactersCarousel;
