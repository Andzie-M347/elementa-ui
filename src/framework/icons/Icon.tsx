import { iconMap } from "./icon-map";
import type { IconName } from "./icon-map";

import "./icon.scss";

type IconProps = {
  name: IconName;
  size?: "sm" | "md" | "lg" | number;
  color?: string;
  className?: string;
};

export const Icon = ({
  name,
  size = "md",
  color = "currentColor",
  className = "",
}: IconProps) => {
  const SvgIcon = iconMap[name];
  const resolvedSize =
    size === "sm"
      ? "1rem"
      : size === "md"
      ? "1.5rem"
      : size === "lg"
      ? "2rem"
      : `${size}px`;

  if (!SvgIcon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <SvgIcon
      className={`e-ui-icon ${className}`}
      style={{ width: resolvedSize, height: resolvedSize, fill: "none" }}
      aria-hidden="true"
      focusable="false"
    />
  );
};
