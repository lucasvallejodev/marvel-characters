// import { useNavigate } from "react-router-dom";
import { HeroList } from "../../components";
import { fetchHeroes } from "../../services/api/api";
import { useQuery } from "@tanstack/react-query";

const HeroListPage = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['heroes'],
    queryFn: fetchHeroes,
  });
  // const navigate = useNavigate();
  const goToHeroDetails = (heroId: number) => {
    console.log(`clicked ${heroId}`);
    // navigate(`/heroes/${heroId}`);
  };

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    // <div>
    //   {
    //     data?.length ? (
    //       <Card id={data[0].id} title={data[0].name} isFavorite={false} imgSrc={`${data[0].thumbnail.path}.${data[0].thumbnail.extension}`} />
    //     ) : null
    //   }
    // </div>
    <div className="container">
      <HeroList>  
        {data?.map((hero) => (
          <HeroList.Item
            key={hero.id}
            id={hero.id}
            imgSrc={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            title={hero.name}
            isFavorite={false}
            handleClick={() => goToHeroDetails(hero.id)}
          />
        ))}
      </HeroList>
    </div>
  )
}

export default HeroListPage;