export interface IBooks {
  id: number;
  name: string;
  title: string;
  image: string;
  price: number;
  Author: string;
  status: boolean;
  rating: string;
  genre: string;
  Published: string;
  quantity?: number | undefined;
}
