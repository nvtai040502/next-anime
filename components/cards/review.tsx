import { MediaReview } from "@/types/anilist";

const ReviewCard = ({review}:{review: MediaReview}) => {
  return ( 
    <div>
      {review.summary}
    </div>
   );
}
 
export default ReviewCard;