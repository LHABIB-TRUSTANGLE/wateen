import React from "react";
import { Button } from "./style";

const StandardButton = (props) => {
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

export default StandardButton;
