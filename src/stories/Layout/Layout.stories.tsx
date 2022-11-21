import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout from './Layout';

export default {
  title: 'Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  navItems: [{ label: 'test', href: 'test' }],
  selectedCurrency: 'USD',
  currencyOptions: ['USD', 'UAH'],
  onSelectCurrency: () => ({})
};
