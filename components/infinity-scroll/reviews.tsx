"use client"
import { useState, useEffect } from 'react';
import { CharacterCard } from '@/components/cards/character';
import { getCharacters, getReviews } from '@/lib/anilist';
import { Media, PageInfo, Character, Review, ReviewSortKey } from '@/types/anilist';
import { ProductCardSkeleton } from '@/components/skeletons/hero';
import ReviewCard from '../cards/review';

const ReviewsInfinityScroll = ({ 
  mediaId, 
  threshold, 
  perPage,
  sort
}: { 
  mediaId: string, 
  perPage: number 
  threshold: number
  sort: ReviewSortKey[]
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadReviews = async (page: number, newSort: ReviewSortKey[]) => {
    setLoading(true);
    const { pageInfo: newPageInfo, reviews: newReviews } = await getReviews({
      mediaId,
      page,
      perPage: perPage,
      sort: newSort
    });

    setReviews((prevReviews) => [...prevReviews, ...newReviews]);
    setPageInfo(newPageInfo);
    setLoading(false);
  };

  useEffect(() => {
    setReviews([])
    loadReviews(1, sort);
  }, [sort]);

  const loadMoreCharacters = () => {
    if (pageInfo?.hasNextPage && !loading) {
      loadReviews((pageInfo.currentPage || 0) + 1, sort);
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
      {sort}
      {reviews.map((review) => (
        <ReviewCard review={review} key={review.id} />
      ))}
      {loading && <ProductCardSkeleton />}
      {!loading && pageInfo && !pageInfo.hasNextPage && <p>No more characters to load.</p>}
    </div>
  );
};

export default ReviewsInfinityScroll;
