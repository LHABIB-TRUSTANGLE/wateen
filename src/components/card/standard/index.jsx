import React from "react";
import { Card, BroadCard } from "./style";

const StandardCard = (props) => {
  return (
    <>
      <Card>
        <div>
          <img src={props.image} alt="" />
        </div>
        <h2>{props.heading}</h2>
        <p>{props.paragraph}</p>
      </Card>
    </>
  );
};

export default StandardCard;

export const TabCard = (props) => {
  return (
    <BroadCard>
      <div>
        <img src={props.image} alt="" />
      </div>
      <div>
        <h2>{props.heading}</h2>
        <p>{props.paragraph}</p>
      </div>
    </BroadCard>
  );
};
