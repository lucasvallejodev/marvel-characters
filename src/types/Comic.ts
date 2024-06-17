import { Image } from './shared';

export type Comic = {
  id: number;
  digitalId: number;
  title: string;
  description: string;
  modified: string;
  format: string;
  pageCount: number;
  resourceURI: string;
  thumbnail: Image;
  images: Image[];
}
