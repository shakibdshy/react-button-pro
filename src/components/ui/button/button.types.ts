import { VariantProps } from "tailwind-variants";
import { button } from "./button.styles";

export type ButtonVariants = VariantProps<typeof button>;

export interface RippleOptions {
  hasRipple?: boolean;
  rippleColor?: string;
  rippleDuration?: number;
}

export interface AriaButtonProps {
  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-pressed"?: boolean;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
  "aria-haspopup"?: boolean | "menu" | "dialog" | "listbox" | "tree" | "grid";
}

export interface CommonProps extends ButtonVariants, AriaButtonProps, RippleOptions {
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
type OmitCommonProps = Omit<CommonProps, "children" | keyof AriaButtonProps>;

// Exclude 'color' from AnchorHTMLAttributes before extending
type AnchorPropsWithoutColor = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>;

export interface ButtonAsAnchorProps extends AnchorPropsWithoutColor, OmitCommonProps {
  as: "a";
  href: string;
}

// Combine the two interfaces into a union type
export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps; 