import { cx } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/types";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs));
}
