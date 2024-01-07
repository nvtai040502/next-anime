import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AnifyEpisode } from "@/types/anify";
import { AspectRatio } from "../ui/aspect-ratio";
import { AnilistEpisode } from "@/types/anilist";
import Image from "next/image";
import { EpisodeForPreview } from "@/types/consumet";
import { selectTitleMedia } from "@/lib/utils";

const EpisodeCard = ({episode}: {episode: EpisodeForPreview}) => {
  const title = selectTitleMedia(episode.title)
  return ( 
    <Card>
      <Link href={`/watch/${episode.id}`}>
        <CardHeader className="p-0">
          <AspectRatio ratio={4 / 3}>
              <Image
                src={episode.image}
                alt={title}
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
              />
          
          </AspectRatio>
        </CardHeader>
        <span className="sr-only">{title}</span>
        <CardContent className="space-y-1.5 p-4 ">
          <CardTitle className="line-clamp-1">{title}</CardTitle>


        </CardContent>
      </Link>
      
    </Card>
   );
}
 
export default EpisodeCard;