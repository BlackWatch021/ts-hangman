import React, { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./scenes/hangmanDrawing/index";
import HangmanWord from "./scenes/hangmanWord/index";
import KeyBoard from "./scenes/keyBoard/index";

type Props = {};

const App = (props: Props) => {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (el) => !wordToGuess.includes(el)
  );

  const isLoser = incorrectLetters.length >= 6;
  // cause there are only 6 body parts

  const isWinner = wordToGuess
    .split("")
    .every((el) => guessedLetters.includes(el));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      console.log(key);
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();

      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  // const addGuessedLetter = useCallback(
  //   (letter: string) => {
  //     if (guessedLetters.includes(letter)) return;
  //     setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  //   },
  //   [guessedLetters]
  // );

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
        background: "pink",
      }}
    >
      <div
        style={{
          fontSize: "16pt",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        {isWinner && "You Gussed it right- Refresh to start again"}
        {isLoser && "Upppps, Its wrong- Refresh to start again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
      />
      <div style={{ alignSelf: "stretch" }}>
        <KeyBoard
          disabled={isWinner || isLoser}
          activeLetter={guessedLetters.filter((el) => wordToGuess.includes(el))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default App;
