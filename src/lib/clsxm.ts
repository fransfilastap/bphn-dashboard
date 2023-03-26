import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge tailwindcss classes + clsx */
export default function clsxm(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}
