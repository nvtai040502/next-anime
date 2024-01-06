import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import SortingButton from "@/components/sorts/review-sort";
import { defaultSort, sorting } from "@/lib/constants";
import { MediaSort } from "@/types/anilist";

const HeroMediaPage = ({sortKey}: {sortKey: MediaSort}) => {
  const {title, description} = sorting.find((item) => item.sortKey === sortKey) || defaultSort
  return ( 
    <div className=" ">
     
        <PageHeaderHeading>{title}</PageHeaderHeading>
        {description && (<PageHeaderDescription>{description}</PageHeaderDescription>)}
        <PageHeaderDescription><SortingButton side="bottom"/></PageHeaderDescription>
      
    </div>
   );
}
 
export default HeroMediaPage;