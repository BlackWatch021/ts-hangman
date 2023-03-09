import React, { useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./scenes/hangmanDrawing/index";
import HangmanWord from "./scenes/hangmanWord/index";
import KeyBoard from "./scenes/keyBoard/index";

type Props = {};

const App = (props: Props) => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (el) => !wordToGuess.includes(el)
  );
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
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <div style={{ alignSelf: "stretch" }}>
        <KeyBoard />
      </div>
    </div>
  );
};

export default App;
