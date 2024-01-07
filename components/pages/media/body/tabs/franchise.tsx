import { MediaCardBody } from "@/components/cards/media-body";
import { getFranchise } from "@/lib/anilist";
import { Media } from "@/types/anilist";

const FranchiseTabPage = async ({
  media
}: {
  media: Media
}) => {
  const franchise = await getFranchise({mediaId: media.id})
  return (
    <div className="grid grid-cols-4">
      {franchise.map((media) => (
        <MediaCardBody media={media} key={media.id}/>
      ))}
    </div>
  )
}
 
export default FranchiseTabPage;