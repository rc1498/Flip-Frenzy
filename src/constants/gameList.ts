import { tGameList } from "../types/gameListTypes";

export const gameList: tGameList = {
  easy: {
    matchesRequired: 2,
    // increasing by 4 each turn
    data: [
      { numOfCards: 12, title: "12 cards", description: "6 pairs" },
      { numOfCards: 16, title: "16 cards", description: "8 pairs" },
      { numOfCards: 20, title: "20 cards", description: "10 pairs" },
      { numOfCards: 24, title: "24 cards", description: "12 pairs" },
      { numOfCards: 28, title: "28 cards", description: "14 pairs" },
      { numOfCards: 32, title: "32 cards", description: "16 pairs" },
      { numOfCards: 36, title: "36 cards", description: "18 pairs" },
    ],
  },

  medium: {
    matchesRequired: 3,
    // increasing by 9 each turn
    data: [
      { numOfCards: 36, title: "36 cards", description: "18 pairs" },
      { numOfCards: 48, title: "48 cards", description: "24 pairs" },
      { numOfCards: 60, title: "60 cards", description: "30 pairs" },
      { numOfCards: 72, title: "72 cards", description: "36 pairs" },
      { numOfCards: 84, title: "84 cards", description: "42 pairs" },
      { numOfCards: 96, title: "96 cards", description: "48 pairs" },
      { numOfCards: 108, title: "108 cards", description: "54 pairs" },
    ],
  },

  hard: {
    matchesRequired: 4,
    // increasing by 16 each turn
    data: [
      { numOfCards: 48, title: "48 cards", description: "24 pairs" },
      { numOfCards: 64, title: "64 cards", description: "32 pairs" },
      { numOfCards: 80, title: "80 cards", description: "40 pairs" },
      { numOfCards: 96, title: "96 cards", description: "48 pairs" },
      { numOfCards: 112, title: "112 cards", description: "56 pairs" },
      { numOfCards: 128, title: "128 cards", description: "64 pairs" },
      { numOfCards: 144, title: "144 cards", description: "72 pairs" },
    ],
  },
};
