import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../../framework/icons";
import { iconMap, type IconName } from "../../framework/icons/icon-map";

const iconNames = Object.keys(iconMap) as IconName[];

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: iconNames,
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", 16, 24, 32, 48],
    },
    color: {
      control: { type: "color" },
    },
    strokeWidth: {
      control: { type: "number" },
    },
    className: {
      control: { type: "text" },
    },
  },
  args: {
    name: "arrowLeft",
    size: "md",
    color: "currentColor",
    strokeWidth: 1.5,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const AllIcons: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {iconNames.map((name) => (
        <div key={name} style={{ textAlign: "center", width: "5rem" }}>
          <Icon {...args} name={name} />
          <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>
            {name}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    size: "lg",
    color: "#64748b",
    strokeWidth: 1.5,
  },
};

export const Sizes: Story = {
  render: ({ name, color, strokeWidth }) => (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
      {["sm", "md", "lg", 32, 48].map((size) => (
        <div key={size.toString()} style={{ textAlign: "center" }}>
          <Icon
            name={name}
            size={size as any}
            color={color}
            strokeWidth={strokeWidth}
          />
          <div style={{ fontSize: "0.75rem" }}>{size}</div>
        </div>
      ))}
    </div>
  ),
  args: {
    name: "star",
    color: "#2563eb",
    strokeWidth: 2,
  },
};
