import { button } from "@/components/ui/button/button.styles";
import { ButtonProps } from "@/components/ui/button/button.types";
import { useCallback } from "react";
import { ButtonHTMLAttributes } from "react";
import cn from "@/lib/utils";

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
    hasRipple = true,
    rippleColor,
    rippleDuration,
    ...rest
  } = props;

  const buttonClassName = useCallback(() => {
    return cn(button({ variant, size, rounded, color }), className);
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
    isDisabled,
    spinner,
    spinnerColor: spinnerColorValue,
    children,
    hasRipple,
    rippleColor,
    rippleDuration,
  };
}
