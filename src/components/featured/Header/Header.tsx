import "./Header.css";
import Logo from "../../ui/icons/LogoIcon";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

type HeaderProps = {
  handleClick: () => void;
}

const Header = ({ handleClick}: HeaderProps) => {
  return (
    <div className="header">
      <div onClick={handleClick}>
        <Logo className="cursor-pointer" />
      </div>
      <FavoriteButton count={3} hasFavorite={true} handleClick={() => null} />
    </div>
  );
}

export default Header;