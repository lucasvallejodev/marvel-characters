import { RefObject } from "react";
import useHorizontalScroll from "../../../hooks/useHorizontalScroll";
import Typography from "../../ui/Typography/Typography";
import "./ComicList.css";

type ItemProps = {
  id: string;
  title: string;
  year: string;
  imgSrc: string;
}

const Item = ({ id, title, year, imgSrc }: ItemProps) => {
  return (
    <div className="comic-list-item" id={`comic-list-item-${id}`}>
      <img src={imgSrc} alt={title} />
      <div className="comic-list-item__title">
        <Typography type="h3">{title}</Typography>
        <Typography size="sm">{year}</Typography>
      </div>
    </div>
  );
}

type ComicListProps = {
  children: React.ReactNode;
}

const ComicList = ({ children }: ComicListProps) => {
  const scrollRef: RefObject<HTMLDivElement> = useHorizontalScroll();
  return (
    <div id="comic-list" className="comic-list">
      <Typography type="h2">COMICS</Typography>
      <div ref={scrollRef} id="comic-list-container" className="comic-list__container">
        {children}
      </div>
    </div>
  )
}

ComicList.Item = Item;
export default ComicList;