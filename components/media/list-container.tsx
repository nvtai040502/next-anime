import { cn } from "@/lib/utils";
import { AnilistMedia, MediaList } from "@/types/anilist";
import MediaCarousel from "../carousel/media-carousel";
import MediaCarouselItems from "../carousel/media-carousel/items";

const MediaListContainer = ({items}:{items: MediaList[]}) => {
  return ( 
    <div className="w-full space-y-5 sm:space-y-10 -mt-44 relative z-20">
      {items.map((item, i) => (
        <MediaCarousel
          key={i}
          items={item.media}
          title={item.title}
          link="/"
        />
      ))}
    </div>
   );
}
 
export default MediaListContainer;