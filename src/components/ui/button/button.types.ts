import { VariantProps } from "tailwind-variants";
import { button } from "./button.styles";

export type ButtonVariants = VariantProps<typeof button>;

export interface CommonProps extends ButtonVariants {
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  spinner?: React.ReactNode;
  children: React.ReactNode;
  spinnerColor?:
    | "primary"
    | "secondary"
    | "info"
    | "neutral"
    | "error"
    | "warning"
    | "success"
    | "white";
}

// Define props specific to when 'as' is 'button'
export interface ButtonAsButtonProps extends CommonProps {
  as?: "button";
  type?: "button" | "submit" | "reset";
}

// Define props specific to when 'as' is 'a'
type OmitCommonProps = Omit<CommonProps, "children">;

// Exclude 'color' from AnchorHTMLAttributes before extending
type AnchorPropsWithoutColor = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>;

export interface ButtonAsAnchorProps extends AnchorPropsWithoutColor, OmitCommonProps {
  as: "a";
  href: string;
}

// Combine the two interfaces into a union type
export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps; 