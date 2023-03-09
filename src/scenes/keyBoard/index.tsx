import "./style.css";

type Props = {};

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

const index = (props: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr)",
        gap: ".5rem",
      }}
    >
      {KEYS.map((letter, index) => (
        <button className={"btn "} key={index}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default index;
