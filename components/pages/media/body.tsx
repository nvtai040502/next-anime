"use client"
import { getFewReviewsMedia } from "@/lib/anilist";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ReviewSorting } from "@/lib/constants";
import { MediaReview, type ReviewSort } from "@/types/anilist";
import ReviewCard from "@/components/cards/review";
import ReviewSortButton from "@/components/sort-button/review-sort";

const MediaBodyPage = ({
  mediaId,
}: {
  mediaId: number;
}) => {
  const [currentSortKey, setCurrentSortKey] = useState<ReviewSort>(ReviewSorting[0].sortKey);
  const [data, setdata] = useState<MediaReview[]>();

  useEffect(() => {
    async function fetchData() {
      try {
        const fewReviews = await getFewReviewsMedia({mediaId: mediaId, sort: [currentSortKey]});
        if (fewReviews) {
          setdata(fewReviews);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }

    fetchData(); 
  }, [currentSortKey, mediaId]); 

  return (
    <>
      <ReviewSortButton currenSortKey={currentSortKey} setCurrentSortKey={setCurrentSortKey}/>
      
      <div>
        {data?.map((review)=>(
          <ReviewCard key={review.id} review={review}/>
        ))}
      </div>
    </>
  );
};

export default MediaBodyPage;
