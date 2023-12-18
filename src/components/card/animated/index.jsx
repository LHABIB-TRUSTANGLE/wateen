import React from "react";
import { Card } from "./style";

const AnimatedCard = (props) => {
  return (
    <>
      <Card theme={props.theme}>
        <div>
          <img src={props.icon} alt="" />
        </div>
        <div>
          <h2>{props.heading}</h2>
          <br />
          <p>{props.paragraph}</p>
        </div>
      </Card>
    </>
  );
};

export default AnimatedCard;
