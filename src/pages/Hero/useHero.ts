import { useLoaderData, useOutletContext } from "react-router-dom";
import { HeroLoaderData } from "./heroLoader";
import { useQuery } from "@tanstack/react-query";
import { fetchHero } from "../../services/api/api";
import { RootContextType } from "../Layouts/RootLayout";

const useHero = () => {
  const { heroId } = useLoaderData() as HeroLoaderData;
  const { isLoading, data } = useQuery({
    queryKey: ['hero', heroId],
    queryFn: () => fetchHero(heroId),
  });
  const { checkFavorite, setFavorite, removeFavorite } = useOutletContext<RootContextType>();
  const isFavorite = checkFavorite(data?.id || 0);

  return {
    isLoading,
    data,
    isFavorite,
    setFavorite,
    removeFavorite,
  }
}

export default useHero;