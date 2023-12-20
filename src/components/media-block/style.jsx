import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  flex-direction: ${(props) =>
    props.flxDir === "reverse" ? "row-reverse" : "row"};

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Primary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 480px) {
    width: 90vw;
  }

  h2 {
    color: #000000;
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  h3 {
    color: ${(props) => props.theme};
    font-size: 2.5rem;
    font-weight: 500;
    line-height: normal;
    margin-top: -1.5rem;
  }

  p {
    color: #242424;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    max-width: 40rem;
    flex-wrap: wrap;
  }

  li {
    max-width: 35rem;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  li img {
    width: 2rem;
  }

  li span {
    color: #5f5f5f;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Secondary = styled.div`
  img {
    width: 45rem;
  }

  p {
    color: #242424;
    text-align: center;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 117.9%;
  }

  @media (max-width: 1080px) {
    p {
      display: none;
    }
  }

  @media (max-width: 580px) {
    img {
      width: 90vw;
    }
  }
`;
