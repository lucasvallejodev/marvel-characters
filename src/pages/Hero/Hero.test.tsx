import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

vi.mock('./useHero', () => ({
  useHero: () => ({
    hero: {
      id: 1,
      name: 'Test Hero',
      description: 'Test Hero Description',
      thumbnail: { path: 'test-path', extension: 'jpg' },
    },
    isLoading: false,
    isFavorite: false,
    setFavorite: vi.fn(),
    removeFavorite: vi.fn(),
    getYearFromComicName: vi.fn(),
    comics: [
      {
        id: 1,
        title: "Comic 1 (1992) the empire returns",
        thumbnail: {
          path: 'comic-1-test-path', extension: 'jpg'
        }
      },
      {
        id: 2,
        title: "Comic 2 (2003) the empire strikes back",
        thumbnail: {
          path: 'comic-2-test-path', extension: 'jpg'
        }
      }
    ]
  }),
}));

describe('HeroPage', () => {
  it('renders header section', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', {
      name: "Test Hero",
      level: 1,
    })).toBeDefined();
    expect(screen.getByText('Test Hero Description')).toBeDefined();
  });

  it('renders comics section', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', {
      name: "COMICS",
      level: 2,
    })).toBeDefined();

    expect(screen.getByRole('heading', {
      name: "Comic 1 (1992) the empire returns",
      level: 3,
    })).toBeDefined();
    expect(screen.getByText('1992')).toBeDefined();

    expect(screen.getByRole('heading', {
      name: "Comic 2 (2003) the empire strikes back",
      level: 3,
    })).toBeDefined();
    expect(screen.getByText('2003')).toBeDefined();
  });
});