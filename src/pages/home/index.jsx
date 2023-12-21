import React from "react";
import {
  Wrapper,
  AnimatedButton,
  AnimatedCard,
  StandardCard,
  TabCard,
  Brands,
  RequestADemo,
} from "../../components";

import { Section, Hero, Primary, Seconary } from "./style";

const Home = () => {
  return (
    <>
      <Section>
        <Wrapper>
          <Hero>
            <Primary>
              <h1>
                #1 B2B <span>Online</span>
              </h1>
              <h2>Marketplace and Inventory Management Platform</h2>
              <div>
                <AnimatedButton name="I'm a distributor" theme="#52006a" />
                <AnimatedButton name="I'm a restaurant" theme="#ff7600" />
              </div>
            </Primary>
            <Seconary>
              <img src="/images/hero-widget.svg" alt="" />
            </Seconary>
          </Hero>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <br />
          <div
            style={{
              textAlign: "center",
              margin: "3rem 0 4rem 0",
            }}
          >
            <h2
              style={{
                color: "#52006A",
                fontSize: "3.5rem",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              What is <span style={{ color: "#ff7600" }}>Wateen?</span>
            </h2>
            <p
              style={{
                color: "#5f5f5f",
                textAlign: "center",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              Wateen is a B2B online marketplace and inventory management
              platform for restaurants and distributors, making it easy to
              manage orders, billing, and payments, all-in-one platform.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <AnimatedCard
              theme="#52006a"
              heading="Optimizing Business Automating Manual Tasks"
              paragraph="Wateen provides business owners and their employees with the tools
            to automate the manual tasks required to operate and grow their
            businesses"
              icon="/images/optimize.svg"
            />
            <AnimatedCard
              theme="#ffffff"
              heading="Easing Bulk Food and Beverage Ordering"
              paragraph="Simplifies ordering bulk food and beverages for restaurants and suppliers of all sizes"
              icon="/images/bag.svg"
            />
            <AnimatedCard
              theme="#52006a"
              heading="Improving Food Service through Enhanced Communication"
              paragraph="Lowers barriers to communication between restaurants and distributors, using what they have assets with the goal of making food service better for everyone"
              icon="/images/communication.svg"
            />
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <br />
          <div
            style={{
              textAlign: "center",
              margin: "3rem 0 4rem 0",
            }}
          >
            <h2
              style={{
                color: "#52006A",
                fontSize: "3.5rem",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              Why <span style={{ color: "#ff7600" }}>Wateen</span>?
            </h2>
            <p
              style={{
                color: "#5f5f5f",
                textAlign: "center",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              Wateen Platform plays a central role in the Saudi economy. Here
              are some of the reasons why industry leaders have chosen Wateen as
              their Food and Beverage marketplace platform provider:
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4rem",
              flexWrap: "wrap",
            }}
          >
            <StandardCard
              image="/images/all-orders-on-wateen-platform.gif"
              heading="All Orders on Wateen Platform"
              paragraph="All orders can be obtained in one platform, which is Wateen"
            />
            <StandardCard
              image="/images/one-platform-one-connection-one-provider.gif"
              heading="One Platform, One Connection, One Provider"
              paragraph="All market data channels can be combined into a single platform through a single connection to a single provider"
            />
            <StandardCard
              image="/images/wateen-trusted-by-leading-companies.gif"
              heading="Wateen Trusted by Leading Companies"
              paragraph="Wateen has been recognized and trusted by the leading companies in the food industry."
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <TabCard
              image="/images/provides-effective-communication-channels.gif"
              heading="Provides effective communication channels"
              paragraph="Wateen platform provides effective communication channels that simplifies and speeds up the buying and selling process."
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4rem",
              flexWrap: "wrap",
              marginTop: "3rem",
            }}
          >
            <StandardCard
              image="/images/ultimate-supply-chain-solution.gif"
              heading="Ultimate Supply Chain Solution"
              paragraph="Wateen covers all challenges in security, quality, traceability, planning, reporting and dashboard."
            />
            <StandardCard
              image="/images/connecting-companies-fueling-growth.gif"
              heading="Connecting Companies, Fueling Growth"
              paragraph="Facilitate the establishment of new business relationships between companies"
            />
            <StandardCard
              image="/images/cost-effective-marketing-solution.gif"
              heading="Cost-Effective Marketing Solution"
              paragraph="Allow companies to reduce their marketing expenses"
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

export default Home;
