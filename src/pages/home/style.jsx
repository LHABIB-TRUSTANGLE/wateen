import styled from "styled-components";

export const Section = styled.section`
  &:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/images/hero.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    height: 50rem;
  }

  &:last-of-type {
    margin-bottom: 55rem;
  }
`;

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Primary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #ffffff;
    font-size: 5.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 6.8rem;
  }

  h1 span {
    color: #ff7600;
  }

  h2 {
    color: #ffffff;
    font-size: 4.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 5.85rem;
  }

  div {
    display: flex;
    gap: 2rem;
    margin-top: 5rem;
  }

  @media (max-width: 1080px) {
    align-items: center;
    width: 40rem;

    h1 {
      font-size: calc(5.5rem / 1.35);
      text-align: center;
    }

    h2 {
      font-size: calc(4.2rem / 1.5);
      text-align: center;
      line-height: calc(5.85rem / 1.45);
    }

    div {
      flex-direction: column;
      margin-top: calc(5rem / 1.65);
    }
  }
`;

export const Seconary = styled.div`
  width: 61rem;
  height: 40rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

// export const Seconary = styled.div``;
