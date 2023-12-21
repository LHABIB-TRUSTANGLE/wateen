import React from "react";
import { Button } from "./style";

const AnimatedButton = (props) => {
  return (
    <>
      <Button theme={props.theme}>
        <span>{props.name}</span>
        <span>
          <img
            src={
              props.theme === "#52006a"
                ? "/images/right-arrow-white.png"
                : "/images/right-arrow-orange.png"
            }
            alt=""
          />
        </span>
      </Button>
    </>
  );
};

export default AnimatedButton;
