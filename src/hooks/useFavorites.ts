import { useEffect, useState } from "react";
import { Hero } from "../types";

export type FavoriteIdDictionary = { [key: string]: boolean };

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Hero[]>([]);
  const [favoritesIds, setFavoritesIds] = useState<FavoriteIdDictionary>({});

  const getFavorites = (): Hero[] => {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  }

  const setFavorite = (hero: Hero) => {
    const favorites = getFavorites();
    const newFavorites = [...favorites, hero];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  }

  const removeFavorite = (id: number) => {
    const favorites = getFavorites();
    const newFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  }

  const checkFavorite = (id: number) => favoritesIds[id];

  useEffect(() => {
    const result = getFavorites();
    setFavorites(result);
  }, []);

  useEffect(() => {
    setFavoritesIds(favorites.reduce((dictionary: FavoriteIdDictionary, favorite) => {
      const id = favorite.id.toString();
      dictionary[id] = true;
      return dictionary;
    }, {}));
  }, [favorites, favorites.length]);

  return {
    favorites,
    count: favorites.length,
    favoritesIds,
    checkFavorite,
    setFavorite,
    removeFavorite
  }
}

export default useFavorites;