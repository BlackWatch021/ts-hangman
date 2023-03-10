type Props = {
  numberOfGuesses: number;
};

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px ",
      borderRadius: "100%",
      position: "absolute",
      top: "29px ",
      right: "-26px",
      border: "5px solid black",
    }}
  />
);
const BODY = (
  <div
    style={{
      width: "5px",
      height: "100px ",
      position: "absolute",
      top: "88px ",
      right: "0px",
      background: "black",
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: "88px",
      height: "5px ",
      background: "black",
      position: "absolute",
      top: "123px ",
      right: "-88px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: "88px",
      height: "5px ",
      background: "black",
      position: "absolute",
      top: "123px ",
      right: "5px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "88px",
      height: "5px ",
      background: "black",
      position: "absolute",
      top: "180px ",
      right: "-84px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "88px",
      height: "5px ",
      background: "black",
      position: "absolute",
      top: "180px ",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, LEFT_LEG, RIGHT_LEG];

const index = ({ numberOfGuesses }: Props) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "30px",
          width: "5px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
          borderRadius: "20px",
        }}
      ></div>
      <div
        style={{
          height: "5px",
          width: "180px",
          marginLeft: "120px",
          background: "black",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      ></div>
      <div
        style={{
          height: "300px",
          width: "5px",
          marginLeft: "120px",
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: "5px",
          width: "250px",
          background: "black",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
        }}
      ></div>
    </div>
  );
};

export default index;
