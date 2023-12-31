import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ReadonlyURLSearchParams } from 'next/navigation';
import { CoverImage, TitleMedia } from "@/types/anilist";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const selectCoverImage = (coverImage: CoverImage) => {
  const selectImage = coverImage.extraLarge || coverImage.large || coverImage.medium
  return selectImage
}

export const selectTitleMedia = (title: TitleMedia) => {
  const selectTitle = title.userPreferred || title.english || title.romaji || title.native
  return selectTitle
}