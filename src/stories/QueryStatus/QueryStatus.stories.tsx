import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import QueryStatus from './QueryStatus';

export default {
  title: 'QueryStatus',
  component: QueryStatus,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof QueryStatus>;

const Template: ComponentStory<typeof QueryStatus> = (args) => <QueryStatus {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  isLoading: true,
  error: '',
  children: <div>result</div>
};
