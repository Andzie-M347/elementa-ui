import { ReactNode, HTMLAttributes, ElementType } from "react";

export type CardVariant = "default" | "outlined" | "elevated";
export type CardDensity = "default" | "compact" | "comfortable";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType; //(div, section, article...)
  variant?: CardVariant;
  padding?: string;
  prefix?: string;
  styleOverrides?: {
    variantStyles?: Partial<Record<CardVariant, string>>;
    padding?: string;
    radius?: string;
  };
  size?: "xs" | "sm";
  density?: CardDensity; // <-- for compact/comfortable spacing
  loading?: boolean; // <-- flag to show skeleton loader
  skeleton?: ReactNode; // <-- optional custom skeleton override
}
