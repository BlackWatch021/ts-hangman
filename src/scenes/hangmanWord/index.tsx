import React from "react";

type Props = {
  reveal?: boolean;
  wordToGuess: string;
  guessedLetters: string[];
};

const index = ({ reveal = false, wordToGuess, guessedLetters }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".5rem",
        fontSize: "38pt",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: "3px solid black" }}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
              fontStyle:
                !guessedLetters.includes(letter) && reveal ? "italic" : "",
              fontWeight:
                !guessedLetters.includes(letter) && reveal ? "bold" : "",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default index;
