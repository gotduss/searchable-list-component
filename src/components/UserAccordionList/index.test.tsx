import { render, screen } from '@testing-library/react';
import UserAccordionList from '.';
import { User } from '../UserList/index.types';

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
  it('renders two accordions with the expected titles', () => {
    render(<UserAccordionList users={mockUsers} />);
    expect(screen.getByText(/Attended/i)).toBeInTheDocument();
    expect(screen.getByText(/Absent/i)).toBeInTheDocument();
  });

  it('renders attended users in the Attended accordion', () => {
    render(<UserAccordionList users={mockUsers} />);
    expect(screen.getByText(/Dianne Russell/i)).toBeInTheDocument();
    expect(screen.getByText(/Ronald Richards/i)).toBeInTheDocument();
  });

  it('renders absent users in the Absent accordion', () => {
    render(<UserAccordionList users={mockUsers} />);
    expect(screen.getByText(/Jenny Wilson/i)).toBeInTheDocument();
    expect(screen.getByText(/Wade Warren/i)).toBeInTheDocument();
  });
});
