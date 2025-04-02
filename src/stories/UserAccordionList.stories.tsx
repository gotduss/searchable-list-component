import type { Meta, StoryObj } from '@storybook/react';
import UserAccordionList from '../components/UserAccordionList';
import { UserAccordionListProps } from '../components/UserAccordionList/index.types';
import { users } from '../data/users';
import '../index.css';

const meta = {
  title: 'Components/UserAccordionList',
  component: UserAccordionList,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### UserAccordionList Component
This component displays a filterable list of users divided into two accordions with customisable title.

### Importing the component
Use the following import if you are inside the components directory

\`\`\`
import UserAccordionList from "../UserAccordionList";
\`\`\`

Use the following import if you are in a directory that is at the component's level such as stories

\`\`\`
import UserAccordionList from '../components/UserAccordionList';
\`\`\`

### Usage of the component with its props
\`\`\`tsx
<UserAccordionList
  users={users}
  attendedTitle="Attended"
  absentTitle="Absent"
  displayEmail={false}
/>
\`\`\`
### Available props
The component accepts the following props:
- \`users\`: array of user objects
- \`attendedTitle\`: title for the attended accordion (default: "Attended")
- \`absentTitle\`: title for the absent accordion (default: "Absent")
- \`showEmail\`: boolean to display the user's email (default: true)
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    attendedTitle: { control: 'text' },
    absentTitle: { control: 'text' },
    displayEmail: { control: 'boolean' },
  },
  args: {
    users,
    attendedTitle: 'Attended',
    absentTitle: 'Absent',
    displayEmail: false,
  } as UserAccordionListProps,
} satisfies Meta<typeof UserAccordionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    users,
  },
};

export const CustomAccordionTitles: Story = {
  args: {
    attendedTitle: 'Present',
    absentTitle: 'Missing',
  },
};

export const UserListWithEmail: Story = {
  args: {
    displayEmail: true,
  },
};
