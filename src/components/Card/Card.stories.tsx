import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardSkeleton } from "./Card";
import { Badge } from "../Badge";
import { Icon } from "../../framework/icons";
import { IMAGE_OPTIONS } from "./card.image.options";

type ImageKey = keyof typeof IMAGE_OPTIONS;

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
    <div className="e-ui-flex e-ui-gap-small e-ui-flex-dir-column">
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
    <div className="e-ui-flex e-ui-gap-small e-ui-flex-dir-column">
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
    footerDate: "2025-09-10",
    variant: "outlined",
    size: "xs",
    density: "default",
  },
  render: ({
    showTitle,
    title,
    showDescription,
    description,
    showBadge,
    badgeText,
    showFooter,
    footerDate,
    ...cardProps
  }) => (
    <Card {...cardProps}>
      {showTitle && (
        <Card.Title className="e-ui-color_neutral-black e-ui-font-bold">
          {title}
        </Card.Title>
      )}

      {showDescription && (
        <Card.Description className="e-ui-color_medium-grey e-ui-text-12">
          {description}
        </Card.Description>
      )}

      {showBadge && <Badge variant="primary">{badgeText}</Badge>}

      {showFooter && (
        <Card.Footer>
          <Card.Meta
            className="e-ui-text-12 e-ui-color_medium-grey e-ui-font-semibold"
            icon={<Icon name="calendar" size="sm" color="currentColor" />}
          >
            {new Date(footerDate).toLocaleDateString("en-ZA", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Card.Meta>
        </Card.Footer>
      )}
    </Card>
  ),
};

export const WithImage: StoryObj<typeof Card> = {
  args: {
    imageKey: "Nature",
    showImage: true,
    showTitle: true,
    title: "Nature Retreat",
    showDescription: true,
    description:
      "Discover a curated nature experience crafted by our design and research teams.",
    showBadge: true,
    badgeText: "Nature",
    showFooter: true,
    footerDate: "Sept 5–7",
    variant: "outlined",
    size: "sm",
    density: "default",
  },
  argTypes: {
    imageKey: {
      name: "Image",
      control: "select",
      options: Object.keys(IMAGE_OPTIONS),
    },
    showImage: { control: "boolean" },
    showTitle: { control: "boolean" },
    title: { control: "text" },
    showDescription: { control: "boolean" },
    description: { control: "text" },
    showBadge: { control: "boolean" },
    badgeText: { control: "text" },
    showFooter: { control: "boolean" },
    footerDate: { control: "text" },
  },
  render: (args) => {
    const {
      imageKey,
      showImage,
      showTitle,
      title,
      showDescription,
      description,
      showBadge,
      badgeText,
      showFooter,
      footerDate,
      ...rest
    } = args;

    const imageSrc = IMAGE_OPTIONS[imageKey as ImageKey];

    return (
      <Card {...rest}>
        <>
          {showImage && (
            <Card.Image src={imageSrc} alt={`${imageKey} preview`} />
          )}

          {showTitle && (
            <Card.Title className="e-ui-font-semibold e-ui-text-14">
              {title}
            </Card.Title>
          )}

          {showDescription && (
            <Card.Description className="e-ui-text-12 e-ui-color_medium-grey">
              {description}
            </Card.Description>
          )}

          {showBadge && <Badge variant="primary">{badgeText}</Badge>}

          {showFooter && (
            <Card.Footer>
              <Card.Meta
                icon={<Icon name="calendar" size="sm" color="currentColor" />}
                className="e-ui-text-12 e-ui-color_medium-grey"
              >
                {footerDate}
              </Card.Meta>
            </Card.Footer>
          )}
        </>
      </Card>
    );
  },
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
  render: ({
    loading,
    prefix,
    size,
    density,
    showTitle,
    showDescription,
    showBadge,
    showFooter,
    ...rest
  }) => (
    <Card
      {...rest}
      loading={loading}
      skeleton={
        <CardSkeleton
          prefix={prefix}
          size={size}
          density={density}
          showTitle={showTitle}
          showDescription={showDescription}
          showBadge={showBadge}
          showFooter={showFooter}
        />
      }
    />
  ),
};
