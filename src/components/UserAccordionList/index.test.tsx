import { render, screen } from '@testing-library/react';
import UserAccordionList from '.';
import { User } from '../UserList/index.types';

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
  {
    id: 3,
    name: 'Jenny Wilson',
    email: 'jenny@example.com',
    imgUrl: 'img3',
    status: 'attended'
  },
  {
    id: 4,
    name: 'Wade Warren',
    email: 'wade@example.com',
    imgUrl: 'img4',
    status: 'attended'
  },
];

describe('UserAccordionList', () => {
  it('displays two accordions with the correct titles', () => {
    render(<UserAccordionList users={mockUsers} displayEmail={true} />);
    expect(screen.queryByText('Attended')).toBeInTheDocument();
    expect(screen.queryByText('Absent')).toBeInTheDocument();
  });

  it('displays attended users in the Attended accordion', () => {
    render(<UserAccordionList users={mockUsers} displayEmail={false} />);
    expect(screen.queryByText('Dianne Russell')).toBeInTheDocument();
    expect(screen.queryByText('Ronald Richards')).toBeInTheDocument();
  });

  it('displays absent users in the Absent accordion', () => {
    render(<UserAccordionList users={mockUsers} displayEmail={true} />);
    expect(screen.queryByText('Jenny Wilson')).toBeInTheDocument();
    expect(screen.queryByText('Wade Warren')).toBeInTheDocument();
  });
  
  it('displays user emails when displayEmail is true', () => {
    render(<UserAccordionList users={mockUsers} displayEmail={true} />);
    expect(screen.queryByText('dianne@example.com')).toBeInTheDocument();
    expect(screen.queryByText('ronald@example.com')).toBeInTheDocument();
    expect(screen.queryByText('jenny@example.com')).toBeInTheDocument();
    expect(screen.queryByText('wade@example.com')).toBeInTheDocument();
  });

  it('does not display user emails when displayEmail is false', () => {
    render(<UserAccordionList users={mockUsers} displayEmail={false} />);
    expect(screen.queryByText('dianne@example.com')).not.toBeInTheDocument();
    expect(screen.queryByText('ronald@example.com')).not.toBeInTheDocument();
    expect(screen.queryByText('jenny@example.com')).not.toBeInTheDocument();
    expect(screen.queryByText('wade@example.com')).not.toBeInTheDocument();
  });
});
