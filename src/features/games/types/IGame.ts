export interface ServerResponseGames {
  countItems: number;
  games: IGame[];
}

export interface IGame {
  _id: string;
  name: string;
  ageLimit: number;
  rating: number;
  price: number;
  genre: string;
  platform: string[];
  imageUrl: string;
  videoUrl: string;
  description: string;
  amount: number;
}
