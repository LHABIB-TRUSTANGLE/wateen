import styled from "styled-components";

export const Card = styled.div`
  background: url(/images/request-a-demo.svg);
  background-color: #52006a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7.5rem 0 7.5rem;
  width: 100%;
  height: 17.5rem;
  border-radius: 1.5rem;

  div:first-of-type {
    h2 {
      color: #ffffff;
      font-size: 3.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: 117.9%;
      margin-bottom: 1rem;
    }

    p {
      color: #ffffff;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    // justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    gap: 3rem;
    height: 100%;
  }
`;
