import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  username: 'John Doe',
};