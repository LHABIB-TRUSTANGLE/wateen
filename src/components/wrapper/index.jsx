import React from "react";

const Wrapper = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1080px",
            padding: "0 2rem 0 2rem",
          }}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
