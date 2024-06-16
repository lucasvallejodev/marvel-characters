import { HeroList, LoadingBar, SearchInput, Typography } from "../../components";
import useHeroList from "./useHeroList";

type HeroListPageProps = {
  isFavoritePage?: boolean;
};

const HeroListPage = ({ isFavoritePage }: HeroListPageProps) => {
  const {
    checkFavorite,
    goToHeroDetails,
    isLoading,
    heroes,
    heroesCount,
    setSearchTerm,
  } = useHeroList(isFavoritePage);

  return (
    <>
      {
        isLoading &&
        <LoadingBar />
      }
      <div className="container">
        {
          isFavoritePage && <Typography type="h2">Favorites</Typography>
        }
        <SearchInput count={heroesCount} onChange={setSearchTerm} />
        <HeroList>
          {heroes.map((hero) => (
            <HeroList.Item
              key={hero.id}
              id={hero.id}
              imgSrc={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              title={hero.name}
              isFavorite={checkFavorite(hero.id)}
              handleClick={() => goToHeroDetails(hero.id)}
            />
          ))}
        </HeroList>
      </div>
    </>
  )
}

export default HeroListPage;