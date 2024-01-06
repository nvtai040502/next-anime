import React from 'react';
import { Character, Media, MediaSort, MediaType } from '@/types/anilist';
import BodyCarouselBase from '../_base';
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
    
    <BodyCarouselBase title={title} link={link}>
      <CharactersCarouselItems characters={characters} />
    </BodyCarouselBase>
  );
};

export default CharactersCarousel;