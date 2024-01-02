import { MAX_ITEMS_CAROUSEL } from "@/lib/constants";
import { getMediaListWithSortTypeList } from "@/lib/fetchers";
import { MediaSort, MediaType } from "@/types/anilist";
import HeroCarousel from "../carousel/hero-carousel";
import { getPage } from "@/lib/anilist";

interface HeroProps {
  mediaType: MediaType, 
  perPage?: number, 
  sort?: MediaSort
}

const Hero = async ({
  mediaType,
  perPage,
  sort
}: HeroProps) => {
  const {media: mediaListTreding} = await getPage({sort: sort || "TRENDING_DESC", type: mediaType, perPage})
  return ( 
    <div>
      <HeroCarousel mediaList={mediaListTreding} />
    </div>
   );
}
 
export default Hero;