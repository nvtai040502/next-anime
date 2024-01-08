import React from 'react';
import { Character, Media, MediaSort, MediaType } from '@/types/anilist';
import CarouselShell from '../../shells/carousel-shell';
import { Carousel, CarouselContent, CarouselItem } from '../../ui/carousel';
import { CharacterCard } from '../../cards/character';
import CharactersCarouselItems from './items';

interface CharactersCarouselProps {
  title?: React.ReactNode | string
  link?: string
  characters: Character[]
}

const CharactersCarousel = ({ 
  characters,
  title, 
  link 
}: CharactersCarouselProps) => {
  
  return (
    
    <CarouselShell title={title} link={link}>
      <CharactersCarouselItems characters={characters} />
    </CarouselShell>
  );
};

export default CharactersCarousel;