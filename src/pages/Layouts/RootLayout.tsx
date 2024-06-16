import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../components";
import useFavorites, { FavoriteIdDictionary } from "../../hooks/useFavorites";
import { Hero } from "../../types";

export type RootContextType = {
  favorites: Hero[];
  setFavorite: (hero: Hero) => void;
  removeFavorite: (heroId: number) => void;
  checkFavorite: (id: number) => boolean;
  favoritesIds: FavoriteIdDictionary;
};

const RootLayout = () => {
  const { count, setFavorite, removeFavorite, checkFavorite, favoritesIds, favorites } = useFavorites();
  const navigate = useNavigate();
  const redirectToHome = () => navigate("/");
  const redirectToFavorite = () => navigate("/favorites");
  return (
    <div>
      <Header handleLogoClick={redirectToHome} handleFavoriteClick={redirectToFavorite} favoriteCount={count} />
      <Outlet context={{ setFavorite, removeFavorite, checkFavorite, favorites, favoritesIds }} />
    </div>
  );
}

export default RootLayout;