import React from "react";
import { Button } from "./style";

const PrimaryBtn = (props) => {
  return (
    <>
      <Button
        style={{
          width: `${props.width}`,
          borderRadius: `${props.borderRadius}`,
        }}
      >
        {props.name}
      </Button>
    </>
  );
};

export default PrimaryBtn;
