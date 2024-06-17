import axios, { AxiosResponse } from "axios";
import { ApiResponse, DataResponse, Hero } from "../../types";
import { Comic } from "../../types/Comic";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const MIN_QUERY_LENGTH = 3;

type HeroResponse = AxiosResponse<ApiResponse<DataResponse<Hero>>>;
type ComicsResponse = AxiosResponse<ApiResponse<DataResponse<Comic>>>;

type HeroData = DataResponse<Hero>;
type ComicData = DataResponse<Comic>;

const getParsedResponse = <T>(response: AxiosResponse<ApiResponse<T>>): T => {
  const { data } = response as AxiosResponse<ApiResponse<T>>;
  const result = data.data;
  return result;
}

export const fetchHeroes = async (searchTerm?: string) => {
  try {
    const searchQuery = searchTerm && searchTerm.length >= MIN_QUERY_LENGTH ? `&nameStartsWith=${searchTerm}` : "";
    const result = await axios.get<null, HeroResponse>(`${BASE_URL}/characters?apikey=${API_KEY}&limit=50${searchQuery}`);
    return getParsedResponse<HeroData>(result);
  } catch (error) {
    throw new Error("Error fetching heroes");
  }
}

export const fetchHero = async (id: string) => {
  const result = await axios.get<null, HeroResponse>(`${BASE_URL}/characters/${id}?apikey=${API_KEY}`);
  const parsedResponse = getParsedResponse<HeroData>(result);

  if (!parsedResponse.results.length) {
    throw new Error("No heroe found");
  }

  return parsedResponse.results[0];
}

export const getComicByHero = async (id: string) => {
  const result = await axios.get<null, ComicsResponse>(`${BASE_URL}/characters/${id}/comics?apikey=${API_KEY}`);
  const parsedResponse = getParsedResponse<ComicData>(result);

  return parsedResponse.results;
}