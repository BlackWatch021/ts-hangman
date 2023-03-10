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
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();

      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  console.log("This is the word (Just for development purposes)", wordToGuess);

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
        background: "linear-gradient(to top, #D1BAD2 20%, #63acd6 )",
        minHeight: "100vh",
        paddingTop: "15px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center",
          padding: "10px 60px 20px 60px",
          boxShadow: "0px 10px 50px rgba(0,0,0,1)",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            fontSize: "14pt",
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          {isWinner && "You Gussed it right (press 'ENTER' to start again)"}
          {isLoser && "Upppps, Its incorrect (press 'ENTER' to start again)"}
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
            activeLetter={guessedLetters.filter((el) =>
              wordToGuess.includes(el)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
