/**
 * @file Button.tsx
 * @description A highly configurable reusable Button component supporting variants, sizes, icons, loading state, and accessibility features.
 * @author Andzisi Mabaso
 * @date 2025-07-15
 */

import clsx from 'clsx';
import { forwardRef, ForwardedRef, ReactNode } from 'react';

/**
 * Props definition for the Button component.
 */
interface ButtonProps {
  /** Button visual style variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** If true, button stretches to full width of its container */
  fullWidth?: boolean;
  /** Displays a loading spinner instead of content */
  isLoading?: boolean;
  /** Disables the button when true */
  disabled?: boolean;
  /** Optional icon element to display inside the button */
  icon?: ReactNode;
  /** Position of the icon relative to the text content */
  iconPosition?: 'left' | 'right';
  /** Button inner text content or elements */
  children?: ReactNode;
  /** Optional additional CSS class names */
  className?: string;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** CSS class prefix for BEM naming convention */
  prefix?: string;
  /** Accessibility label for screen readers */
  'aria-label'?: string;
  /** Click event handler callback */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Utility function to generate dynamic class names based on button props.
 *
 * @param variant - The button variant
 * @param size - The button size
 * @param fullWidth - Whether button should span full container width
 * @param isIconOnly - Whether button has icon only and no text content
 * @param prefix - CSS class prefix for consistent naming
 * @returns Concatenated class names string
 */
const getButtonClasses = (
  variant: ButtonProps['variant'],
  size: ButtonProps['size'],
  fullWidth: boolean,
  isIconOnly: boolean,
  prefix: string,
) =>
  clsx(
    `${prefix}-btn`,
    `${prefix}-btn--${variant}`,
    `${prefix}-btn--${size}`,
    {
      [`${prefix}-w-full`]: fullWidth,
      'aspect-square p-2': isIconOnly,
    },
  );

/** Maps button sizes to padding and font size utility classes */
const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

/** Maps button variants to color and interaction utility classes */
const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400',
  tertiary: 'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-300',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500',
};

/**
 * Reusable Button component with variants, sizes, icons and loading state.
 *
 * @param props - ButtonProps
 * @param ref - Forwarded ref to button DOM element
 * @returns Rendered button element
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      disabled = false,
      icon,
      iconPosition = 'left',
      children,
      className,
      type = 'button',
      prefix = 'e-ui',
      'aria-label': ariaLabel,
      onClick,
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const isIconOnly = !!icon && !children;

    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          getButtonClasses(variant, size, fullWidth, isIconOnly, prefix),
          sizeStyles[size],
          variantStyles[variant],
          disabled && 'opacity-50 cursor-not-allowed',
          className,
        )}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        aria-label={isLoading ? 'Loading' : ariaLabel}
        onClick={onClick}
      >
        {isLoading ? (
          // Loading spinner SVG
          <svg
            className="animate-spin h-5 w-5 text-current mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.3" />
            <path
              d="M12 2a10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8V2z"
              fill="currentColor"
            />
          </svg>
        ) : (
          // Normal button content: optional icon + text
          <>
            {icon && iconPosition === 'left' && (
              <span className={clsx('inline-flex', { 'mr-2': !isIconOnly })}>{icon}</span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
              <span className={clsx('inline-flex', { 'ml-2': !isIconOnly })}>{icon}</span>
            )}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
