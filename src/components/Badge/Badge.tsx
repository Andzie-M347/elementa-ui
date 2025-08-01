/**
 * @file Badge.tsx
 * @description A flexible Badge component with variant support, design token integration, and configurable prefixing for design systems like Elementa UI.
 * @date 2025-07-20
 * @author Andzisi Mabaso
 */

import clsx from "clsx";
import type { BadgeProps } from "./Badge.types";
import { badgeConfig } from "./badge.config";
import type { JSX } from "react";

/**
 * Generates the base class name for the badge component.
 * Applies the namespace prefix for consistency across design systems.
 */
const getBaseBadgeClass = (prefix: string): string =>
  `${prefix}-badge ${prefix}-badge--sm`;

export const Badge = ({
  children,
  variant = "primary",
  prefix = badgeConfig.prefix,
  className,
  styleOverrides = {},
  ...props
}: BadgeProps): JSX.Element => {
  const { variantStyles: defaultVariantStyles = {} } = badgeConfig;

  const { variantStyles: customVariantStyles = {} } = styleOverrides;

  const variantClasses = {
    ...defaultVariantStyles,
    ...customVariantStyles,
  };

  return (
    <span
      className={clsx(
        getBaseBadgeClass(prefix),
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
