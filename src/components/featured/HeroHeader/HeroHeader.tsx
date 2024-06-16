import "./HeroHeader.css";
import Typography from "../../ui/Typography/Typography";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

type HeroHeaderProps = {
  imgSrc: string;
  title: string;
  description: string;
  isFavorite: boolean;
  handleFavoriteClick: () => void;
}

const HeroHeader = ({ imgSrc, title, description, isFavorite, handleFavoriteClick}: HeroHeaderProps) => (
  <div className="hero-header">
    <img src={imgSrc} alt={title} />
    <div className="hero-header__content">
      <div className="hero-header__content-title">
        <Typography type="h1" color="secondary">{title}</Typography>
        <FavoriteButton hasFavorite={isFavorite} handleClick={handleFavoriteClick} />
      </div>
      <Typography color="secondary">{description}</Typography>
    </div> 
  </div>
);

export default HeroHeader;