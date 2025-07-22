import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "./Card";
import { Badge } from "../Badge";
import { Icon } from "../../framework/icons";

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

export const WithBadgeAndFooter: Story = {
  args: {
    variant: "outlined",
    padding: "default",
    size: "xs",
    // radius: "rounded",
    density: "default",
    children: (
      <>
        <Card.Title className="e-ui-color_neutral-black e-ui-font-bold">
          New Research Project
        </Card.Title>
        <Card.Description className="e-ui-color_medium-grey e-ui-text-12">
          Explore insights from our most recent studies in UX engineering.
        </Card.Description>
        <Badge variant="primary">Research</Badge>
        <Card.Footer>
          <Card.Meta
            className="e-ui-text-12 e-ui-color_medium-grey e-ui-font-semibold"
            icon={<Icon name="calendar" size="sm" color="currentColor" />}
          >
            Tomorrow
          </Card.Meta>
        </Card.Footer>
      </>
    ),
  },
};
