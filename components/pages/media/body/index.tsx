import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getMedia } from "@/lib/anilist";
import { notFound } from "next/navigation";
import SummaryTabPage from "./tabs/summary";
import EpisodesTabPage from "./tabs/episodes";
import CharactersTabPage from "./tabs/characters";
import ReviewsTabPage from "./tabs/reviews";
import FranchiseTabPage from "./tabs/franchise";

const MediaBodyPage = async ({
  mediaId
}: {
  mediaId: string
}) => {
  const media = await getMedia(mediaId)
  if (!media) return notFound()

  return ( 
    <Tabs defaultValue="summary">
    <TabsList className="grid w-full grid-cols-5">
      <TabsTrigger value="summary">Summary</TabsTrigger>
      <TabsTrigger value="episodes">Episodes</TabsTrigger>
      <TabsTrigger value="characters">Characters</TabsTrigger>
      <TabsTrigger value="reviews">Reviews</TabsTrigger>
      <TabsTrigger value="franchise">Franchise</TabsTrigger>
    </TabsList>
    <TabsContent value="summary">
      {/* <SummaryTabPage media={media} /> */}
    </TabsContent>
    <TabsContent value="episodes">
      {/* <EpisodesTabPage media={media}/> */}
    </TabsContent>
    <TabsContent value="characters">
      {/* <CharactersTabPage media={media}/> */}
    </TabsContent>
    <TabsContent value="reviews">
      {/* <ReviewsTabPage media={media}/> */}
    </TabsContent>
    <TabsContent value="franchise">
      {/* <FranchiseTabPage media={media}/> */}
    </TabsContent>
  </Tabs>
   );
}
 
export default MediaBodyPage;