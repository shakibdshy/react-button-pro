"use client";

import Link, { LinkProps } from "next/link";
import Spinner from "@/components/ui/spinner/spinner";
import { useButton, UseButtonProps } from "@/hooks/use-button";
import { ButtonHTMLAttributes, KeyboardEvent, forwardRef, Ref } from "react";

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  UseButtonProps
>((props, ref) => {
  const {
    buttonProps,
    isAnchor,
    isLoading,
    spinner,
    spinnerColor,
    children,
    isDisabled,
  } = useButton(props);

  // Handle keyboard interactions
  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    // Handle Space and Enter keys for buttons
    if (!isAnchor && (e.key === " " || e.key === "Enter")) {
      e.preventDefault();
      (e.currentTarget as HTMLButtonElement).click();
    }
  };

  // Common ARIA attributes
  const ariaProps = {
    "aria-disabled": isDisabled,
    "aria-busy": isLoading,
    role: isAnchor ? "button" : undefined,
    onKeyDown: handleKeyDown,
    tabIndex: isDisabled ? -1 : 0,
  };

  if (isAnchor) {
    return (
      <Link
        {...(buttonProps as LinkProps)}
        {...ariaProps}
        ref={ref as Ref<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement>)}
      {...ariaProps}
      ref={ref as Ref<HTMLButtonElement>}
    >
      {isLoading && !spinner && (
        <Spinner label="Loading..." color={spinnerColor} aria-hidden="true" />
      )}
      {spinner && spinner}
      {isLoading ? <span className="sr-only">{children}</span> : children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
