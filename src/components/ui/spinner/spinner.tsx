import cn from "@/lib/utils";
import { VariantProps, tv } from "tailwind-variants";

const spinner = tv({
  base: "inline-block animate-spin rounded-full align-middle",
  variants: {
    color: {
      white: "border-background",
      primary: "border-primary",
      secondary: "border-secondary",
      info: "border-info",
      neutral: "border-neutral",
      error: "border-error",
      warning: "border-warning",
      success: "border-success",
    },
    variant: {
      spin: "animate-spin",
      pulse: "animate-pulse",
      ping: "animate-ping",
    },
    size: {
      sm: "size-4",
      md: "size-6",
      lg: "size-8",
      xl: "size-10",
      "2xl": "size-12",
    },
  },
  compoundVariants: [
    {
      variant: "spin",
      color: "white",
      className: "border-b-2 border-background",
    },
    {
      variant: ["pulse", "ping"],
      color: "white",
      className: "border-b-2 bg-background",
    },
    {
      variant: "spin",
      color: "primary",
      className: "border-b-2 border-primary",
    },
    {
      variant: "spin",
      color: "secondary",
      className: "border-b-2 border-secondary",
    },
    {
      variant: "spin",
      color: "neutral",
      className: "border-b-2 border-neutral",
    },
    {
      variant: "spin",
      color: "info",
      className: "border-b-2 border-info",
    },
    {
      variant: "spin",
      color: "error",
      className: "border-b-2 border-error",
    },
    {
      variant: "spin",
      color: "warning",
      className: "border-b-2 border-warning",
    },
    {
      variant: "spin",
      color: "success",
      className: "border-b-2 border-success",
    },
    {
      variant: ["pulse", "ping"],
      color: "primary",
      className: "bg-primary",
    },
    {
      variant: ["pulse", "ping"],
      color: "secondary",
      className: "bg-secondary",
    },
    {
      variant: ["pulse", "ping"],
      color: "neutral",
      className: "bg-neutral",
    },
    {
      variant: ["pulse", "ping"],
      color: "info",
      className: "bg-info",
    },
    {
      variant: ["pulse", "ping"],
      color: "error",
      className: "bg-error",
    },
    {
      variant: ["pulse", "ping"],
      color: "warning",
      className: "bg-warning",
    },
    {
      variant: ["pulse", "ping"],
      color: "success",
      className: "bg-success",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
    variant: "spin",
  },
});

const spinnerLabel = tv({
  variants: {
    color: {
      white: "text-background",
      primary: "text-primary",
      secondary: "text-secondary",
      info: "text-info",
      neutral: "text-neutral",
      error: "text-error",
      warning: "text-warning",
      success: "text-success",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type SpinnerVariants = VariantProps<typeof spinner>;

interface SpinnerProps extends SpinnerVariants {
  label?: string;
  labelClassName?: string;
  className?: string;
  isShowLabel?: boolean;
  custom?: React.ReactNode;
}

export default function Spinner(props: SpinnerProps) {
  const { className, label, isShowLabel, color, labelClassName, custom } =
    props;

  return (
    <div
      aria-label={label}
      className="relative inline-flex flex-col gap-2 items-center justify-center"
    >
      {custom}
      {!custom && (
        <div className={cn(spinner(props), className)} role="status">
          {!isShowLabel && <span className="sr-only">{label}</span>}
        </div>
      )}
      {isShowLabel && (
        <span
          className={cn(
            "text-base font-medium",
            labelClassName,
            spinnerLabel({ color: color })
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
