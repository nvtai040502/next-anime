import { MediaListGrid } from "@/components/grid/media-list-grid";
import { PaginationButton } from "@/components/pagination-button";
import { ProductCardSkeleton } from "@/components/skeletons/hero";
import { getPage } from "@/lib/anilist";

import { FIRST_PAGE, MAX_ITEMS_PER_PAGE, defaultSort, sorting } from "@/lib/constants";
import { searchParamsSchema } from "@/lib/validations/params";
import { MediaSort, MediaType } from "@/types/anilist";
import { Suspense } from "react";
interface BodyMediaPageProps {
  sort: MediaSort
  mediaType: MediaType
  page?: number
}
const BodyMediaPage = async ({sort, page, mediaType}:BodyMediaPageProps) => {
  const { media: mediaList, pageInfo } = await getPage({
    page: page || FIRST_PAGE,
    sort,
    perPage:MAX_ITEMS_PER_PAGE,
    type: mediaType
  })
  return ( 
    <div>
      <MediaListGrid 
          mediaList={mediaList}
      />
      <PaginationButton 
        pageInfo={pageInfo}
      />
    
    </div>

   );
}
 
export default BodyMediaPage;