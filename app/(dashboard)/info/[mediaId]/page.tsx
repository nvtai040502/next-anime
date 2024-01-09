import GenreCard from "@/components/cards/genre";
import ReviewCard from "@/components/cards/review";
import EmblaCarousel from "@/components/carousel/_index";
import CharactersCarousel from "@/components/carousel/characters";
import { MediaListBodyCarousel } from "@/components/carousel/media-body";
import { Description } from "@/components/description";
import { Icons } from "@/components/icons";
import BodyInfoPage from "@/components/layout/pages/info-body";
import { Breadcrumbs } from "@/components/pagers/breadcrumbs";
import MediaBodyPage from "@/components/pages/media/body";
import MediaHeroPage from "@/components/pages/media/hero";
import { PaginationButton } from "@/components/pagination-button";
import Ranking from "@/components/ranking";
import { Rating } from "@/components/rating";
import CarouselShell from "@/components/shells/carousel-shell";
import { Shell } from "@/components/shells/shell";
import SortingButton from "@/components/sort-button/media-sort";
import MediaSortButton from "@/components/sort-button/media-sort";
import ReviewSortButton from "@/components/sort-button/review-sort";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import WatchOrReadNowButton from "@/components/watch-read-now";
import { getCharacters, getMedia, getMediaTrend, getFranchise, getReviews } from "@/lib/anilist";
import { MAX_ITEMS_CAROUSEL_BODY, ReviewSorting, defaultReviewSort } from "@/lib/constants";
import { getAnimeInfo, getMangaInfo } from "@/lib/consumet";
import { selectTitleMedia, toTitleCase } from "@/lib/utils";
import { searchParamsSchema } from "@/lib/validations/params";
import Image from "next/image";
import { notFound } from "next/navigation";

interface InfoMediaPageProps {
  params: {
    mediaId: string
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
const InfoMediaPage = async ({
  params,
  searchParams

}:InfoMediaPageProps) => {
  const media = await getMedia(params.mediaId)
  if (!media) return notFound()
  const {sort, page} = searchParamsSchema.parse(searchParams)
  const { sortKey } = ReviewSorting.find((item) => item.slug === sort) || defaultReviewSort;
  const charactersPromise = getCharacters({mediaId: media.id, perPage: MAX_ITEMS_CAROUSEL_BODY, page: 1})
  const franchisePromise = getFranchise({mediaId: media.id})
  const title = selectTitleMedia(media.title)
  const {reviews, pageInfo} = await getReviews({mediaId: media.id, page: Number(page), perPage: 2, sort: [sortKey]})
  return ( 
    <Shell className="pb-12 md:pb-14">
      <Breadcrumbs
        segments={[
          {
            title: "Products",
            href: "/products",
          },
          {
            title: toTitleCase(media.title.english),
            href: `/products?category=${media.id}`,
          },
          {
            title: media.title.english,
            href: `/product/${media.id}`,
          },
        ]}
      />
      <div className="flex flex-col gap-8 md:flex-row md:gap-16 ">
        <div
          aria-label="Product Placeholder"
          role="img"
          aria-roledescription="placeholder"
          className="flex justify-center w-full flex-1 max-h-[500px]"
        >
          <Image src={media.coverImage.extraLarge} alt={title} height={200} width={400} className="object-cover w-full"/>
        </div>

        <Separator className="mt-4 md:hidden" />
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="space-y-2">
            <h2 className="line-clamp-1 text-2xl font-bold">{title}</h2>
            {media.genres.map((genre, i) => (
              <GenreCard genre={genre} key={i}/>
            ))}
            
          </div>
          <Separator className="my-1.5" />
          <p className="text-base text-muted-foreground">
          {title}
          </p>
          <div className="flex items-center justify-between">
            <Rating rating={Math.round(media.averageScore / 20)} />
            
          </div>
          <WatchOrReadNowButton mediaId={String(media.id)} mediaType="ANIME"/>
          <Separator className="mt-5" />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="description"
          >
            <AccordionItem value="description" className="border-none">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                {media.description ??
                  "No description is available for this product."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Separator className="md:hidden" />
        </div>
        
      </div>
      <CarouselShell title="hello" href="/">
        <EmblaCarousel charactersPromise={charactersPromise}/>
      </CarouselShell>
      
      <SortingButton sortType="Review" />
      <div className=" grid grid-cols-2">
        {reviews.map((review, index) => (
          <ReviewCard review={review} key={index}/>
        ))}
      </div>
      <PaginationButton pageInfo={pageInfo} isScroll={false}/>
      <CarouselShell title="hello" href="/">
        <EmblaCarousel mediaListPromise={franchisePromise}/>
      </CarouselShell>
    </Shell>   );
}
 
export default InfoMediaPage;