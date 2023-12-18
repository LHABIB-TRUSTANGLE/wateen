import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  width: 100%;
  margin: 0 2rem 0 2rem;

  h2 {
    color: #52006a;
    text-align: center;
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  div {
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
  }

  div img {
    width: 100%;
  }
`;
