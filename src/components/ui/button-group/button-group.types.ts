import { VariantProps } from "tailwind-variants";
import { buttonGroup } from "./button-group.styles";

export type ButtonGroupVariants = VariantProps<typeof buttonGroup>;

export interface ButtonGroupAriaProps {
  /**
   * Provides an accessible label for the button group
   */
  "aria-label"?: string;
  /**
   * Indicates the orientation of the button group
   */
  "aria-orientation"?: "horizontal" | "vertical";
  /**
   * The role of the button group
   */
  role?: "group" | "toolbar";
}

export interface ButtonGroupProps extends ButtonGroupVariants, ButtonGroupAriaProps {
  className?: string;
  children: React.ReactNode;
} 