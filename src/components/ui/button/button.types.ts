import { VariantProps } from "tailwind-variants";
import { button } from "./button.styles";

export type ButtonVariants = VariantProps<typeof button>;

export interface AriaButtonProps {
  /**
   * Provides an accessible label for the button
   */
  "aria-label"?: string;
  /**
   * Associates the button with a description for screen readers
   */
  "aria-describedby"?: string;
  /**
   * Indicates if the button is pressed (for toggle buttons)
   */
  "aria-pressed"?: boolean;
  /**
   * Indicates if the button controls an expandable element
   */
  "aria-expanded"?: boolean;
  /**
   * References the ID of the element controlled by the button
   */
  "aria-controls"?: string;
  /**
   * Indicates if the button triggers a popup element
   */
  "aria-haspopup"?: boolean | "menu" | "dialog" | "listbox" | "tree" | "grid";
}

export interface CommonProps extends ButtonVariants, AriaButtonProps {
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