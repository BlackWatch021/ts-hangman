import React, { useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./scenes/hangmanDrawing";
import HangmanWord from "./scenes/hangmanWord";
import KeyBoard from "./scenes/keyBoard";

type Props = {};

const App = (props: Props) => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <KeyBoard />
    </div>
  );
};

export default App;
