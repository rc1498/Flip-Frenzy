import { tGameList } from "../types/gameListTypes";

export const gameList: tGameList = {
  easy: {
    matchesRequired: 2,
    // increasing by 4 each turn
    data: [
      { numOfCards: 2 },
      { numOfCards: 4 },
      { numOfCards: 6 },
      { numOfCards: 8 },
      { numOfCards: 10 },
      { numOfCards: 12 },
      { numOfCards: 14 },
    ],
  },

  medium: {
    matchesRequired: 3,
    // increasing by 9 each turn
    data: [
      { numOfCards: 3 },
      { numOfCards: 6 },
      { numOfCards: 9 },
      { numOfCards: 12 },
      { numOfCards: 15 },
      { numOfCards: 18 },
      { numOfCards: 21 },
    ],
  },

  hard: {
    matchesRequired: 4,
    // increasing by 16 each turn
    data: [
      { numOfCards: 4 },
      { numOfCards: 8 },
      { numOfCards: 12 },
      { numOfCards: 16 },
      { numOfCards: 20 },
      { numOfCards: 40 },
    ],
  },
};
