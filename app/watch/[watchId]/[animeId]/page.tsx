import RenderVideoSources from "@/components/render-video";
import { getEpisodes, getSources } from "@/lib/anify";
import { getAnimeInfo, getAnimeStreamingLink } from "@/lib/consumet";

interface WatchAnimePageProps {
  params: {
    watchId: string,
    animeId: string 
  }
}
const WatchAnimePage = async ({
  params
}: WatchAnimePageProps) => {
  
  const animeStreamingLink  = await getAnimeStreamingLink({watchId: params.watchId})
  const source = animeStreamingLink?.sources.find((item) => item.quality === "720p")
  return ( 
    <div>
        <RenderVideoSources
          sources={animeStreamingLink!.sources}
          option={{
              url:source?.url!
          }}
          style={{
              width: '600px',
              height: '400px',
              margin: '60px auto 0',
          }}
        />
    </div>
   );
}
 
export default WatchAnimePage;