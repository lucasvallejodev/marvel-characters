import { useNavigate } from "react-router-dom";
import { fetchHeroes } from "../../services/api/api";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['heroes'],
    queryFn: fetchHeroes,
  });
  const navigate = useNavigate();
  const goToHeroDetails = (heroId: number) => {
    console.log(`clicked ${heroId}`);
    navigate(`/heroes/${heroId}`);
  };

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <ul>
      {data?.map((hero) => (
        <li key={hero.id} onClick={() => goToHeroDetails(hero.id)}>{hero.name}</li>
      ))}
    </ul>
  )
}

export default HomePage;