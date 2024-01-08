"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Skeleton } from "@/components/ui/skeleton"
import { useDebounce } from "@/hooks/use-debounce"
import MediaSearchInfinityScroll from "./infinity-scroll/media-search"
import { Input } from "./ui/input"

export function Search() {
  const router = useRouter()

  const [query, setQuery] = React.useState("")
  const debouncedQuery = useDebounce(query, 300)
  const [isPending, setIsPending] = React.useState(false)

  // useEffect to trigger search on debouncedQuery change
  React.useEffect(() => {
    if (debouncedQuery) {
      setIsPending(true)
      fetchFunction(debouncedQuery)
        .then((data) => {
          setIsPending(false)
        })
        .catch((error) => {
          setIsPending(false)
          console.error("Error fetching data:", error)
        })
    }
  }, [debouncedQuery])

  const fetchFunction = async (query: string) => {
    await MediaSearchInfinityScroll({
      query,
      perPage: 6,
      threshold: 100,
      type: "ANIME"
    })
  }

 

  // Render the UI components
  return (
    <>
      {/* Assuming the Input component uses onChange */}
      <Input 
        placeholder="Type a command or search..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        isPending ? (
          <div className="space-y-1 overflow-hidden px-1 py-2">
          <Skeleton className="h-4 w-10 rounded" />
          <Skeleton className="h-8 rounded-sm" />
          <Skeleton className="h-8 rounded-sm" />
        </div>
        ) : (
          <MediaSearchInfinityScroll 
            query={debouncedQuery}
            perPage={2}
            threshold={100}
            type="ANIME"
          />
        )

      )}
    </>
  )
}