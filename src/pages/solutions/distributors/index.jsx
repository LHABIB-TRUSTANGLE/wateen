import React from "react";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  HeroSecondary,
  MediaBlock,
  Brands,
  RequestADemo,
} from "../../../components";
import { Section } from "./style";

const data = [
  { img: "/images/account-receivable-automation.svg" },
  { h2: "Accounts Receivable Automation" },
  {
    p: "Save hours each week by automating data entry and card processing, while giving customers more convenient ways to pay.",
  },
  {
    ul: [
      ["/images/tick-bullet-list.svg", "Automated data entry"],
      ["/images/tick-bullet-list.svg", "Improve payments"],
      [
        "/images/tick-bullet-list.svg",
        "Full control of your accounts receivable",
      ],
    ],
  },
  {
    caption:
      "Streamline Your Business with Wateen: Improve Efficiency and Reduce Costs!",
  },
];

const Distributors = () => {
  const location = useLocation();

  return (
    <>
      <Section>
        <HeroSecondary
          location={location}
          h2="For Distributors"
          h3="Experience Seamless Automation with Us Today!"
        />
      </Section>
      <Section>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6rem",
            }}
          >
            <MediaBlock
              img={data?.[0]?.img}
              h2={data?.[1]?.h2}
              p={data?.[2]?.p}
              ul={data?.[3]?.ul}
              caption={data?.[4]?.caption}
            />
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6rem",
            }}
          >
            <Brands />
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6rem",
            }}
          >
            <RequestADemo />
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default Distributors;
