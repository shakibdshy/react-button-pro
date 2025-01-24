import { cva } from "class-variance-authority";
import { colorVariants } from "@/lib/variants";
import cn from "@/lib/utils";

export const button = cva(
  cn(
    "flex items-center justify-center gap-2 font-semibold bg-primary text-white transition-all border border-transparent outline-none ring-offset-2 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none disabled:appearance-none"
  ),
  {
    variants: {
      color: {
        primary:
          "border-primary bg-primary text-base-white hover:bg-primary-900 hover:border-primary-900 focus-visible:ring-primary/50",
        secondary:
          "border-secondary bg-secondary text-primary hover:bg-secondary-400 focus-visible:ring-secondary/50",
        info: "border-info bg-info text-base-white hover:bg-info-900 focus-visible:ring-primary/50",
        neutral:
          "border-neutral bg-neutral text-base-white hover:bg-neutral-800 focus-visible:ring-neutral/50",
        error:
          "border-error bg-error text-base-white hover:bg-error-900 focus-visible:ring-error/50",
        warning:
          "border-warning bg-warning text-base-white hover:bg-warning-800 focus-visible:ring-warning/50",
        success:
          "border-success bg-success text-base-white hover:bg-success-900 focus-visible:ring-success/50",
      },
      size: {
        sm: "px-4 py-1.5 text-sm",
        md: "px-4 py-2.5 text-sm",
        lg: "px-6 py-3 text-base",
        xl: "px-6 py-3.5 text-base",
        "2xl": "px-6 py-4 text-lg",
      },
      variant: {
        primary: "",
        outline: "border-2",
        flat: "border-transparent",
        light: "",
        ghost: "border-2",
        text: "p-0",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
        none: "rounded-none",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        color: "primary",
        className: colorVariants.outline.primary,
      },
      {
        variant: "outline",
        color: "secondary",
        className: colorVariants.outline.secondary,
      },
      {
        variant: "outline",
        color: "info",
        className: colorVariants.outline.info,
      },
      {
        variant: "outline",
        color: "neutral",
        className: colorVariants.outline.neutral,
      },
      {
        variant: "outline",
        color: "error",
        className: colorVariants.outline.error,
      },
      {
        variant: "outline",
        color: "warning",
        className: colorVariants.outline.warning,
      },
      {
        variant: "outline",
        color: "success",
        className: colorVariants.outline.success,
      },
      {
        variant: "light",
        color: "primary",
        className: colorVariants.light.primary,
      },
      {
        variant: "light",
        color: "secondary",
        className: colorVariants.light.secondary,
      },
      {
        variant: "light",
        color: "info",
        className: colorVariants.light.info,
      },
      {
        variant: "light",
        color: "neutral",
        className: colorVariants.light.neutral,
      },
      {
        variant: "light",
        color: "error",
        className: colorVariants.light.error,
      },
      {
        variant: "light",
        color: "warning",
        className: colorVariants.light.warning,
      },
      {
        variant: "light",
        color: "success",
        className: colorVariants.light.success,
      },
      {
        variant: "flat",
        color: "primary",
        className:
          "bg-primary-50 text-primary hover:bg-primary-100 hover:border-transparent",
      },
      {
        variant: "flat",
        color: "secondary",
        className: colorVariants.flat.secondary,
      },
      {
        variant: "flat",
        color: "info",
        className: colorVariants.flat.info,
      },
      {
        variant: "flat",
        color: "neutral",
        className: colorVariants.flat.neutral,
      },
      {
        variant: "flat",
        color: "error",
        className: colorVariants.flat.error,
      },
      {
        variant: "flat",
        color: "warning",
        className: colorVariants.flat.warning,
      },
      {
        variant: "flat",
        color: "success",
        className: colorVariants.flat.success,
      },
      {
        variant: "ghost",
        color: "primary",
        className: colorVariants.ghost.primary,
      },
      {
        variant: "ghost",
        color: "secondary",
        className: colorVariants.ghost.secondary,
      },
      {
        variant: "ghost",
        color: "info",
        className: colorVariants.ghost.info,
      },
      {
        variant: "ghost",
        color: "neutral",
        className: colorVariants.ghost.neutral,
      },
      {
        variant: "ghost",
        color: "error",
        className: colorVariants.ghost.error,
      },
      {
        variant: "ghost",
        color: "warning",
        className: colorVariants.ghost.warning,
      },
      {
        variant: "ghost",
        color: "success",
        className: colorVariants.ghost.success,
      },
      {
        variant: "text",
        color: "primary",
        className: colorVariants.text.primary,
      },
      {
        variant: "text",
        color: "secondary",
        className: colorVariants.text.secondary,
      },
      {
        variant: "text",
        color: "info",
        className: colorVariants.text.info,
      },
      {
        variant: "text",
        color: "neutral",
        className: colorVariants.text.neutral,
      },
      {
        variant: "text",
        color: "error",
        className: colorVariants.text.error,
      },
      {
        variant: "text",
        color: "warning",
        className: colorVariants.text.warning,
      },
      {
        variant: "text",
        color: "success",
        className: colorVariants.text.success,
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "primary",
      color: "primary",
      rounded: "lg",
    },
  }
); 