// GamePage.tsx
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { generateCards } from "../../utils/flipGameUtils";
import { iCard, tClickedCardArray } from "../../types/gameListTypes";
import { generalConstants } from "../../constants/general";

import styles from "./FlipGame.module.css";
import { nullableNumber } from "../../types/generalTypes";

const GamePage: FunctionComponent = () => {
  // Other utils
  const navigate = useNavigate();

  // Get Query Param
  const [searchParams, setSearchParams] = useSearchParams();
  const matrix = parseInt(
    searchParams.get(generalConstants.matrixParamKey) ?? "0"
  );
  const pairs: number = parseInt(
    searchParams.get(generalConstants.pairParamKey) ?? "2"
  );

  // States
  const [cards, setCards] = useState<iCard[]>([]);
  const [clickedCards, setClickedCards] = useState<tClickedCardArray>([]);
  const timeOutId = useRef<nullableNumber>(null);

  const correctSearchParam = useCallback(
    (paramValue: string) => {
      setSearchParams({ [generalConstants.matrixParamKey]: paramValue });
    },
    [setSearchParams]
  );

  // generate cards on page load
  useEffect(() => {
    setCards(generateCards(matrix, correctSearchParam, pairs));
  }, [matrix, correctSearchParam, pairs]);

  const checkAndRemoveDuplicateCards = (
    clickedCardParam: tClickedCardArray
  ) => {
    let cardsListClone = [...cards];
    cardsListClone = cardsListClone.filter(
      (card) => card.id !== clickedCardParam[0].id
    );
    setCards(cardsListClone);
    setClickedCards([]);
    timeOutId.current = null;
  };

  // on click card
  const handleOnClickCard = (cardId: string, index: number) => {
    const spread = [...clickedCards];
    spread.push({ id: cardId, index });
    setClickedCards(spread);

    const filteredItems = spread.filter((item) => item.id === cardId);

    // cleartimeout if any
    if (timeOutId.current !== null) {
      clearTimeout(timeOutId.current);
    }

    // proceed after timeout
    timeOutId.current = setTimeout(() => {
      if (filteredItems.length === pairs && spread.length === pairs) {
        // check for duplicates after a second
        checkAndRemoveDuplicateCards(spread);
      } else {
        // reset clicked cards
        setClickedCards([]);
      }
    }, pairs * 500);
  };

  const showHideCard = (cardId: string, cardIndx: number) => {
    return (
      clickedCards.findIndex(
        (item) => item.id === cardId && item.index === cardIndx
      ) !== -1
    );
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Flip Memory Game</h2>

        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      {/* TODO -  Convert to a component later */}
      <div
        className={styles.gameContainer}
        style={{
          // break mmatrix structure if value beyond 7 to avaoid breaking / overlapping elements
          gridTemplateColumns: `repeat(${Math.min(matrix, 7)}, minmax(0, 1fr))`,
        }} // Inline style for dynamic columns
      >
        {cards.length === 0 && (
          <div>Congratulations you've completed the game !</div>
        )}
        {cards.map((item, index) => {
          return (
            <div
              key={`${item.id}#${index}`}
              className={`${styles.card} ${
                showHideCard(item.id, index) ? styles.cardFlipped : ""
              }`}
              onClick={() => {
                handleOnClickCard(item.id, index);
              }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <img
                    src={item.frontImage}
                    alt="Card Front"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={styles.cardBack}>
                  <span className="text-3xl">?</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
};

export default GamePage;
