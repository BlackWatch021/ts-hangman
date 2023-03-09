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
        display: "flex     ",
        gap: ".25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
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
