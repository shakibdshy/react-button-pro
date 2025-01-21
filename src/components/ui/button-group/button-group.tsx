"use client";

import { useButtonGroup, UseButtonGroupProps } from "@/hooks/use-button-group";
import { KeyboardEvent, useRef, Children, isValidElement, cloneElement, ReactElement, RefAttributes } from "react";
import Button from "../button/button";
import { UseButtonProps } from "@/hooks/use-button";

export default function ButtonGroup(props: UseButtonGroupProps) {
  const { groupProps, children } = useButtonGroup(props);
  const buttonsRef = useRef<(HTMLButtonElement | HTMLAnchorElement)[]>([]);

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const buttons = buttonsRef.current.filter(button => !button.hasAttribute('disabled'));
    const currentIndex = buttons.indexOf(document.activeElement as HTMLButtonElement);
    
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        nextIndex = currentIndex + 1 >= buttons.length ? 0 : currentIndex + 1;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        nextIndex = currentIndex - 1 < 0 ? buttons.length - 1 : currentIndex - 1;
        break;
      case 'Home':
        e.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        nextIndex = buttons.length - 1;
        break;
    }

    buttons[nextIndex]?.focus();
  };

  // Clone children to add refs
  const enhancedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child) && child.type === Button) {
      return cloneElement(
        child as ReactElement<UseButtonProps & RefAttributes<HTMLButtonElement | HTMLAnchorElement>>,
        {
          ref: (node: HTMLButtonElement | HTMLAnchorElement) => {
            if (node) buttonsRef.current[index] = node;
          },
        }
      );
    }
    return child;
  });

  return (
    <div 
      {...groupProps}
      role={groupProps.role || "group"}
      onKeyDown={handleKeyDown}
    >
      {enhancedChildren}
    </div>
  );
} 