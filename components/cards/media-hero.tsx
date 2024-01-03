import { cn, selectCoverImage, selectTitleMedia } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { Media } from "@/types/anilist";

const MediaHeroCard = ({item}: {item: Media}) => {
  const image = selectCoverImage(item.coverImage)
  const title = selectTitleMedia(item.title)
  return ( 
    <section className="flex justify-center items-center h-screen">
        <div className="container w-full max-w-screen-2xl">
          <div className="absolute inset-0 -z-10 h-full w-full">
            <div
              className={cn(
                "bg-black/60 bg-gradient-to-b from-neutral-900/10 to-neutral-900",
                "absolute inset-0 z-10 h-full w-full"
              )}
            />
            <Image
              src={image}
              alt={title}
              className="h-auto w-full object-cover"
              fill
            />
          </div>
          <div className="grid max-w-lg space-y-2">
            <h1 className="text-3xl font-bold md:text-4xl">
              {title} 
            </h1>
            {/* <div className="flex space-x-2 text-xs font-semibold md:text-sm">
              <p className="text-green-600">
                {randomShow?.vote_average * 10 ?? "-"}% Match
                -% Match
              </p>
              <p className="text-gray-300">{randomShow?.release_date ?? "-"}</p>
            </div> */}
            <p className="line-clamp-4 text-sm text-gray-300 md:text-base"
              dangerouslySetInnerHTML={{ __html: item.description }}
            >
            </p>
            <div className="flex items-center space-x-2 pt-1.5">
              <Button
                aria-label="Play video"
                className="h-auto gap-1.5 rounded"
                
              >
                <Icons.play
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                />
                Play
              </Button>
              <Button
                aria-label="Open show's details modal"
                variant="outline"
                className="h-auto gap-2 rounded"
                
              >
                <Icons.add className="h-5 w-5" aria-hidden="true" />
                More Info
              </Button>
            </div>
          </div>
        </div>
    </section>
   );
}
 
export default MediaHeroCard;