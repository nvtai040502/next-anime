"use client"
import { useState, useEffect } from 'react';
import { CharacterCard } from '@/components/cards/character';
import { getCharacters } from '@/lib/anilist';
import { Media, PageInfo, Character } from '@/types/anilist';
import { ProductCardSkeleton } from '@/components/skeletons/hero';

const CharactersInfinityScroll = ({ 
  mediaId, 
  threshold, 
  perPage 
}: { 
  mediaId: string, 
  perPage: number 
  threshold: number
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadCharacters = async (page: number) => {
    setLoading(true);
    const { pageInfo: newPageInfo, characters: newCharacters } = await getCharacters({
      mediaId,
      page,
      perPage: perPage,
    });

    setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
    setPageInfo(newPageInfo);
    setLoading(false);
  };

  useEffect(() => {
    loadCharacters(1);
  }, []);

  const loadMoreCharacters = () => {
    if (pageInfo?.hasNextPage && !loading) {
      loadCharacters((pageInfo.currentPage || 0) + 1);
    }
  };

  const handleScroll = () => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
        threshold &&
      !loading
    ) {
      loadMoreCharacters();
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className='grid grid-cols-6'>
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
      {loading && <ProductCardSkeleton />}
      {!loading && pageInfo && !pageInfo.hasNextPage && <p>No more characters to load.</p>}
    </div>
  );
};

export default CharactersInfinityScroll;
