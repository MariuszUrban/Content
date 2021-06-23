import React, { useState, useEffect } from "react";
import { getRandom } from "../../app/helpers/Random";
import "./_randomWord.scss";
const words = [
  "Discover.",
  "Share.",
  "Like.",
  "Save.",
  "Note.",
  "Organise.",
  "Learn.",
  "Scan.",
  "Analyze.",
  "Curate.",
  "Opinionate.",
];

const RandomWords = () => {
  const [selectedWords, setWords] = useState(getRandom(words, 3));

  useEffect(() => {
    setTimeout(() => {
      setWords(getRandom(words, 3));
    }, 3000);
  }, [selectedWords]);

  return (
    <div className="random-word-container">
      {selectedWords.map((word) => {
        return (
          <div className="word-wrap">
            <span>{word}</span>
          </div>
        );
      })}
    </div>
  );
};

export default RandomWords;
