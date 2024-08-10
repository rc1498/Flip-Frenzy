import { iCard } from "./../types/gameListTypes";

const getCardSets = (repeated: number, generaredCards: iCard[]) => {
  const cardSet = [];
  for (let i = 0; i < repeated; i++) {
    cardSet.push(...generaredCards);
  }
  return cardSet;
};

export const generateCards = (
  numsOfItems: number,
  correctSearchParam: (numOfItems: string) => void,
  level: number
) => {
  // if odd number - add 1 and convert to a valid arg
  const lengthOfArr = numsOfItems % level === 0 ? numsOfItems : numsOfItems + 1;

  //   update search paramm
  if (numsOfItems !== lengthOfArr) {
    correctSearchParam(lengthOfArr.toString());
  }

  const generatedCards: iCard[] = [];

  // generate lengthOfArr / level cards, as we want pairs / triplets / quadruples
  for (let i = 0; i < lengthOfArr / level; i++) {
    const randomImgIndx = Math.floor(Math.random() * 1000);
    generatedCards.push({
      id: `Image${i + 1}`,
      frontImage: `https://picsum.photos/200?random=${randomImgIndx}`, // TODO - look for other ways to load images, look for other images as well
      isFlipped: false,
    });
  }

  // sort to acheive random order
  // TODO check for more ways to shuffle later
  const cardSet = getCardSets(level, generatedCards);
  return cardSet.sort(() => Math.round(Math.random() * -0.57));
};
