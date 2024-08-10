export interface iGameListItem {
  numOfCards: number;
  title: string;
  description: string;
}

export interface iGameLevelItem {
  matchesRequired: number;
  data: iGameListItem[];
}

export type tgameLevels = "easy" | "medium" | "hard";

export type tGameList = {
  [key in tgameLevels]: iGameLevelItem;
};

export interface iCard {
  id: string;
  frontImage: string;
  isFlipped: boolean;
}

export type tClickedCardArray = { id: string; index: number }[];
