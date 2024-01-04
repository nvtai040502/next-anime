import { Rating } from "@/components/rating";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { selectTitleMedia } from "@/lib/utils";
import { Media } from "@/types/anilist";
import Image from "next/image";
import Link from "next/link";

const HeroInfoPage = ({media}: {media: Media}) => {
  const title = selectTitleMedia(media.title)
  return ( 
    <div className="relative w-full h-60">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={media.bannerImage}
          alt={title}
          layout="fill"
          className="object-cover opacity-40"
        />
      </div>
      
      <div className="absolute inset-0 flex justify-center w-full h-full">
        <div className="w-96 relative h-full">
          <Image
            src={media.bannerImage}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
    
   );
}
 
export default HeroInfoPage;