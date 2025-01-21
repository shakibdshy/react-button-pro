import { buttonGroup } from "@/components/ui/button-group/button-group.styles";
import { ButtonGroupProps } from "@/components/ui/button-group/button-group.types";
import { useCallback } from "react";

export type UseButtonGroupProps = ButtonGroupProps;

export function useButtonGroup(props: UseButtonGroupProps) {
  const { className, children, rounded, ...rest } = props;

  const groupClassName = useCallback(() => {
    return buttonGroup({ rounded, className });
  }, [rounded, className]);

  return {
    groupProps: {
      ...rest,
      className: groupClassName(),
    },
    children,
  };
} 