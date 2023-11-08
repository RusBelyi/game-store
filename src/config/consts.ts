export const KEY_QUERY_GAMES: string = 'games';
export const KEY_QUERY_GAME_BY_ID = 'gameById';
export const KEY_QUERY_USER = 'user';
export const KEY_QUERY_ORDERS = 'orders';

export const sortBy = [
  { label: 'По рейтингу (высокий)', value: 'rating-desc' },
  { label: 'По рейтингу (низкий)', value: 'rating-asc' },
  { label: 'По цене (дешёвые)', value: 'price-asc' },
  { label: 'По цене (дорогие)', value: 'price-desc' },
];

export const filterPlatforms = [
  { label: 'Все', value: '' },
  { label: 'PC', value: 'pc' },
  { label: 'Playstation', value: 'playstation' },
  { label: 'Xbox', value: 'xbox' },
];

export const choisePlatforms = [
  { label: 'PC', value: 'pc' },
  { label: 'Playstation', value: 'playstation' },
  { label: 'Xbox', value: 'xbox' },
];
