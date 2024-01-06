"use client"
import { CharacterCard } from '@/components/cards/character';
import { MediaCardBody } from '@/components/cards/media-body';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import { Character, Media, MediaSort, MediaType } from '@/types/anilist';
import React, { useEffect, useState } from 'react';

interface CharactersCarouselItemsProps {
  characters: Character[]
}

const CharactersCarouselItems = ({ 
  characters
}: CharactersCarouselItemsProps) => {
  
  if (!characters.length) {
    return null;
  }
  return (
    <Carousel className="w-full">
      <CarouselContent>
          {characters.map((character) => (
            <CarouselItem key={character.id} className="sm:basis-1/3 md:basis-1/5 lg:basis-1/6">
              <CharacterCard character={character} />
            </CarouselItem>
          ))}
      </CarouselContent>
        
      
    </Carousel>
  );
};

export default CharactersCarouselItems;