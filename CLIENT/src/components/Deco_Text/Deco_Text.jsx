/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./deco_text.css";

function Deco_Text() {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setVisibleLetters((prevVisibleLetters) => {
        if (prevVisibleLetters === 26) {
          setTimeout(() => {
            setVisibleLetters(0);
          }, 2000);
        }
        return prevVisibleLetters + 1;
      });
    }, 200);
    return () => clearTimeout(intervalId);
  }, [visibleLetters]);

  return (
    <div className="deco-text">
      <span className={visibleLetters >= 1 ? "visible" : ""}>E</span>
      <span className={visibleLetters >= 2 ? "visible" : ""}>L</span>
      <span className={visibleLetters >= 3 ? "visible" : ""}> </span>
      <span className={visibleLetters >= 4 ? "visible" : ""}>R</span>
      <span className={visibleLetters >= 5 ? "visible" : ""}>I</span>
      <span className={visibleLetters >= 6 ? "visible" : ""}>N</span>
      <span className={visibleLetters >= 7 ? "visible" : ""}>C</span>
      <span className={visibleLetters >= 8 ? "visible" : ""}>Ó</span>
      <span className={visibleLetters >= 9 ? "visible" : ""}>N</span>
      <span className={visibleLetters >= 10 ? "visible" : ""}> </span>
      <span className={visibleLetters >= 11 ? "visible" : ""}>D</span>
      <span className={visibleLetters >= 12 ? "visible" : ""}>E</span>
      <span className={visibleLetters >= 13 ? "visible" : ""}>L</span>
      <span className={visibleLetters >= 14 ? "visible" : ""}> </span>
      <span className={visibleLetters >= 15 ? "visible" : ""}>S</span>
      <span className={visibleLetters >= 16 ? "visible" : ""}>A</span>
      <span className={visibleLetters >= 17 ? "visible" : ""}>B</span>
      <span className={visibleLetters >= 18 ? "visible" : ""}>I</span>
      <span className={visibleLetters >= 19 ? "visible" : ""}>O</span>
      <span className={visibleLetters >= 20 ? "visible" : ""}>N</span>
      <span className={visibleLetters >= 21 ? "visible" : ""}>D</span>
      <span className={visibleLetters >= 22 ? "visible" : ""}>O</span>
      <span className={visibleLetters >= 23 ? "visible" : ""}>.</span>
      <span className={visibleLetters >= 24 ? "visible" : ""}>.</span>
      <span className={visibleLetters >= 25 ? "visible" : ""}>.</span>
      <span className={visibleLetters >= 26 ? "visible" : ""}>!</span>
      <span className={visibleLetters === 0 ? "visible" : ""}> </span>
    </div>
  );
}

export default Deco_Text;
