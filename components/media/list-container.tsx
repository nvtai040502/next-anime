import { cn } from "@/lib/utils";
import MediaCarousel from "../carousel/media-carousel";
import MediaCarouselItems from "../carousel/media-carousel/items";
import { MediaListWithSortType } from "@/types";

const MediaListContainer = ({items}:{items: MediaListWithSortType[]}) => {
  return ( 
    <div className="w-full space-y-5 sm:space-y-10 -mt-44 relative z-20">
      {items.map((item, i) => (
        <MediaCarousel
          key={i}
          items={item.mediaList}
          title={item.title}
          link="/"
        />
      ))}
    </div>
   );
}
 
export default MediaListContainer;