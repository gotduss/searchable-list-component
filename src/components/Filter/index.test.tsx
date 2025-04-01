import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '.';

describe('Filter', () => {
  test('renders the input field with placeholder text', () => {
    render(<Filter value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  test('calls onChange when typing', () => {
    const mockOnChange = jest.fn();
    render(<Filter value="" onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'John' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('John');
  });

  test('renders with a search icon', () => {
    render(<Filter value="" onChange={() => {}} />);
    expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
  });
});