import { Meta, Story } from '@storybook/react';
import { EventCard, EventCardProps } from './EventCard';

const meta: Meta = {
  title: 'Components/EventCard',
  component: EventCard,
};

export default meta;

const Template: Story<EventCardProps> = (args) => {
  return <EventCard {...args} />;
};

export const Default = Template.bind({
  variant: 'small',
});
