import "./style.css";

type Props = {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const index = ({
  disabled = false,
  activeLetter,
  inactiveLetters,
  addGuessedLetter,
}: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(55px,1fr)",
        gap: "15px",
      }}
    >
      {KEYS.map((letter, index) => {
        const isActive = activeLetter.includes(letter);
        const isInactive = inactiveLetters.includes(letter);
        return (
          <button
            disabled={isActive || isInactive || disabled}
            onClick={() => addGuessedLetter(letter)}
            className={`btn  ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            key={index}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default index;
