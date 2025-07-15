import clsx from 'clsx';
import { forwardRef, ForwardedRef, ReactNode } from 'react';

// Define interfaces for type safety
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  children?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  prefix?: string;
  'aria-label'?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Utility function for class names
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

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400',
  tertiary: 'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-300',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500',
};

// Button component with forwardRef
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