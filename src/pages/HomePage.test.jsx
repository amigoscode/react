import HomePage from './HomePage';
import { render, screen } from '@testing-library/react';

test('renders HomePage', () => {
  render(<HomePage />);
  screen.debug();
});
