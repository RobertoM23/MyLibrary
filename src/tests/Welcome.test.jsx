import { render, screen } from '@testing-library/react';
import Welcome from '../components/Welcome';

test('Il componente Welcome viene montato correttamente', () => {
  render(<Welcome />);
  expect(screen.getByText(/benvenuto su epibooks/i)).toBeInTheDocument();
});