import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Filter Section title', () => {
  render(<App />);
  const filterTitle = screen.getByText(/Filter/i);
  expect(filterTitle).toBeInTheDocument();
});

test('renders Data Loading Section title', () => {
  render(<App />);
  const filterTitle = screen.getByText(/Data Loading Section/i);
  expect(filterTitle).toBeInTheDocument();
});

test('renders Data Display Section title', () => {
  render(<App />);
  const filterTitle = screen.getByText(/Data Display Section/i);
  expect(filterTitle).toBeInTheDocument();
});
