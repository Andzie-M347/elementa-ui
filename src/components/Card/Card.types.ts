import type {
  FC,
  ReactNode,
  ElementType,
  MemoExoticComponent,
  HTMLAttributes,
} from "react";

export type CardVariant = "default" | "outlined" | "elevated";
export type CardDensity = "default" | "compact" | "comfortable";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  variant?: CardVariant;
  padding?: string;
  prefix?: string;
  styleOverrides?: {
    variantStyles?: Partial<Record<CardVariant, string>>;
    padding?: string;
    radius?: string;
  };
  size?: "xs" | "sm";
  density?: CardDensity;
  loading?: boolean;
  skeleton?: ReactNode;
}

export interface CardComponentType extends MemoExoticComponent<FC<CardProps>> {
  Title: FC<{ children: ReactNode; className?: string }>;
  Description: FC<{ children: ReactNode; className?: string }>;
  Footer: FC<{ children: ReactNode; className?: string }>;
  Meta: FC<{
    children: ReactNode;
    icon?: ReactNode | string;
    className?: string;
  }>;
  Image?: FC<{
    src: string;
    alt?: string;
    className?: string;
  }>;
}
