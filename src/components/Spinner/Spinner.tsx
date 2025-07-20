import clsx from 'clsx';
import { FC } from 'react';

type SpinnerProps = {
  variant?: 'ring'
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  speed?: string;
  className?: string;
};

export const Spinner: FC<SpinnerProps> = ({
  variant = 'ring',
  size = 'md',
  color,
  speed,
  className
}) => {
  const variantClass = `e-ui-spinner--${variant}`;
  const sizeClass = `e-ui-spinner--${size}`;

  return  (
    <span
      className={clsx('e-ui-spinner', variantClass, sizeClass, className)}
      style={{
        '--e-ui-spinner-color': color,
        '--e-ui-spinner-speed': speed
      } as React.CSSProperties}
    />
  ) 
};