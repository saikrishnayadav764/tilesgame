import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/board.module.css";
function Tile({
  imgurl,
  PrevIm,
  name,
  tileHandler,
  score,
  scoreHandler,
  setTotEle,
  ele,
  prevId,
  setprevId,
  Id,
}) {
  const [clicked, setClicked] = useState(false);
  const [isdisabled, setIsDisabled] = useState(false);
  const isclicked = (e) => {
    const eleid = e.target.id;
    console.log("this is previous " + prevId);
    console.log("this is present " + eleid);

    console.log(ele);
    if (PrevIm === "") {
      tileHandler(name);
      setClicked(true);
      setTotEle(ele + 1);
      setprevId(eleid);
      setIsDisabled(true);
    } else if (PrevIm === name && prevId !== eleid) {
      scoreHandler(score + 1);
      tileHandler("");
      setClicked(true);
      setTotEle(ele + 1);
      setprevId("");
      setIsDisabled(true);
    } else {
      if (prevId !== eleid) {
        //   setClicked(true);
        scoreHandler(score - 1);
        const timerid = setTimeout(() => setClicked(false), 100);
        clearTimeout(timerid);
      }
    }
  };
  return (
    <button
      onClick={(e) => isclicked(e)}
      id={Id}
      name={name}
      className={styles.tileB}
      disabled={isdisabled}
    >
      {clicked ? <img className={styles.tileImg} src={imgurl} /> : <p>?</p>}
    </button>
  );
}

export default Tile;
