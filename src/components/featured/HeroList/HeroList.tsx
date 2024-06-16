import Typography from "../../ui/Typography/Typography";
import FavoriteFilledIcon from "../../ui/icons/FavoriteFilledIcon";
import FavoriteIcon from "../../ui/icons/FavoriteIcon";
import "./HeroList.css";

type ItemProps = {
  id: number;
  title: string;
  imgSrc: string;
  isFavorite: boolean;
  handleClick: () => void;
}

const Item = ({ id, title, imgSrc, isFavorite, handleClick }: ItemProps) => {
  return (
    <div className="hero-list-item" id={`hero-list-item-${id}`} onClick={handleClick}>
      <img src={imgSrc} alt={title} />
      <button>
        <Typography color="secondary" size="sm">{title}</Typography>
        {
          isFavorite ?
            <FavoriteFilledIcon /> :
            <FavoriteIcon />
        }
      </button>
    </div>
  );
}

type HeroListProps = {
  children: React.ReactNode;
}

const HeroList = ({ children }: HeroListProps) => (
  <div id="hero-list" className="hero-list">
    {children}
  </div>
)

HeroList.Item = Item;
export default HeroList;