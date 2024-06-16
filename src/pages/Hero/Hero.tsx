import { useLoaderData } from "react-router-dom";
import { HeroLoaderData } from "./heroLoader";
import { fetchHero } from "../../services/api/api";
import { useQuery } from "@tanstack/react-query";

const HeroPage = () => {
  const { heroId } = useLoaderData() as HeroLoaderData;

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['hero', heroId],
    queryFn: () => fetchHero(heroId),
  })

  if (!data) {
    return <h1>Hero not found</h1>
  }

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <h1>Hero Page: {data?.name}</h1>
  )
}

export default HeroPage;