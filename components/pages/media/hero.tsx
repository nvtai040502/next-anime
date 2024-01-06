import { NavigationMenuDemo } from "@/components/nava";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getMedia } from "@/lib/anilist";
import Image from "next/image";
import { notFound } from "next/navigation";

const MediaHeroPage = async () => {
  const media = await getMedia("21087")
  if (!media) return notFound()
  return ( 
    <div className="w-full ">
      {/* Banner Image */}
      <div className="relative h-[400px] mb-0 w-full">
        <Image
          src={media.bannerImage}
          alt=""
          fill
          className="object-cover relative"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
    

      {/* User Thinking */}
      {/* <div className="">
        
        <div className="absolute w-full z-[var(--zIndex--cover-user-info)] ">
          <div className="float-left h-100px relative z-[var(--zIndex--profile-primary-info)] md:px-20 lg:w-full lg:float-none lg:mb-15">
            <div className="text-white text-sm float-left ml-6 relative top-1/2 transform -translate-y-1/2">
              helllllllllllllllo
            </div>
          </div>
        </div>
      
    </div> */}

    {/* Navigation */}
    
<NavigationMenuDemo />
    </div>
   );
}
 
export default MediaHeroPage;