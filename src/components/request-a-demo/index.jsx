import React from "react";
import { Card } from "./style";
import { PrimaryBtn } from "../../components";

const RequestADemo = () => {
  return (
    <>
      <Card>
        <div>
          <h2>Request a Demo Now!</h2>
          <p>
            Let us guide you through our feature-rich software, tailored to meet
            your unique needs.
          </p>
        </div>
        <div>
          <PrimaryBtn
            width="18rem"
            borderRadius="1rem"
            name="Talk to an Expert"
          />
        </div>
      </Card>
    </>
  );
};

export default RequestADemo;
