"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "./icons"
import { sorting } from "@/lib/constants"
import { cn, createUrl } from "@/lib/utils"
import { AnilistMedia } from "@/types/anilist"
import { getMedia } from "@/lib/anilist"
import { AnimeCard } from "./cards/anime"

interface AnimeListProps {
  animeList: AnilistMedia[]
}

export function AnimeList({
  animeList
}: AnimeListProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = React.useTransition()
  const sort = searchParams.get("sort")

  return (
    <section className="flex flex-col space-y-6">
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-label="Sort products" size="sm" disabled={isPending}>
              Sort
              <Icons.chevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {sorting.map((item, i) => (
              <DropdownMenuItem
                key={i}
                className={cn(item.slug === sort && "bg-accent font-bold")}
                onClick={() => {
                  startTransition(() => {
                    const newSearchParams = new URLSearchParams(searchParams);
                    if (item.slug) {
                      newSearchParams.set('sort', item.slug);
                    } else {
                      newSearchParams.delete('sort');
                    }
                    router.push(createUrl(pathname, newSearchParams));
                  })
                }}
              >
                {item.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {animeList.map((anime, i) => (
          <AnimeCard anime={anime} key={i}/>
        ))}
      </div>

      
     
      
    </section>
  )
}