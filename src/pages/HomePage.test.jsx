import HomePage from './HomePage';
import { render, screen } from '@testing-library/react';

describe('HomePage', () => {
  test('renders the title', () => {
    render(<HomePage />);
    const title = screen.getByRole('heading', { name: 'Todo List' });
    expect(title).toBeInTheDocument();
  });

  test('renders the input', () => {
    render(<HomePage />);
    const input = screen.getByRole('textbox', { name: 'New task' });
    expect(input).toBeInTheDocument();
  });
});
