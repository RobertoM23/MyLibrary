import { render, screen } from '@testing-library/react';
import BookList from '../components/BookList';
import fantasy from '../data/fantasy.json';

test('Renderizza tante card quanti sono i libri', () => {
  render(<BookList books={fantasy} onBookSelect={() => {}} selectedAsin={null} />);
  const images = screen.getAllByRole('img');
  expect(images.length).toBe(fantasy.length);
});