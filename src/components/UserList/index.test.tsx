import { render, screen } from '@testing-library/react';
import UserList from '.';
import { User } from './index.types';

// Mock the users data
const mockUsers: User[] = [
  {
    id: 1,
    name: 'Dianne Russell',
    email: 'dianne@example.com',
    imgUrl: 'img1',
    status: 'attended'
  },
  {
    id: 2,
    name: 'Ronald Richards',
    email: 'ronald@example.com',
    imgUrl: 'img2',
    status: 'attended'
  },
];

describe('UserList', () => {
  it('displays the accordion title', () => {
    render(<UserList title="Attended" users={mockUsers} displayEmail={false} />);
    expect(screen.queryByText('Attended')).toBeInTheDocument();
  });

  it('displays all user names', () => {
    render(<UserList title="Attended" users={mockUsers} displayEmail={true} />);
    expect(screen.queryByText('Dianne Russell')).toBeInTheDocument();
    expect(screen.queryByText('Ronald Richards')).toBeInTheDocument();
  });

  it('displays user emails when displayEmail is true', () => {
    render(<UserList title="Attended" users={mockUsers} displayEmail={true} />);
    expect(screen.queryByText('dianne@example.com')).toBeInTheDocument();
    expect(screen.queryByText('ronald@example.com')).toBeInTheDocument();
  });

  it('does not display user emails when displayEmail is false', () => {
    render(<UserList title="Attended" users={mockUsers} displayEmail={false} />);
    expect(screen.queryByText('dianne@example.com')).not.toBeInTheDocument();
    expect(screen.queryByText('ronald@example.com')).not.toBeInTheDocument();
  });
});
