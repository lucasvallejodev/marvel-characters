import "./FavoriteButton.css";
import FavoriteFilledIcon from "../../ui/icons/FavoriteFilledIcon";
import FavoriteIcon from "../../ui/icons/FavoriteIcon";

const BUTTON_HEIGHT = 22;
const BUTTON_WIDTH = 24;

type FavoriteButtonProps = {
  hasFavorite: boolean;
  count: number;
  handleClick: () => void;
};

const FavoriteButton = ({ hasFavorite, handleClick, count }: FavoriteButtonProps ) => {
  return (
    <button className="favorite-button" onClick={handleClick}>
      {
        hasFavorite ?
          <FavoriteFilledIcon height={BUTTON_HEIGHT} width={BUTTON_WIDTH} /> :
          <FavoriteIcon  height={BUTTON_HEIGHT} width={BUTTON_WIDTH} />
      }
      {!!count && <span>{count}</span>}
    </button>
  );
}

export default FavoriteButton;