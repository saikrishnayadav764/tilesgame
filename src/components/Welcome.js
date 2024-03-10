import React, { useEffect, useState } from "react";
import Board from "./Board";
import styles from "../styles/welcome.module.css";
import Cookies from "js-cookie";

function Welcome() {
  const [val, setVal] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (Cookies.get("user")) {
      setValid(true);
    }
  }, []);

  const textHandler = (e) => {
    setVal(e.target.value);
  };

  const playHandler = () => {
    if (val !== "") {
      Cookies.set("user", val); // Set user value in cookies
      setValid(true);
    }
  };

  return (
    <>
      {!valid ? (
        <div>
          <h1 className={styles.title}>React Tiles</h1>
          <div className={styles.welbox}>
            <h2 className={styles.name}>Enter Your Name</h2>
            <input
              value={val}
              onChange={(e) => textHandler(e)}
              className={styles.nameInput}
              type="text"
            />
            <br />
            <button onClick={playHandler} className={styles.play}>
              Play
            </button>
          </div>
        </div>
      ) : (
        <Board user={val} />
      )}
    </>
  );
}

export default Welcome;
