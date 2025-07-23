import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card, CardSkeleton } from "./Card";
import { Badge } from "../Badge";
import { Icon } from "../../framework/icons";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "elevated"],
    },
    density: {
      control: "select",
      options: ["default", "compact"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm"],
    },
    loading: {
      control: "boolean",
    },
    prefix: { control: "text" },
    as: { control: "text" },

    // Skeleton toggles
    showTitle: { control: "boolean" },
    showDescription: { control: "boolean" },
    showBadge: { control: "boolean" },
    showFooter: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "This is a card",
    variant: "outlined",
    prefix: "e-ui",
    density: "default",
    size: "xs",
    loading: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      {["outlined", "elevated"].map((v) => (
        <Card key={v} variant={v as any}>
          Variant: {v}
        </Card>
      ))}
    </div>
  ),
};

export const Densities: Story = {
  render: () => (
    <div className="space-y-4">
      {["default", "compact"].map((d) => (
        <Card key={d} density={d as any}>
          Density: {d}
        </Card>
      ))}
    </div>
  ),
};

export const WithBadgeAndFooter: Story = {
  args: {
    showTitle: true,
    title: "New Research Project",
    showDescription: true,
    description:
      "Explore insights from our most recent studies in UX engineering.",
    showBadge: true,
    badgeText: "Research",
    showFooter: true,
    footerDate: "Tomorrow",
    variant: "outlined",
    size: "xs",
    density: "default",
  },
  render: (args) => (
    <Card {...args}>
      <>
        {args.showTitle && (
          <Card.Title className="e-ui-color_neutral-black e-ui-font-bold">
            {args.title}
          </Card.Title>
        )}

        {args.showDescription && (
          <Card.Description className="e-ui-color_medium-grey e-ui-text-12">
            {args.description}
          </Card.Description>
        )}

        {args.showBadge && <Badge variant="primary">{args.badgeText}</Badge>}

        {args.showFooter && (
          <Card.Footer>
            <Card.Meta
              className="e-ui-text-12 e-ui-color_medium-grey e-ui-font-semibold"
              icon={<Icon name="calendar" size="sm" color="currentColor" />}
            >
              {new Date(args.footerDate).toLocaleDateString()}
            </Card.Meta>
          </Card.Footer>
        )}
      </>
    </Card>
  ),
};

export const SkeletonStates: Story = {
  args: {
    loading: true,
    variant: "outlined",
    density: "default",
    size: "xs",
    prefix: "e-ui",
    showTitle: true,
    showDescription: true,
    showBadge: true,
    showFooter: true,
  },
  render: (args) => (
    <Card
      {...args}
      skeleton={
        <CardSkeleton
          prefix={args.prefix}
          size={args.size}
          density={args.density}
          showTitle={args.showTitle}
          showDescription={args.showDescription}
          showBadge={args.showBadge}
          showFooter={args.showFooter}
        />
      }
    />
  ),
};
