import { VariantProps } from "tailwind-variants";
import { buttonGroup } from "./button-group.styles";

export type ButtonGroupVariants = VariantProps<typeof buttonGroup>;

export interface ButtonGroupProps extends ButtonGroupVariants {
  className?: string;
  children: React.ReactNode;
} 