import { ComicList, LoadingBar } from "../../components";
import HeroHeader from "../../components/featured/HeroHeader/HeroHeader";
import { getYearFromComicName } from "../../utils/getYearFromComicName";
import { useHero } from "./useHero";

const HeroPage = () => {
  const { 
    isLoading,
    hero,
    comics,
    isFavorite,
    setFavorite,
    removeFavorite,
  } = useHero();

  return (
    <>
      {
        isLoading &&
        <LoadingBar />
      }
      {
        hero && (
          <>
            <HeroHeader
              imgSrc={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              title={hero.name}
              description={hero.description}
              isFavorite={isFavorite}
              handleFavoriteClick={() => isFavorite ? removeFavorite(hero.id) : setFavorite(hero)}
            />
            {
              !!comics.length &&
              <ComicList>
                {comics.map((comic) => (
                  <ComicList.Item
                    key={`comic-${comic.id}`}
                    id={`comic-${comic.id}`}
                    title={comic.title}
                    year={getYearFromComicName(comic.title)}
                    imgSrc={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  />
                ))}
              </ComicList>
            }
          </>
        )
      }
    </>
  )
}

export default HeroPage;