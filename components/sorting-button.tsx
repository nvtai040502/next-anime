"use client"
import { sorting } from "@/lib/constants";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { cn, createUrl } from "@/lib/utils";

const SortingButton = ({side}: {side?: "top" | "right" | "bottom" | "left"}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const sort = searchParams.get("sort")
  return ( 
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="Sort products" size="sm" disabled={isPending}>
          Sort
          <Icons.chevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48" side={side}>
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
   );
}
 
export default SortingButton;