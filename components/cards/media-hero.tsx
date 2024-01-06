import { cn, selectCoverImage, selectTitleMedia } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { Media } from "@/types/anilist";
import Link from "next/link";
import { getEpisodes } from "@/lib/anify";
import WatchOrReadNowButton from "../watch-read-now";

const MediaHeroCard = ({item}: {item: Media}) => {
  const title = selectTitleMedia(item.title)
  
  return ( 
    <section aria-label="Hero Card" className="w-full">
      <div className="container w-full max-w-screen-2xl">
        <div className="absolute inset-0 -z-10 h-screen w-full">
          <div
            className={cn(
              "bg-black/60 bg-gradient-to-b from-neutral-900/10 to-neutral-900",
              "absolute inset-0 z-10 h-full w-full"
            )}
          />
          <Image
            src={item.bannerImage}
            alt={title}
            className="w-full object-cover"
            fill
            priority
          />
        </div>
        <div className="grid max-w-lg space-y-2 pt-24 ">
          <h1 className="text-3xl font-bold md:text-4xl">
            {title}
          </h1>
          
          <p className="line-clamp-4 text-sm text-gray-300 md:text-base" dangerouslySetInnerHTML={{ __html: item.description }}></p>

          <div className="flex items-center space-x-2 pt-1.5">
            <WatchOrReadNowButton mediaId={String(item.id)} mediaType={item.type}/>
            <Link href={`/info/${item.id}`}>
            <Button
              aria-label="Open show's details modal"
              variant="outline"
              className="h-auto gap-2 rounded"
              
            >
              <Icons.info className="h-5 w-5" aria-hidden="true" />
              More Info
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default MediaHeroCard;