"use client"
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ReviewSorting } from "@/lib/constants";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSubContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { type ReviewSortKey } from "@/types/anilist";
import { Button } from "../ui/button";
import { Icons } from "../icons";

interface ReviewSortButtonProps {
  side?: "top" | "right" | "bottom" | "left";
  setCurrentSortKey: (sortKey: ReviewSortKey) => void;
  currenSortKey: ReviewSortKey
}

const ReviewSortButton = ({ side, currenSortKey, setCurrentSortKey }: ReviewSortButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="Sort" size="sm">
          Sort
          <Icons.chevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48" side={side}>
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {ReviewSorting.map((item, i) => (
          <DropdownMenuItem
            key={i}
            className={cn(item.sortKey === currenSortKey && "bg-accent font-bold")}
            onClick={() => {
              setCurrentSortKey(item.sortKey);
            }}
          >
            {item.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ReviewSortButton;