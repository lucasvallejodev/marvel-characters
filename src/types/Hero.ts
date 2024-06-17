import { Image } from './shared';

type Item = {
  resourceURI: string;
  name: string;
}

type SubList = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

type URL = {
  type: string;
  url: string;
}

export type Hero = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Image;
  resourceURI: string;
  comics: SubList;
  series: SubList;
  stories: SubList;
  events: SubList;
  urls: URL[];
}