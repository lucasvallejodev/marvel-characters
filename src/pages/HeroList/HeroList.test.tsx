import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react';
import HeroListPage from './HeroList';

vi.mock('./useHeroList', () => ({
  useHeroList: () => ({
    heroes: [
      {
        id: '1',
        name: 'Test Hero 1',
        thumbnail: { path: 'test-path-1', extension: 'jpg' },
      },
      {
        id: '2',
        name: 'Test Hero 2',
        thumbnail: { path: 'test-path-2', extension: 'jpg' },
      },
      {
        id: '3',
        name: 'Test Hero 3',
        thumbnail: { path: 'test-path-3', extension: 'jpg' },
      },
    ],
    heroesCount: 3,
    isLoading: false,
    checkFavorite: vi.fn(),
    goToHeroDetails: vi.fn(),
    setSearchTerm: vi.fn(),
  }),
}));

describe('HeroListPage', () => {
  it('renders heroes list page', () => {
    render(<HeroListPage />);

    expect(screen.getByText('Test Hero 1')).toBeDefined();
    expect(screen.getByText('Test Hero 2')).toBeDefined();
    expect(screen.getByText('Test Hero 3')).toBeDefined();
  });

  it('renders favorites page', () => {
    render(<HeroListPage isFavoritePage />);

    expect(screen.getByRole('heading',
      {
        name: 'Favorites',
        level: 2,
      }
    )).toBeDefined();
  });
});