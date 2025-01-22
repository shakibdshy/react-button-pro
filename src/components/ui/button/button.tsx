"use client";

import Link, { LinkProps } from "next/link";
import Spinner from "@/components/ui/spinner/spinner";
import { useButton, UseButtonProps } from "@/hooks/use-button";
import { ButtonHTMLAttributes, KeyboardEvent, forwardRef, Ref, useState, MouseEvent } from "react";

interface RippleStyle {
  x: number;
  y: number;
  size: number;
  id: number;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, UseButtonProps>(
  (props, ref) => {
    const {
      buttonProps,
      isAnchor,
      isLoading,
      spinner,
      spinnerColor,
      children,
      isDisabled,
      hasRipple,
      rippleColor,
      rippleDuration,
    } = useButton(props);

    const [isPressed, setIsPressed] = useState(false);
    const [ripples, setRipples] = useState<RippleStyle[]>([]);

    const handleKeyDown = (
      e: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => {
      if (!isAnchor && (e.key === " " || e.key === "Enter")) {
        e.preventDefault();
        setIsPressed(true);
        (e.currentTarget as HTMLButtonElement).click();
      }
    };

    const handleKeyUp = () => {
      setIsPressed(false);
    };

    const createRipple = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (!hasRipple || isDisabled) return;

      const element = e.currentTarget;
      const rect = element.getBoundingClientRect();

      // Calculate relative click position
      const x = e.pageX - (rect.left + window.scrollX);
      const y = e.pageY - (rect.top + window.scrollY);

      // Calculate ripple size based on element's largest dimension
      const size = Math.max(element.offsetWidth, element.offsetHeight) * 2;

      const ripple: RippleStyle = {
        x,
        y,
        size,
        id: Date.now(),
      };

      setRipples((prev) => [...prev, ripple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, rippleDuration || 850);
    };

    const handleMouseDown = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      setIsPressed(true);
      createRipple(e);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
    };

    const ariaProps = {
      "aria-disabled": isDisabled,
      "aria-busy": isLoading,
      role: isAnchor ? "button" : undefined,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      tabIndex: isDisabled ? -1 : 0,
    };

    const commonProps = {
      ...ariaProps,
      className: `${buttonProps.className} relative overflow-hidden ${isPressed ? "animate-press" : ""}`,
    };

    const renderRipples = ripples.map((ripple) => (
      <span
        key={ripple.id}
        className="absolute rounded-full block pointer-events-none"
        style={{
          left: ripple.x,
          top: ripple.y,
          width: ripple.size,
          height: ripple.size,
          transform: 'translate(-50%, -50%) scale(0)',
          backgroundColor: rippleColor || 'rgba(255, 255, 255, 0.35)',
          animation: `ripple ${rippleDuration || 850}ms ease-out`,
          opacity: 0.5,
        }}
      />
    ));

    if (isAnchor) {
      return (
        <Link
          {...(buttonProps as LinkProps)}
          {...commonProps}
          ref={ref as Ref<HTMLAnchorElement>}
        >
          {children}
          {renderRipples}
        </Link>
      );
    }

    return (
      <button
        {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement>)}
        {...commonProps}
        ref={ref as Ref<HTMLButtonElement>}
      >
        {isLoading && !spinner && (
          <Spinner label="Loading..." color={spinnerColor} aria-hidden="true" />
        )}
        {spinner && spinner}
        {isLoading ? <span className="sr-only">{children}</span> : children}
        {renderRipples}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
