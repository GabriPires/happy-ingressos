import { Meta, Story } from '@storybook/react';
import { LinkButton } from './LinkButton';

const meta: Meta = {
  title: 'Components/LinkButton',
  component: LinkButton,
};

export default meta;

const Template: Story = () => {
  return (
    <LinkButton href={'/'} title={'Example button'}>
      Example
    </LinkButton>
  );
};

export const Default = Template.bind({});
