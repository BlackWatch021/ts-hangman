import React, { useState } from "react";
import words from "./wordList.json";

type Props = {};

const App = (props: Props) => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const nextWord = (): void => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
  };

  console.log(wordToGuess);

  return (
    <div>
      <button onClick={nextWord}>Change word</button>
    </div>
  );
};

export default App;
