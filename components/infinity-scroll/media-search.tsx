"use client"
import { useState, useEffect, useCallback } from 'react';
import { getMediaSearch } from '@/lib/anilist';
import { Media, PageInfo } from '@/types/anilist';
import { ProductCardSkeleton } from '@/components/skeletons/hero';
import { useDebounce } from '@/hooks/use-debounce';
import { MediaCardBody } from '../cards/media-body';
import { Input } from '../ui/input';

const MediaSearchInfinityScroll = ({ 
  threshold, 
  perPage 
}: { 
  perPage: number 
  threshold: number
}) => {
  const [mediaSearch, setMediaSearch] = useState<Media[]>([]);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadMediaSearch = async (page: number, queryValue: string) => {
    console.log(page, loading)
    setLoading(true);
    try {
      const { pageInfo: newPageInfo, media: newMediaSearch } = await getMediaSearch({
        query: queryValue,
        type: "ANIME",
        sort: "TRENDING_DESC",
        page,
        perPage: 5,
      });

      setMediaSearch((prevMediaSearch) => [...prevMediaSearch, ...newMediaSearch]);
      setPageInfo(newPageInfo);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMediaSearch([]);
    setPageInfo(null); 
    loadMediaSearch(1, debouncedQuery);
  }, [debouncedQuery]);

  const loadMoreCharacters = () => {
    if (pageInfo?.hasNextPage && !loading) {
      loadMediaSearch((pageInfo.currentPage) + 1, debouncedQuery); 
    }
  };

  const handleScroll = () => {
    if (
      (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) <
          threshold) && !loading
    ) {
      loadMoreCharacters();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll])

  return (
    <>
      <Input
        placeholder="Type a command or search..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      { debouncedQuery && (
        <div className='grid grid-cols-6'>
          {mediaSearch.map((media, i) => (
            <MediaCardBody media={media} key={i}/>
          ))}
          {loading && <ProductCardSkeleton />}
          {!loading && pageInfo && !pageInfo.hasNextPage && <p>No more characters to load.</p>}
        </div>
      )}
    </>
  );
};

export default MediaSearchInfinityScroll;
