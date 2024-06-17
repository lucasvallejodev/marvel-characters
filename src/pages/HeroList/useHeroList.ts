import { useNavigate, useOutletContext } from "react-router-dom";
import { RootContextType } from "../Layouts/RootLayout";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { fetchHeroes } from "../../services/api/api";

export const useHeroList = (isFavoritePage?: boolean) => {
  const navigate = useNavigate();
  const { checkFavorite, favorites } = useOutletContext<RootContextType>();
  const [filteredFavorites, setFilteredFavorites] = useState(favorites);

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedValue = useDebounce(searchTerm);

  const { isLoading, data } = useQuery({
    queryKey: ['heroes', debouncedValue],
    queryFn:() => fetchHeroes(debouncedValue),
    enabled: !isFavoritePage,
  });

  useEffect(() => {
    if (isFavoritePage) {
      setFilteredFavorites(
        favorites.filter((hero) => hero.name.toLowerCase().includes(debouncedValue.toLowerCase()))
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites, debouncedValue]);
  
  const goToHeroDetails = (heroId: number) => {
    navigate(`/heroes/${heroId}`);
  };

  return {
    goToHeroDetails,
    heroes: isFavoritePage ? filteredFavorites : data?.results || [],
    heroesCount: isFavoritePage ? filteredFavorites.length : data?.results.length || 0,
    checkFavorite,
    isLoading,
    data,
    setSearchTerm,
  }
}
