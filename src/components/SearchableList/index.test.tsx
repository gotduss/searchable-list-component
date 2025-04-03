import { render, screen } from '@testing-library/react';
import SearchableList from '.';

describe('SearchableList', () => {
  it('displays two accordions with the correct titles', () => {
    render(<SearchableList />);
    expect(screen.queryByText('Attended')).toBeInTheDocument();
    expect(screen.queryByText('Absent')).toBeInTheDocument();
  });
});
