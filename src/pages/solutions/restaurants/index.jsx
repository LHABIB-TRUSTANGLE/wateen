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

const data1 = [
  { img: "/images/account-receivable-automation.svg" },
  { h2: "Order Manager" },
  { h3: "For Chefs and OPS Managers" },
  {
    p: "Shop with ease, quickly accessing all your suppliers from one app. Consolidate orders, chat with suppliers, and get a clear line-of-sight into all your purchases.",
  },
  {
    ul: [
      ["/images/consolidated-orders.svg", "Consolidated orders"],
      ["/images/real-time-visibility.svg", "Real-time visibility"],
      ["/images/convenient-chat.svg", "Convenient chat"],
      ["/images/ims-integration.svg", "IMS integration"],
    ],
  },
];

const data2 = [
  { img: "/images/invoice-manager.svg" },
  { h2: "Invoice Manager" },
  { h3: "for OPS Managers and Accountants" },
  {
    p: "Say 'goodbye' to paper invoices and manual entry. Enjoy hassle-free, automated digital invoices automatically synced across your systems.",
  },
  {
    ul: [
      ["/images/ocr-scanning.svg", "OCR Scanning"],
      ["/images/gl-code-support.svg", "GL code support"],
      ["/images/approval-workflows.svg", "Approval workflows"],
      [
        "/images/quickbooks-online-integration.svg",
        "QuickBooks Online integration",
      ],
    ],
  },
  { row: "reverse" },
  { btnClr: "#52006A" },
];

const data3 = [
  { img: "/images/dual-phone.svg" },
  { h2: "AP Manager" },
  { h3: "For Operations Managers and Accountants" },
  {
    p: "Easily track and pay for all supplier orders from one screen while keeping your accounting system completely in sync.",
  },
  {
    ul: [
      ["/images/clear-visibility.svg", "Clear visibility"],
      ["/images/easy-payment.svg", "Easy payment"],
      [
        "/images/quickbooks-online-integration-orange.svg",
        "QuickBooks Online integration",
      ],
    ],
  },
];

const Restaurants = () => {
  const location = useLocation();

  return (
    <>
      <Section>
        <HeroSecondary
          location={location}
          h2="For Restaurants"
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
              theme="#FF7600"
              img={data1?.[0]?.img}
              h2={data1?.[1]?.h2}
              h3={data1?.[2]?.h3}
              p={data1?.[3]?.p}
              ul={data1?.[4]?.ul}
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
            <MediaBlock
              theme="#52006A"
              img={data2?.[0]?.img}
              h2={data2?.[1]?.h2}
              h3={data2?.[2]?.h3}
              p={data2?.[3]?.p}
              ul={data2?.[4]?.ul}
              row={data2?.[5]?.row}
              btnClr={data2?.[6]?.btnClr}
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
            <MediaBlock
              theme="#FF7600"
              img={data3?.[0]?.img}
              h2={data3?.[1]?.h2}
              h3={data3?.[2]?.h3}
              p={data3?.[3]?.p}
              ul={data3?.[4]?.ul}
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

export default Restaurants;
