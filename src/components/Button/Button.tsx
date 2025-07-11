import { FC } from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './Button.types';

const baseStyles =
  'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl';

const variantStyles = {
   primary: 'e-ui-background_primary e-ui-color_neutral-white hover:e-ui-background_primary-hover focus:ring-e-ui-primary-color',
  secondary: 'e-ui-background_secondary e-ui-color_neutral-white hover:e-ui-background_secondary-hover focus:ring-e-ui-secondary-color',
  tertiary: 'bg-transparent e-ui-color_info hover:e-ui-background_info-10 focus:ring-e-ui-info-color',
  danger: 'e-ui-background_error e-ui-color_neutral-white hover:e-ui-background_error-hover focus:ring-e-ui-error-color',
};

const sizeStyles = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-3',
};

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  children,
  className,
  ...rest
}) => {
  const isIconOnly = !!icon && !children;

  return (
    <button
      type="button"
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        (disabled || isLoading) && 'opacity-50 cursor-not-allowed',
        isIconOnly && 'aspect-square p-2',
        className
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...rest}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className={clsx('mr-2', isIconOnly && 'm-0')}>{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className={clsx('ml-2', isIconOnly && 'm-0')}>{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
