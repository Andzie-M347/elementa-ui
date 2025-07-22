/**
 * @file Card.tsx
 * @description A reusable Card component for Elementa UI with variant support, density, padding, radius, skeleton loading, and configurable tag/HTML element.
 * @date 2025-07-21
 * @author Andzisi Mabaso
 */

import clsx from "clsx";
import { cardConfig } from "./card.config";
import type { CardProps } from "./Card.types";

export const Card = ({
  children,
  variant = "default",
  padding = "default",
  // radius = "default",
  density = "default",
  prefix = cardConfig.prefix,
  className,
  size,
  as: Component = "div",
  loading = false,
  skeleton,
  styleOverrides = {},
  ...props
}: CardProps) => {
  const mergedVariants = {
    ...cardConfig.variantStyles,
    ...styleOverrides.variantStyles,
  };

  const mergedPadding = {
    ...cardConfig.padding,
    ...(typeof styleOverrides.padding === "object"
      ? styleOverrides.padding
      : {}),
  };

  const cardClasses = clsx(
    `${prefix}-card`,
    mergedVariants[variant],
    mergedPadding[density === "compact" ? "compact" : padding],
    `${prefix}-card-density--${density}`,
    size && `${prefix}-card-${size}`,
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

Card.Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <h3 className={clsx("e-ui-card-title", className)}>{children}</h3>;

Card.Description = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <p className={clsx("e-ui-card-description", className)}>{children}</p>;

Card.Footer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={clsx("e-ui-card-footer", className)}>{children}</div>;

Card.Meta = ({
  children,
  icon,
  className,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode | string;
  className?: string;
}) => (
  <div className={clsx("e-ui-card-meta", className)}>
    {typeof icon === "string" ? <i className={`icon-${icon}`} /> : icon}
    {children}
  </div>
);
