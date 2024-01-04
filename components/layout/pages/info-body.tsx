import EpisodeCard from "@/components/cards/episode";
import GenreCard from "@/components/cards/genre";
import { Rating } from "@/components/rating";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import WatchOrReadNowButton from "@/components/watch-read-now";
import { getEpisodes } from "@/lib/anify";
import { selectTitleMedia } from "@/lib/utils";
import { Media } from "@/types/anilist";

const BodyInfoPage = async ({media}:{media: Media}) => {
  const title = selectTitleMedia(media.title)
  
  
  return ( 
    <div className="flex w-full flex-col gap-4 container ">
      
      <WatchOrReadNowButton mediaId={media.id} mediaType={media.type}/>
      <div className="space-y-2">
        <h2 className="line-clamp-1 text-2xl font-bold">{title}</h2>
        {media.genres.map((item, i) => (
          <GenreCard genre={item} key={i} />
        ))}
      </div>
      {/* <Separator className="my-1.5" /> */}
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>
          <Rating averageScore={media.averageScore} />
        </div>
        <Separator orientation="vertical"/>
        <div>
          <Rating averageScore={media.averageScore} />
        </div>
        <Separator orientation="vertical"/>
        <div>
          <Rating averageScore={media.averageScore} />
        </div>
      </div>
      {/* <Separator className="mt-5" /> */}
      
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="description"
      >
        <AccordionItem value="description" className="border-none">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent>
          <p dangerouslySetInnerHTML={{ __html: media.description }} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* <Separator className="md:hidden" /> */}
        </div>
   );
}
 
export default BodyInfoPage;