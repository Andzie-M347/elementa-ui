export type SpinnerVariant = 'ring';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  /**
   * Spinner visual style
   * @default 'ring'
   */
  variant?: SpinnerVariant;

  /**
   * Spinner size (mapped per variant)
   * @default 'md'
   */
  size?: SpinnerSize;

  /**
   * Override spinner color (uses CSS custom property)
   * e.g. "#317c85" or "var(--color-primary)"
   */
  color?: string;

  /**
   * Override animation speed (uses CSS custom property)
   * e.g. "0.8s"
   */
  speed?: string;

  /**
   * Additional class names to append
   */
  className?: string;
}
