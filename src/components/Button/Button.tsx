import clsx from 'clsx';
import { FC } from 'react';
import type { ButtonProps } from './Button.types';


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
        'e-ui-btn',
        `e-ui-btn--${variant}`,
        `e-ui-btn--${size}`,
        fullWidth && 'e-ui-w-full',
        isIconOnly && 'aspect-square p-2',
        className
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...rest}
    >
      {isLoading ? (
        /* spinner … */
        <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24" aria-hidden="true">…</svg>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className={clsx('mr-2', isIconOnly && 'm-0')}>{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className={clsx('ml-2', isIconOnly && 'm-0')}>{icon}</span>}
        </>
      )}
    </button>
  );
};
