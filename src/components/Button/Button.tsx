/**
 * @file Button.tsx
 * @description A highly configurable reusable Button component supporting variants, sizes, icons, loading state, and accessibility features.
 * @author Andzisi Mabaso
 * @date 2025-07-15
 */

import clsx from "clsx";
import { forwardRef, ForwardedRef, ReactNode } from "react";
import { buttonConfig } from "./button.config";
import { Spinner } from "../Spinner";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  prefix?: string;
  "aria-label"?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  styleOverrides?: {
    sizeStyles?: Partial<Record<"sm" | "md" | "lg", string>>;
    variantStyles?: Partial<
      Record<"primary" | "secondary" | "tertiary" | "danger", string>
    >;
  };
}

const getButtonClasses = (
  variant: ButtonProps["variant"],
  size: ButtonProps["size"],
  fullWidth: boolean,
  isIconOnly: boolean,
  prefix: string
) =>
  clsx(`${prefix}-btn`, `${prefix}-btn--${size}`, {
    [`${prefix}-w-full`]: fullWidth,
    "aspect-square p-2": isIconOnly,
  });

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      disabled = false,
      icon,
      iconPosition = "left",
      children,
      className,
      type = "button",
      prefix = buttonConfig.prefix,
      "aria-label": ariaLabel,
      onClick,
      styleOverrides = {},
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const isIconOnly = !!icon && !children;

    const mergedSizeStyles = {
      ...buttonConfig.sizeStyles,
      ...styleOverrides.sizeStyles,
    };

    const mergedVariantStyles = {
      ...buttonConfig.variantStyles,
      ...styleOverrides.variantStyles,
    };

    return (
      <>
        <button
          ref={ref}
          type={type}
          className={clsx(
            getButtonClasses(variant, size, fullWidth, isIconOnly, prefix),
            mergedSizeStyles[size],
            mergedVariantStyles[variant],
            disabled,
            className
          )}
          disabled={disabled || isLoading}
          aria-busy={isLoading}
          aria-label={isLoading ? "Loading" : ariaLabel}
          onClick={onClick}
        >
          {isLoading ? (
            // Elementa Spinner component
            <Spinner size="sm" variant="ring" color="#f5f6f8" speed="1s" />
          ) : (
            <>
              {icon && iconPosition === "left" && (
                <span className={clsx("inline-flex", { "mr-2": !isIconOnly })}>
                  {icon}
                </span>
              )}
              {children}
              {icon && iconPosition === "right" && (
                <span className={clsx("inline-flex", { "ml-2": !isIconOnly })}>
                  {icon}
                </span>
              )}
            </>
          )}
        </button>
      </>
    );
  }
);

Button.displayName = "Button";
