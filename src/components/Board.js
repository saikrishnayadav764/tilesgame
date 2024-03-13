import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import SuccessScreen from "./SuccessScreen";
import Cookies from "js-cookie";
import styles from "../styles/board.module.css";

function Board({ user }) {
  const generateImages = () => {
    const images = {
      image1: "emoji.png",
      image2: "dollar.png",
      image3: "happy.png",
      image4: "laughcry.png",
    };

    const imageFilenames = Object.values(images);
    const totalImages = 32;

    // Calculating the number of times each image should appear
    const imagesPerType = totalImages / imageFilenames.length;

    // Creating an array with each image repeated equally
    const equalDistributionArray = imageFilenames.reduce((acc, image) => {
      return acc.concat(Array.from({ length: imagesPerType }, () => image));
    }, []);

    // Shuffling the array to randomize the order
    const randomImagesArray = equalDistributionArray.sort(
      () => Math.random() - 0.5
    );

    return randomImagesArray;
  };

  const [PrevIm, SetPrevIm] = useState("");
  const [score, setScore] = useState(0);
  const [tiles, setTiles] = useState(generateImages());
  const [timer, setTimer] = useState(0);
  const [ele, setTotEle] = useState(0);
  const [prevId, setprevId] = useState("");

  const scoreHandler = (score) => {
    setScore(score);
  };

  const tileHandler = (name) => {
    SetPrevIm(name);
  };

  useEffect(() => {
    let interval;

    if (ele < 32) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [ele]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours > 0 ? hours + "h " : ""}${
      minutes > 0 ? minutes + "min " : ""
    }${seconds}s`;
  };

  return (
    <>
      {ele === 32 ? (
        <SuccessScreen score={score} time={formatTime(timer)} />
      ) : (
        <div>
          <h1 className={styles.gameTitle}>Mahajong Game</h1>
          <div className={styles.scoreTime}>
            <p className={styles.score}>Score: {score}</p>
            <p className={styles.time}>Time: {formatTime(timer)}</p>
          </div>
          <div className={styles.gameBox}>
            <h2 className={styles.welcome}>Welcome {Cookies.get("user")}</h2>
            <div className={styles.tileBox}>
              {tiles.map((imgurl, ind) => (
                <Tile
                  name={imgurl}
                  tileHandler={tileHandler}
                  scoreHandler={scoreHandler}
                  setTotEle={setTotEle}
                  PrevIm={PrevIm}
                  imgurl={imgurl}
                  score={score}
                  ele={ele}
                  prevId={prevId}
                  Id={`tail${ind}`}
                  setprevId={setprevId}
                  key={ind}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Board;
