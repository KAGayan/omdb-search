import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from 'components/ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Message = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Message.args = {
  type: 'message',
  message: 'banner message',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'banner message error',
};
