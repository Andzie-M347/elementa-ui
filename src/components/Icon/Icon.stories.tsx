import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../../framework/icons";
import { iconMap, type IconName } from "../../framework/icons/icon-map";

// Dynamically extract icon names
const iconNames = Object.keys(iconMap) as IconName[];

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"], // Optional: enables auto-docs in Storybook
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
    className: {
      control: { type: "text" },
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

export const Default: Story = {};

export const AllIcons: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {iconNames.map((name) => (
        <div key={name} style={{ textAlign: "center" }}>
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
  },
};

export const Sizes: Story = {
  render: ({ name, color }) => (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
      {["sm", "md", "lg", 32, 48].map((s, i) => (
        <div key={i} style={{ textAlign: "center" }}>
          <Icon name={name} size={s as any} color={color} />
          <div style={{ fontSize: "0.75rem" }}>{s}</div>
        </div>
      ))}
    </div>
  ),
  args: {
    name: "star",
    color: "#2563eb",
  },
};
