import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AnifyEpisode } from "@/types/anify";
import { AspectRatio } from "../ui/aspect-ratio";
import { AnilistEpisode } from "@/types/anilist";
import Image from "next/image";

const EpisodeCard = ({episode}: {episode: AnilistEpisode}) => {
  return ( 
    <Card>
      <Link href={`/watch/${episode.site}`}>
        <CardHeader className="p-0">
          <AspectRatio ratio={4 / 3}>
              <Image
                src={episode.thumbnail}
                alt={episode.title}
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
              />
          
          </AspectRatio>
        </CardHeader>
        <span className="sr-only">{episode.title}</span>
        <CardContent className="space-y-1.5 p-4 ">
          <CardTitle className="line-clamp-1">{episode.title}</CardTitle>


        </CardContent>
      </Link>
      
    </Card>
   );
}
 
export default EpisodeCard;