import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('All’avvio non ci sono commenti visibili', () => {
  render(<App />);
  const commenti = screen.queryAllByText(/⭐/i);
  expect(commenti.length).toBe(0);
});

test('Clic su un libro cambia il bordo a rosso', async () => {
  render(<App />);
  const book = await screen.findByTestId('book-0316438960');
  await userEvent.click(book);
  expect(book).toHaveStyle('border: 3px solid red');
});

test('Clic su secondo libro rimuove il bordo dal primo', async () => {
  render(<App />);
  const first = await screen.findByTestId('book-0316438960');
  const second = await screen.findByTestId('book-0316389706');
  await userEvent.click(first);
  expect(first).toHaveStyle('border: 3px solid red');
  await userEvent.click(second);
  expect(second).toHaveStyle('border: 3px solid red');
  expect(first).not.toHaveStyle('border: 3px solid red');
});