import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "../../framework/icons";
import { iconMap, type IconName } from "../../framework/icons/icon-map";

type IconSize = "sm" | "md" | "lg" | number;

const iconNames = Object.keys(iconMap) as IconName[];

const SIZE_OPTIONS: IconSize[] = ["sm", "md", "lg", 32, 48];
const ICON_WRAPPER_STYLE: React.CSSProperties = {
  textAlign: "center",
  width: "5rem",
};
const LABEL_STYLE: React.CSSProperties = {
  fontSize: "0.75rem",
  marginTop: "0.25rem",
};

const meta: Meta<typeof Icon> = {
  title: "Components/UI/Icon",
  component: Icon,
  tags: ["autodocs", "ui", "icon"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: iconNames,
      description: "Icon name from iconMap",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Predefined icon sizes",
    },
    color: {
      control: { type: "color" },
      description: "Icon color (CSS color value)",
    },
    className: {
      control: { type: "text" },
      description: "Optional custom class for the icon",
    },
  },
  args: {
    name: "arrowLeft",
    size: "md",
    color: "currentColor",
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

/**
 * Default icon story for visual regression and interactive controls.
 */
export const Default: Story = {};

/**
 * Renders a grid of all available icons for quick visual reference.
 */
export const AllIcons: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {iconNames.map((name) => (
        <div key={name} style={ICON_WRAPPER_STYLE}>
          <Icon {...args} name={name} />
          <div style={LABEL_STYLE}>{name}</div>
        </div>
      ))}
    </div>
  ),
  args: {
    size: "lg",
    color: "#64748b",
  },
  name: "All Icons Preview",
};

/**
 * Demonstrates supported icon sizes using both tokens and numeric pixel values.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
      {SIZE_OPTIONS.map((size) => (
        <div key={size.toString()} style={{ textAlign: "center" }}>
          <Icon {...args} size={size} />
          <div style={LABEL_STYLE}>{size}</div>
        </div>
      ))}
    </div>
  ),
  args: {
    name: "star",
    color: "#2563eb",
  },
  name: "Size Variants",
};
