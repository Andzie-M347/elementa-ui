/**
 * @file Card.tsx
 * @description A reusable Card component for Elementa UI with variant support, padding, radius, and configurable tag/HTML element.
 * @date 2025-07-21
 * @author Andzisi Mabaso
 */

/**
 * @file Card.tsx
 * @description A configurable Card component supporting variants, loading, density, skeleton state, and class prefixing for design systems like Elementa UI.
 * @date 2025-07-20
 * @author
 */

import clsx from "clsx";
import { cardConfig } from "./card.config";
import type { CardProps } from "./Card.types";

export const Card = ({
  children,
  variant = "default",
  padding = "default",
  radius = "default",
  prefix = cardConfig.prefix,
  className,
  as: Component = "div",
  loading = false,
  skeleton,
  density = "default",
  styleOverrides = {},
  ...props
}: CardProps) => {
  const mergedVariants = {
    ...cardConfig.variantStyles,
    ...styleOverrides.variantStyles,
  };

  const mergedPadding = {
    ...cardConfig.padding,
    ...styleOverrides.padding,
  };

  const mergedRadius = {
    ...cardConfig.radius,
    ...styleOverrides.radius,
  };

  const cardClasses = clsx(
    `${prefix}-card`,
    mergedVariants[variant],
    mergedPadding[density === "compact" ? "compact" : padding],
    mergedRadius[radius],
    className
  );

  return (
    <Component className={cardClasses} {...props}>
      {loading ? skeleton || <CardSkeleton /> : children}
    </Component>
  );
};

const CardSkeleton = () => (
  <div className="animate-pulse space-y-3">
    <div className="h-5 bg-gray-300 rounded w-3/4" />
    <div className="h-4 bg-gray-200 rounded w-2/3" />
    <div className="h-4 bg-gray-200 rounded w-1/2" />
  </div>
);
