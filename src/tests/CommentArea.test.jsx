import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { vi } from 'vitest';

const mockComments = [
  {
    _id: 'abc123',
    comment: 'Test commento mockato',
    rate: '5',
    author: 'Tester'
  }
];

beforeEach(() => {
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => mockComments
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

test('Cliccando su un libro, i commenti vengono caricati e mostrati nel DOM', async () => {
  render(<App />);
  const testAsin = '0316438960';
  const bookCard = await screen.findByTestId(`book-${testAsin}`);
  await userEvent.click(bookCard);
  const commento = await screen.findByText(/test commento mockato/i);
  const rate = screen.getByText(/⭐ 5\/5/);
  expect(commento).toBeInTheDocument();
  expect(rate).toBeInTheDocument();
});

test('Il componente CommentArea viene montato correttamente', async () => {
  render(<App />);
  const testAsin = '0316438960';
  const bookCard = await screen.findByTestId(`book-${testAsin}`);
  await userEvent.click(bookCard);
  expect(await screen.findByRole('heading', { name: /recensioni/i })).toBeInTheDocument();
});