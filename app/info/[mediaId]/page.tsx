import GenreCard from "@/components/cards/genre";
import CharactersCarousel from "@/components/carousel/characters";
import MediaListBodyCarousel from "@/components/carousel/media-list/body";
import { Description } from "@/components/description";
import MediaBodyPage from "@/components/pages/media/body";
import MediaHeroPage from "@/components/pages/media/hero";
import Ranking from "@/components/ranking";
import { Separator } from "@/components/ui/separator";
import WatchOrReadNowButton from "@/components/watch-read-now";
import { getCharacters, getMedia, getMediaTrend, getFranchise } from "@/lib/anilist";
import { getAnimeInfo, getMangaInfo } from "@/lib/consumet";
import Image from "next/image";
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
  if (!media) return notFound()
  return ( 
    <>
  <MediaHeroPage />
  <MediaBodyPage mediaId={params.mediaId}/>
    </>
   );
}
 
export default InfoMediaPage;