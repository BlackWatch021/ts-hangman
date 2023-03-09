type Props = {};

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px ",
      borderRadius: "100%",
      position: "absolute",
      top: "50px ",
      right: "-30px",
      border: "10px solid black",
    }}
  />
);
const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px ",
      position: "absolute",
      top: "119px ",
      right: "0px",
      background: "black",
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px ",
      background: "black",
      position: "absolute",
      top: "150px ",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px ",
      background: "black",
      position: "absolute",
      top: "150px ",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px ",
      background: "black",
      position: "absolute",
      top: "210px ",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px ",
      background: "black",
      position: "absolute",
      top: "210px ",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const index = (props: Props) => {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {LEFT_LEG}
      {RIGHT_LEG}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          marginLeft: "120px",
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          marginLeft: "120px",
          background: "black",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "250px", background: "black" }}
      ></div>
    </div>
  );
};

export default index;
