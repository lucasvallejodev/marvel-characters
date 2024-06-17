import { useLoaderData, useOutletContext } from "react-router-dom";
import { HeroLoaderData } from "./heroLoader";
import { useQuery } from "@tanstack/react-query";
import { fetchHero, getComicByHero } from "../../services/api/api";
import { RootContextType } from "../Layouts/RootLayout";

const useHero = () => {
  const { heroId } = useLoaderData() as HeroLoaderData;
  const { isLoading, data } = useQuery({
    queryKey: ['hero', heroId],
    queryFn: () => Promise.all([fetchHero(heroId), getComicByHero(heroId)]),
  });
  const [hero, comics] = data || [undefined, []];

  const { checkFavorite, setFavorite, removeFavorite } = useOutletContext<RootContextType>();
  const isFavorite = checkFavorite(hero?.id || 0);

  const getYearFromComicName = (name: string) => name.match(/\((\d{4})\)/)?.[1] || "";

  return {
    isLoading,
    hero,
    comics,
    isFavorite,
    setFavorite,
    removeFavorite,
    getYearFromComicName,
  }
}

export default useHero;