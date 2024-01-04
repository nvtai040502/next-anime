import WatchOrReadNowButton from "@/components/watch-read-now";
import { getMedia, getMediaTrend, getRelatedMedia } from "@/lib/anilist";
import { getAnimeInfo, getMangaInfo } from "@/lib/consumet";
import { notFound } from "next/navigation";

interface InfoMediaPageProps {
  params: {
    mediaId: string
  }
}
const InfoMediaPage = async ({
  params,

}:InfoMediaPageProps) => {
  const media = await getMedia(params.mediaId)
  if (!media) return notFound()
  const mediaRelated = await getRelatedMedia(media.id)

  

  return ( 
    <div
    >
      
    <WatchOrReadNowButton mediaId={String(media.id)} mediaType={media.type}/>
    {/* <HeroInfoPage media={media}/>
    <BodyInfoPage media={media}/>
    <MediaListBodyCarousel mediaList={mediaRelated} title="You may also like"/> */}
    

    </div>
   );
}
 
export default InfoMediaPage;