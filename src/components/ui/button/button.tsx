"use client";

import Link, { LinkProps } from "next/link";
import Spinner from "@/components/ui/spinner/spinner";
import { useButton, UseButtonProps } from "@/hooks/use-button";
import { ButtonHTMLAttributes } from "react";

export default function Button(props: UseButtonProps) {
  const {
    buttonProps,
    isAnchor,
    isLoading,
    spinner,
    spinnerColor,
    children,
  } = useButton(props);

  if (isAnchor) {
    return (
      <Link {...buttonProps as LinkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button {...buttonProps as ButtonHTMLAttributes<HTMLButtonElement>}>
      {isLoading && !spinner && (
        <Spinner label="Loading..." color={spinnerColor} />
      )}
      {spinner && spinner}
      {children}
    </button>
  );
} 