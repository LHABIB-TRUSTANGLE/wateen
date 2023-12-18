import styled from "styled-components";

export const Card = styled.div`
  width: 32rem;

  div {
    border: 1px solid rgba(102, 102, 102, 0.25);
    border-radius: 2rem;
    margin-bottom: 2rem;
    transition: 0.2s linear;
  }

  div:hover {
    border: 1px solid #ff7600;
  }

  div img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
  }

  h2 {
    color: #242424;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const BroadCard = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid rgba(102, 102, 102, 0.25);
  border-radius: 2rem;
  width: 100%;
  padding: 2rem;
  transition: 0.2s linear;

  &:hover {
    border: 1px solid #ff7600;
  }

  div:first-of-type {
    width: 32rem;
  }

  div:first-of-type img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }

  div:last-of-type {
    width: calc(100% - 32rem);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      color: #242424;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-transform: capitalize;
      margin-bottom: 1rem;
    }

    p {
      color: #666;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 32rem;

    div:first-of-type {
      width: 32rem;
    }

    div:last-of-type {
      width: 32rem;
      padding: 2rem;
    }
  }
`;
