import { tv } from "tailwind-variants";

export const buttonGroup = tv({
  base: "relative inline-flex align-middle [&>*:not(:last-child)]:rounded-e-none [&>*:not(:last-child)]:border-e-0 [&>*:not(:first-child)]:rounded-s-none",
  variants: {
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full",
      none: "rounded-none",
    },
  },
  defaultVariants: {
    rounded: "lg",
  },
}); 