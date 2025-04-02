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
  it('renders the accordion title', () => {
    render(<UserList title="Attended" users={mockUsers} displayEmail={false} />);
    expect(screen.getByText(/Attended/i)).toBeInTheDocument();
  });

  it('renders all user names', () => {
    render(<UserList title="Attended" users={mockUsers} displayEmail={true} />);
    expect(screen.getByText(/Dianne Russell/i)).toBeInTheDocument();
    expect(screen.getByText(/Ronald Richards/i)).toBeInTheDocument();
  });

  it('renders user emails', () => {
    render(<UserList title="Attended" users={mockUsers} displayEmail={true} />);
    expect(screen.getByText(/dianne@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/ronald@example.com/i)).toBeInTheDocument();
  });
});
