import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { listingPageCopy } from "../../constants/copy";
import { gameList } from "../../constants/gameList";
import { iGameLevelItem, tgameLevels } from "../../types/gameListTypes";

import styles from "./Listing.module.css";

const Listing: FunctionComponent = () => {
  // Utils - naviagate , memo
  const navigate = useNavigate();
  const gameLevels: tgameLevels[] = useMemo(() => {
    return Object.keys(gameList) as tgameLevels[];
  }, []);

  // States
  const [selectedLevel, setSelectedLevel] = useState<tgameLevels>(
    gameLevels[0]
  );
  const [gameData, setGameData] = useState<iGameLevelItem>();

  // set data on level change
  useEffect(() => {
    if (selectedLevel in gameList) {
      setGameData(gameList[selectedLevel]);
    }
  }, [selectedLevel]);

  return (
    <main className={styles.mainContainer}>
      {/* Intro Section */}
      <section className={styles.introSection}>
        <h2 className={styles.intoTitle}>{listingPageCopy.introTitle}</h2>
        <p className={styles.introDescription}>
          {listingPageCopy.introDesciption}
        </p>
        <p className={styles.introInstruction}>
          <strong>{listingPageCopy.introInstruction.title}</strong>{" "}
          {listingPageCopy.introInstruction.description}
        </p>
      </section>

      {/* Filter */}
      <div className={styles.filterContainer}>
        <div className="mb-6">
          <label htmlFor="filter" className={styles.filterLabel}>
            Filter:
          </label>
          <select
            id="filter"
            className={styles.filterSelector}
            onChange={(event) => {
              const valueToSet = event.target.value as tgameLevels;
              setSelectedLevel(valueToSet);
            }}
          >
            {gameLevels.map((item) => (
              <option value={item} key={item}>
                {item.charAt(0).toUpperCase() + item.substring(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Game Levels List - Card View */}
      {/* TODO - Convert to a component later*/}
      <div className={styles.listGrid}>
        {gameData?.data.map((level, index) => {
          const grid = level.numOfCards * level.numOfCards;
          return (
            <div key={index} className={styles.gameCard}>
              <h2 className="text-xl font-semibold mb-2">{`Game ${
                index + 1
              }`}</h2>
              <p className="text-gray-700">Number of Cards: {grid}</p>
              <p className="text-gray-700">Description: {grid / 2} Pairs</p>
              <p className="text-gray-700">
                Required Matches: {gameData.matchesRequired.toString()}
              </p>
              <button
                className={styles.button}
                onClick={() => {
                  navigate(
                    `/flip-game?matrix=${level.numOfCards}&pairs=${gameData.matchesRequired}`
                  );
                }}
              >
                Play Now
              </button>
            </div>
          );
        })}

        {/* TODO - Add a infinite load later, by pushing values and incrementing the value in multiples */}
      </div>
    </main>
  );
};

export default Listing;
