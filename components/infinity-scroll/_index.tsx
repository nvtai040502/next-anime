import { InfinityScrollType } from "@/types";
import CharactersInfinityScroll from "./characters";
import ReviewsInfinityScroll from "./reviews";
import { MAX_ITEMS_INFINITY_SCROLL, THRESHOLD_INFINITY_SCROLL } from "@/lib/constants";
import { ReviewSortKey } from "@/types/anilist";

const InfinityScroll = ({
  threshold=THRESHOLD_INFINITY_SCROLL,
  mediaId,
  perPage=MAX_ITEMS_INFINITY_SCROLL,
  reviewSort,
  type
}: {
  threshold?: number
  mediaId: string
  perPage?: number
  reviewSort?: ReviewSortKey[]
  type: InfinityScrollType
}) => {
  if (type === "Characters") {
    return <CharactersInfinityScroll threshold={threshold} perPage={perPage} mediaId={mediaId} />;
  } else if (type === "Reviews") {
    
    if (!reviewSort) {
      console.log("In Infinity Scroll Reviews, review sort is needed")
      return null
    }

    return <ReviewsInfinityScroll threshold={threshold} perPage={perPage} mediaId={mediaId} sort={reviewSort} />;
  }
  return null;
};
 
export default InfinityScroll;
