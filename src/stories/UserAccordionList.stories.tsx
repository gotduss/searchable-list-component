import type { Meta, StoryObj } from '@storybook/react';
import UserAccordionList from '../components/UserAccordionList';
import { UserAccordionListProps } from '../components/UserAccordionList/index.types';
import { UserListProps } from '../components/UserList/index.types';
import { users } from '../data/users';

const meta = {
  title: 'Components/UserAccordionList',
  component: UserAccordionList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    users,
  } as UserAccordionListProps,
} satisfies Meta<typeof UserAccordionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    users,
  },
};
