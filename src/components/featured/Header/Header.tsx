import "./Header.css";
import Logo from "../../ui/icons/LogoIcon";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

type HeaderProps = {
  handleLogoClick: () => void;
  handleFavoriteClick: () => void;
  favoriteCount: number;
}

const Header = ({ handleLogoClick, handleFavoriteClick, favoriteCount }: HeaderProps) => {
  return (
    <div className="header">
      <div onClick={handleLogoClick}>
        <Logo className="cursor-pointer" />
      </div>
      <FavoriteButton count={favoriteCount} hasFavorite={!!favoriteCount} handleClick={handleFavoriteClick} />
    </div>
  );
}

export default Header;