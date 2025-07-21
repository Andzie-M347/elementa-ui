import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "elevated"],
    },
    density: {
      control: "select",
      options: ["default", "compact"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm"],
    },
    isLoading: {
      control: "boolean",
    },
    // padding: { control: "text" },
    // radius: { control: "text" },
    prefix: { control: "text" },
    as: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "This is a card",
    variant: "default",
    // padding: "p-6",
    prefix: "e-ui",
    density: "default",
    size: "xs",
    isLoading: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      {["default", "outlined", "elevated"].map((v) => (
        <Card key={v} variant={v as any}>
          Variant: {v}
        </Card>
      ))}
    </div>
  ),
};

export const Densities: Story = {
  render: () => (
    <div className="">
      {["default", "compact"].map((d) => (
        <Card key={d} density={d as any}>
          Density: {d}
        </Card>
      ))}
    </div>
  ),
};

export const SkeletonState: Story = {
  args: {
    isLoading: true,
    variant: "outlined",
    padding: "p-4",
    radius: "rounded-md",
    size: "xs",
  },
};
