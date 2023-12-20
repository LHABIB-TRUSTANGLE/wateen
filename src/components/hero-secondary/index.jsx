import React from "react";
import { Section, Hero, StyledList, StyledListItem } from "./style";
import { Wrapper } from "../";

const HeroSecondary = (props) => {
  function breakString(inputString, delimiter) {
    const firstDelimiterIndex = inputString.indexOf(delimiter);

    if (firstDelimiterIndex !== -1) {
      const secondDelimiterIndex = inputString.indexOf(
        delimiter,
        firstDelimiterIndex + 1
      );

      if (secondDelimiterIndex !== -1) {
        const firstPart = inputString.slice(
          firstDelimiterIndex + 1,
          secondDelimiterIndex
        );
        const secondPart = inputString.slice(secondDelimiterIndex + 1);

        return [firstPart, secondPart];
      }
    }

    // If the delimiter is not found or there's no second occurrence, return the original string
    return [inputString];
  }

  // Example usage
  const inputString = props.location.pathname;
  const delimiter = "/";
  const result = Object.entries(breakString(inputString, delimiter));
  let newArray = ["0", "Home"];
  const data = [newArray, ...result];

  return (
    <>
      <Section>
        <Wrapper>
          <Hero>
            <div>
              <StyledList>
                {data.map((item) => (
                  <StyledListItem key={item} className="styled-list-item">
                    {item?.[1]}
                  </StyledListItem>
                ))}
              </StyledList>
              <h2>{props.h2}</h2>
              <h3>{props.h3}</h3>
            </div>
          </Hero>
        </Wrapper>
      </Section>
    </>
  );
};

export default HeroSecondary;
