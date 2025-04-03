import { render, screen } from '@testing-library/react';
import User from '.';
import { UserProps } from './index.types';

describe('User', () => {
  const userProps: UserProps = {
    name: 'Dianne Russell',
    email: 'dianne@hotmail.com',
    imgUrl: '/img1.png',
    displayEmail: true,
  }

  it('displays the user name', () => {
    render(<User {...userProps} />);
    expect(screen.queryByText('Dianne Russell')).toBeInTheDocument();
  });

  it('displays the user email when displayEmail is true', () => {
    render(<User {...userProps} />);
    expect(screen.queryByText('dianne@hotmail.com')).toBeInTheDocument();
  });

  it('does not display the user email when displayEmail is false', () => {
    render(<User {...userProps} displayEmail={false} />);
    expect(screen.queryByText('dianne@hotmail.com')).not.toBeInTheDocument();
  });

  it('displays the user image with correct attributes', () => {
    render(<User {...userProps} />);
    const userImg = screen.getByAltText('Dianne Russell');
    expect(userImg).toHaveAttribute('src', userProps.imgUrl);
  });
});
