import { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "info";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  prefix?: string;
  className?: string;
  styleOverrides?: {
    variantStyles?: Partial<Record<BadgeVariant, string>>;
  };
}
