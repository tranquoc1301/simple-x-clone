import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | Record<string, boolean>)[]): string {
  return twMerge(clsx(inputs));
}
