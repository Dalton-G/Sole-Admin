import { type ClassValue, clsx } from "clsx"
import { Table } from "lucide-react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatter = new Intl.NumberFormat("en-MY", {
  style: "currency",
  currency: "MYR",
})