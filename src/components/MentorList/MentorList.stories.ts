import type { Meta, StoryObj } from '@storybook/react';

import { MentorList } from './MentorList.component';
import { mentorCards } from '../../__mocks__/mentorCards';

const meta: Meta<typeof MentorList> = {
  title: 'Mentor List',
  component: MentorList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ListWithData: Story = {
  args: {
    mentors: [...mentorCards, ...mentorCards],
  },
};
export const EmptyList: Story = {};
