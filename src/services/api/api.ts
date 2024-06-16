import axios, { AxiosResponse } from "axios";
import heroesJsonMock from "../../mocks/heroes-response.json";
import { ApiResponse, DataResponse, Hero } from "../../types";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

type HeroResponse = AxiosResponse<ApiResponse<DataResponse<Hero>>>;

const getHeroesFromResponse = (response: HeroResponse): Hero[] => {
  const { data } = response;
    const heroes = data.data.results;

    if (!heroes.length) {
      return [];
    }

    return heroes;
}
  

export const fetchHeroes = async () => {
  const heroesMock = JSON.parse(JSON.stringify(heroesJsonMock)) as ApiResponse<DataResponse<Hero>>;
  return heroesMock.data.results;
  try {
    const result = await axios.get<null, HeroResponse>(`${BASE_URL}/characters?apikey=${API_KEY}`);
    return getHeroesFromResponse(result);
  } catch (error) {
    throw new Error("Error fetching heroes");
  }
}

export const fetchHero = async (id: string) => {
  const result = await axios.get(`${BASE_URL}/characters/${id}?apikey=${API_KEY}`);
  const heroes = getHeroesFromResponse(result);

  if (!heroes.length) {
    throw new Error("No heroe found");
  }

  return heroes[0];
}
