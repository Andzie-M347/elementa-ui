import { iconMap } from "./icon-map";
import type { IconName } from "./icon-map";

type IconProps = {
  name: IconName;
  size?: "sm" | "md" | "lg" | number;
  color?: string;
  className?: string;
};

const sizeToRem = {
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
} as const;

export const Icon = ({
  name,
  size = "md",
  color = "currentColor",
  className = "",
}: IconProps) => {
  const SvgIcon = iconMap[name];

  const resolvedSize =
    typeof size === "number" ? `${size}px` : sizeToRem[size] || size;

  if (!SvgIcon) {
    console.warn(`[Elementa UI] Icon "${name}" not found in iconMap.`);
    return null;
  }

  return (
    <SvgIcon
      className={`e-ui-icon ${className}`}
      style={{
        width: resolvedSize,
        height: resolvedSize,
        color: color,
      }}
      aria-hidden="true"
      focusable="false"
    />
  );
};
