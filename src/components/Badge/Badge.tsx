/**
 * @file Badge.tsx
 * @description A configurable Badge component with support for variant styles and class prefixing for design systems like Elementa UI.
 * @date 2025-07-20
 * @author Andzisi Mabaso
 */

import React from "react";
import clsx from "clsx";
import type { BadgeProps } from "./Badge.types";
// import { BadgeProps } from './Badge.types';
import { badgeConfig } from "./badge.config";

const getBadgeClasses = (variant: BadgeProps["variant"], prefix: string) =>
  clsx(`${prefix}-badge`, `${prefix}-badge--sm`);

export const Badge = ({
  children,
  variant = "primary",
  prefix = badgeConfig.prefix,
  className,
  styleOverrides = {},
  ...props
}: BadgeProps) => {
  const mergedVariantStyles = {
    ...badgeConfig.variantStyles,
    ...styleOverrides.variantStyles,
  };

  return (
    <span
      className={clsx(
        getBadgeClasses(variant, prefix),
        "",
        mergedVariantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
