import { Meta, Story } from '@storybook/react';
import { EventCard } from './EventCard';

const meta: Meta = {
  title: 'Components/EventCard',
  component: EventCard,
};

export default meta;

const Template: Story = () => {
  return <EventCard />;
};

export const Default = Template.bind({});
