"use client"
import InfinityScroll from "@/components/infinity-scroll/_index";
import ReviewSortButton from "@/components/sort-button/review-sort";
import { getReviews } from "@/lib/anilist";
import { ReviewSorting } from "@/lib/constants";
import { Media, ReviewSortKey } from "@/types/anilist";
import { useState } from "react";

const ReviewsTabPage = ({
  media
}: {
  media: Media
}) => {
  const [currentSortKey, setCurrentSortKey] = useState<ReviewSortKey>(ReviewSorting[0].sortKey)
  return (
    <div>
      {currentSortKey}
      <ReviewSortButton currenSortKey={currentSortKey} setCurrentSortKey={setCurrentSortKey}/>
      <InfinityScroll mediaId={String(media.id)} type="Reviews" reviewSort={[currentSortKey]} />
    </div>
  )
}
 
export default ReviewsTabPage;