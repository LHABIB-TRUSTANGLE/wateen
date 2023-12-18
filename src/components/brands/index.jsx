import React from "react";
import { Box } from "./style";

const Brands = () => {
  return (
    <>
      <Box>
        <h2>Integrates with your systems directly</h2>
        <div>
          <img src="/images/hunger-station.svg" alt="" />
          <img
            style={{ marginRight: "2rem" }}
            src="/images/talabat.svg"
            alt=""
          />
          <img
            style={{ marginRight: "6rem" }}
            src="/images/to-you.svg"
            alt=""
          />
          <img style={{ marginRight: "6rem" }} src="/images/jahez.svg" alt="" />
          <img
            style={{ marginRight: "4rem" }}
            src="/images/mr-sool.svg"
            alt=""
          />
          <img src="/images/hunger-station.svg" alt="" />
        </div>
      </Box>
    </>
  );
};

export default Brands;
