import { button } from "@/components/ui/button/button.styles";
import { ButtonProps } from "@/components/ui/button/button.types";
import { useCallback } from "react";
import { ButtonHTMLAttributes } from "react";

export type UseButtonProps = ButtonProps;

export function useButton(props: UseButtonProps) {
  const {
    as = "button",
    type = "button" as ButtonHTMLAttributes<HTMLButtonElement>["type"],
    isLoading,
    className,
    spinner,
    isDisabled,
    color,
    spinnerColor,
    variant,
    size,
    rounded,
    children,
    ...rest
  } = props;

  const buttonClassName = useCallback(() => {
    return button({ variant, size, rounded, color, className });
  }, [variant, size, rounded, color, className]);

  const isAnchor = as === "a";
  const disabled = isLoading || isDisabled;
  const spinnerColorValue = spinnerColor || color;
  
  const commonProps = {
    className: buttonClassName(),
  };
  
  return {
    buttonProps: isAnchor 
      ? { ...commonProps, ...rest } 
      : { ...commonProps, ...rest, type, disabled },
    isAnchor,
    isLoading,
    spinner,
    spinnerColor: spinnerColorValue,
    children,
  };
}
