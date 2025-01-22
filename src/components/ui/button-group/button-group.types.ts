import { VariantProps } from "tailwind-variants";
import { buttonGroup } from "./button-group.styles";

export type ButtonGroupVariants = VariantProps<typeof buttonGroup>;

export interface ButtonGroupAriaProps {
  "aria-label"?: string;
  "aria-orientation"?: "horizontal" | "vertical";
  role?: "group" | "toolbar";
}

export interface ButtonGroupProps extends ButtonGroupVariants, ButtonGroupAriaProps {
  className?: string;
  children: React.ReactNode;
} 