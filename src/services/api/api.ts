import axios, { AxiosResponse } from "axios";
import { ApiResponse, DataResponse, Hero } from "../../types";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const MIN_QUERY_LENGTH = 3;

type HeroResponse = AxiosResponse<ApiResponse<DataResponse<Hero>>>;

const getParsedResponse = (response: HeroResponse): DataResponse<Hero> => {
  const { data } = response;
    const result = data.data;
    return result;
}

export const fetchHeroes = async (searchTerm?: string) => {
  try {
    const searchQuery = searchTerm && searchTerm.length >= MIN_QUERY_LENGTH ? `&nameStartsWith=${searchTerm}` : "";
    const result = await axios.get<null, HeroResponse>(`${BASE_URL}/characters?apikey=${API_KEY}&limit=50${searchQuery}`);
    return getParsedResponse(result);
  } catch (error) {
    throw new Error("Error fetching heroes");
  }
}

export const fetchHero = async (id: string) => {
  const result = await axios.get(`${BASE_URL}/characters/${id}?apikey=${API_KEY}`);
  const parsedResponse = getParsedResponse(result);

  if (!parsedResponse.results.length) {
    throw new Error("No heroe found");
  }

  return parsedResponse.results[0];
}
