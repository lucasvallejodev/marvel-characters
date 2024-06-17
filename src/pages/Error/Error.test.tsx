import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ErrorPage from './Error';

const MOCK_ERROR_MESSAGE = "something happened error";

vi.mock('react-router-dom', () => ({
  useRouteError: (): Readonly<{ message: string }> => ({ message: MOCK_ERROR_MESSAGE }),
}));

describe('ErrorPage', () => {
  it('renders without crashing', () => {
    render(<ErrorPage />);

    expect(screen.getByRole('heading', {
      name: "Oops!",
      level: 1,
    })).toBeDefined();
    expect(screen.getByText('Sorry, an unexpected error has occurred.')).toBeDefined();
    expect(screen.getByText(MOCK_ERROR_MESSAGE)).toBeDefined();
  });
});
