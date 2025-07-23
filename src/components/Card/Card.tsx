/**
 * @file Card.tsx
 * @description A reusable Card component for Elementa UI with variant support, density, padding, skeleton loading, and configurable tag/HTML element.
 * @date 2025-07-22
 * @author Andzisi Mabaso
 */

import clsx from "clsx";
import { memo } from "react";
import { cardConfig } from "./card.config";
// import type { CardComponentType } from "./Card.types";

interface CardProps {
  children: React.ReactNode;
  variant?: "outlined" | "elevated";
  padding?: "default" | string;
  density?: "default" | "compact";
  prefix?: string;
  className?: string;
  size?: "xs" | "sm";
  as?: React.ElementType;
  loading?: boolean;
  skeleton?: React.ReactNode;
  styleOverrides?: {
    variantStyles?: Record<string, string>;
    padding?: Record<string, string> | string;
  };
  role?: string;
  "aria-label"?: string;
  [key: string]: any;
}

// Skeleton-specific props
interface CardSkeletonProps {
  prefix?: string;
  size?: "xs" | "sm";
  density?: "default" | "compact";
  showTitle?: boolean;
  showDescription?: boolean;
  showFooter?: boolean;
  showBadge?: boolean;
}

// Default skeleton configuration
const defaultSkeletonConfig: CardSkeletonProps = {
  prefix: cardConfig.prefix,
  size: "xs",
  density: "default",
  showTitle: true,
  showDescription: true,
  showFooter: true,
  showBadge: true,
};

const Card = memo(
  ({
    children,
    variant = "outlined",
    padding = "default",
    density = "default",
    prefix = cardConfig.prefix,
    className,
    size,
    as: Component = "div",
    loading = false,
    skeleton,
    styleOverrides = {},
    role = "region",
    "aria-label": ariaLabel = "Card content",
    ...props
  }: CardProps) => {
    // Validate accessibility props to prevent [object Object]
    const validatedRole = typeof role === "string" ? role : "region";
    if (typeof role !== "string") {
      console.warn(
        `Card: "role" prop must be a string, received ${typeof role}. Using default: "region"`
      );
    }
    const validatedAriaLabel =
      typeof ariaLabel === "string" ? ariaLabel : "Card content";
    if (typeof ariaLabel !== "string") {
      console.warn(
        `Card: "aria-label" prop must be a string, received ${typeof ariaLabel}. Using default: "Card content"`
      );
    }

    // Merge variant styles with overrides
    const mergedVariants = {
      ...cardConfig.variantStyles,
      ...styleOverrides.variantStyles,
    };

    // Merge padding styles, with validation
    const mergedPadding = {
      ...cardConfig.padding,
      ...(typeof styleOverrides.padding === "object"
        ? styleOverrides.padding
        : {}),
    };

    const cardClasses = clsx(
      `${prefix}-card`,
      mergedVariants[variant] || mergedVariants.default,
      mergedPadding[density === "compact" ? "compact" : padding] ||
        mergedPadding.default,
      `${prefix}-card-density--${density}`,
      size && `${prefix}-card-${size}`,
      className
    );

    return (
      <Component
        className={cardClasses}
        role={validatedRole}
        aria-label={validatedAriaLabel}
        aria-busy={loading ? "true" : undefined}
        {...props}
      >
        {loading
          ? skeleton || (
              <CardSkeleton
                {...defaultSkeletonConfig}
                prefix={prefix}
                size={size || defaultSkeletonConfig.size}
                density={density}
                showFooter={!!children?.toString().includes("Card.Footer")}
                showBadge={!!children?.toString().includes("Badge")}
              />
            )
          : children}
      </Component>
    );
  }
);

// Skeleton component
const CardSkeleton = memo(
  ({
    prefix = defaultSkeletonConfig.prefix,
    size = defaultSkeletonConfig.size,
    density = defaultSkeletonConfig.density,
    showTitle = defaultSkeletonConfig.showTitle,
    showDescription = defaultSkeletonConfig.showDescription,
    showFooter = defaultSkeletonConfig.showFooter,
    showBadge = defaultSkeletonConfig.showBadge,
  }: CardSkeletonProps) => {
    const sizeStyles = {
      xs: {
        title: `${prefix}-skeleton-ldr-sm e-ui-w-2of3 e-ui-h-24`,
        description: `${prefix}-skeleton-ldr-xs e-ui-h-32 ui-w-4of5`,
        badge: `${prefix}-skeleton-ldr-xs e-ui-w-16`,
        footer: `${prefix}-skeleton-ldr-xs w-1/2`,
      },
      sm: {
        title: `${prefix}-skeleton-ldr-md e-ui-w-3of4`,
        description: `${prefix}-skeleton-ldr-sm e-ui-w-2of3`,
        badge: `${prefix}-skeleton-ldr-sm e-ui-w-20`,
        footer: `${prefix}-skeleton-ldr-sm w-1/2`,
      },
    };

    const densityStyles = {
      default: ``,
      compact: ``,
    };

    return (
      <div
        className={clsx(`${prefix}-skeleton`, densityStyles[density])}
        aria-hidden="true"
      >
        {showTitle && (
          <div
            className={clsx(
              `${prefix}-skeleton-ldr`,
              `${prefix}-skeleton-ldr-rounded`,
              sizeStyles[size].title
            )}
          />
        )}
        {showDescription && (
          <div
            className={clsx(
              `${prefix}-skeleton-ldr`,
              `${prefix}-skeleton-ldr-rounded`,
              sizeStyles[size].description
            )}
          />
        )}
        {showBadge && (
          <div
            className={clsx(
              `${prefix}-skeleton-ldr`,
              `${prefix}-skeleton-ldr-rounded`,
              sizeStyles[size].badge
            )}
          />
        )}
        {showFooter && (
          <div
            className={clsx(
              `${prefix}-skeleton-ldr`,
              `${prefix}-skeleton-ldr-rounded`,
              sizeStyles[size].footer
            )}
          />
        )}
      </div>
    );
  }
);

Card.Title = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={clsx(`${cardConfig.prefix}-card-title`, className)}
    role="heading"
    aria-level={3}
    {...props}
  >
    {children}
  </h3>
);

Card.Description = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={clsx(`${cardConfig.prefix}-card-description`, className)}
    {...props}
  >
    {children}
  </p>
);

Card.Footer = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <footer
    className={clsx(`${cardConfig.prefix}-card-footer`, className)}
    {...props}
  >
    {children}
  </footer>
);

Card.Meta = ({
  children,
  icon,
  className,
  ...props
}: {
  children: React.ReactNode;
  icon?: React.ReactNode | string;
  className?: string;
}) => (
  <div className={clsx(`${cardConfig.prefix}-card-meta`, className)} {...props}>
    {typeof icon === "string" ? <i className={`icon-${icon}`} /> : icon}
    <span>{children}</span>
  </div>
);

Card.Image = ({
  src,
  alt,
  className,
  ...props
}: {
  src: string;
  alt?: string;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>) => (
  <div className={`${cardConfig.prefix}-card-image-wrapper`}>
    <img
      src={src}
      alt={alt || ""}
      className={clsx(`${cardConfig.prefix}-card-image`, className)}
      {...props}
    />
  </div>
);

export { Card, CardSkeleton };
