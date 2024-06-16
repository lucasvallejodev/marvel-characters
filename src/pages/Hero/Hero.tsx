import { LoadingBar } from "../../components";
import HeroHeader from "../../components/featured/HeroHeader/HeroHeader";
import useHero from "./useHero";

const HeroPage = () => {
  const { 
    isLoading,
    data,
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
        data && (
          <HeroHeader
            imgSrc={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            title={data.name}
            description={data.description}
            isFavorite={isFavorite}
            handleFavoriteClick={() => isFavorite ? removeFavorite(data.id) : setFavorite(data)}
          />
        )
      }
    </>
  )
}

export default HeroPage;