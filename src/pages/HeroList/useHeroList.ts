import { useNavigate, useOutletContext } from "react-router-dom";
import { RootContextType } from "../Layouts/RootLayout";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { fetchHeroes } from "../../services/api/api";

const useHeroList = (isFavoritePage?: boolean) => {
  const navigate = useNavigate();
  const { checkFavorite, favorites } = useOutletContext<RootContextType>();

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedValue = useDebounce(searchTerm);

  const { isLoading, data } = useQuery({
    queryKey: ['heroes', debouncedValue],
    queryFn:() => fetchHeroes(debouncedValue),
    enabled: !isFavoritePage,
  });
  
  const goToHeroDetails = (heroId: number) => {
    navigate(`/heroes/${heroId}`);
  };

  return {
    goToHeroDetails,
    heroes: isFavoritePage ? favorites : data?.results || [],
    heroesCount: isFavoritePage ? favorites.length : data?.results.length || 0,
    checkFavorite,
    isLoading,
    data,
    setSearchTerm,
  }
}

export default useHeroList;
