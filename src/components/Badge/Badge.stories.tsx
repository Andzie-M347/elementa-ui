import React from "react";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import type { BadgeProps } from "./Badge.types";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "info"],
    },
    children: {
      control: "text",
    },
    prefix: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "primary",
    prefix: "e-ui",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {["primary", "secondary", "success", "warning", "info"].map((variant) => (
        <Badge key={variant} variant={variant as BadgeProps["variant"]}>
          {variant}
        </Badge>
      ))}
    </div>
  ),
};
