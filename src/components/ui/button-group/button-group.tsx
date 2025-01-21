"use client";

import { useButtonGroup, UseButtonGroupProps } from "@/hooks/use-button-group";

export default function ButtonGroup(props: UseButtonGroupProps) {
  const { groupProps, children } = useButtonGroup(props);

  return <div {...groupProps}>{children}</div>;
} 