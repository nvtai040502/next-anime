import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const GenreCard = ({genre}:{genre: string}) => {
  return ( 
    <div className={cn(buttonVariants({variant: "secondary", size: "sm"}))}>
      {genre}
    </div>
   );
}
 
export default GenreCard;