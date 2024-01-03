"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { cn, createUrl } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MediaSort, MediaType, PageInfo } from "@/types/anilist"
import { Icons } from "./icons"
import { FIRST_PAGE, NEAREST_PAGES } from "@/lib/constants"
import { useEffect, useState, useTransition } from "react"
import { getPage } from "@/lib/anilist"
import { ProductCardSkeleton } from "./skeletons/hero"

interface PaginationButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  pageInfo: PageInfo
  nearest_pages?: number
}
function getNearestPages (currentPage: number, count: number, totalPage: number): number[] {
  const nearestPages: number[] = [];
  const delta = Math.floor(count / 2);

  // Calculate the nearest pages to the current page
  for (let i = currentPage - delta; i <= currentPage + delta; i++) {
    if (i > 0 && i <= totalPage) {
      nearestPages.push(i);
    }
  }

  return nearestPages;
};

export function PaginationButton({
  pageInfo,
  nearest_pages=NEAREST_PAGES,
  className,
  ...props
}: PaginationButtonProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const searchParams = useSearchParams()

  const totalPage = pageInfo.lastPage - 1
  const hasPreviousPage = pageInfo.currentPage !== FIRST_PAGE

  

  const handlePagination = (newPage: number) => {
    startTransition(() => {
      const newSearchParams = new URLSearchParams(searchParams);
      if (newPage !== FIRST_PAGE) {
        newSearchParams.set("page", `${newPage}`);
      } else {
        newSearchParams.delete("page");
      }
      router.push(createUrl(pathname, newSearchParams));
    });
  };

  // Get the nearest three pages around the current page
  const nearestPages = getNearestPages(pageInfo.currentPage, nearest_pages, totalPage);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2",
        className
      )}
      {...props}
    >
      <Button
        aria-label="Go to first page"
        variant="outline"
        size="icon"
        className="hidden h-8 w-8 lg:flex"
        onClick={() => handlePagination(FIRST_PAGE)}
        disabled={!hasPreviousPage || isPending}
      >
        <Icons.chevronFirst className="h-4 w-4" aria-hidden="true" />
      </Button>
      <Button
        aria-label="Go to previous page"
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => handlePagination(pageInfo.currentPage - 1)}
        disabled={!hasPreviousPage || isPending}
      >
        <Icons.chevronLeft className="h-4 w-4" aria-hidden="true" />
      </Button>
      {nearestPages.map((pageNumber, i) => (
        <Button
          aria-label={`Page ${pageNumber}`}
          key={i}
          variant={pageInfo.currentPage === pageNumber ? "default" : "outline"}
          size="icon"
          className="h-8 w-8"
          onClick={() => handlePagination(pageNumber)}
          disabled={isPending}
        >
          {pageNumber}
        </Button>
      ))}
      <Button
        aria-label="Go to next page"
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => {
          startTransition(() => {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set("page", `${pageInfo.currentPage + 1}`)
            router.push(createUrl(pathname, newSearchParams));
          })
        }}
        disabled={!pageInfo.hasNextPage || isPending}
      >
        <Icons.chevronRight className="h-4 w-4" aria-hidden="true" />
      </Button>
      <Button
        aria-label="Go to last page"
        variant="outline"
        size="icon"
        className="hidden h-8 w-8 lg:flex"
        onClick={() => handlePagination(totalPage)}
        disabled={!pageInfo.hasNextPage || isPending}
      >
        <Icons.chevronLast className="h-4 w-4" aria-hidden="true" />
      </Button>
    </div>
  )
}