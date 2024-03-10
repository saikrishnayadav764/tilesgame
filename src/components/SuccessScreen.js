// SuccessScreen.js
import React from "react";
import styles from "../styles/board.module.css";

function SuccessScreen({ score, time, onPlayAgain }) {
  return (
    <div>
      <h1 className={styles.gameTitle}>React Tiles</h1>
      <div className={styles.scoreTime}>
        <p className={styles.score}>Score: {score}</p>
        <p className={styles.time}>Time: {time}</p>
      </div>
      <div className={styles.gameBox}>
        <h2 className={styles.welcome}>Welcome John</h2>
        <div className={styles.completeBox}>
          <h1 id={styles.finished} className={styles.gameTitle}>
            Game Finished!
          </h1>

          <h2 className={styles.finalScore}>Score: {score}</h2>
          <h2 className={styles.finalTime}>Time Taken: {time}</h2>
        </div>
      </div>
    </div>
  );
}

export default SuccessScreen;
