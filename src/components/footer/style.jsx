import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: url(/images/footer-bg.png) no-repeat;
  background-size: cover;

  @media (max-width: 1080px) {
    border-top-right-radius: 3rem;
    border-top-left-radius: 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 40rem;

  @media (max-width: 1080px) {
    height: 50rem;
  }
`;

export const Primary = styled.div`
  display: flex;
  gap: 7.5rem;
  justify-content: center;
  align-items: center;
  height: 70%;

  @media (max-width: 1080px) {
    height: 55%;
    flex-direction: column;
  }
`;

export const About = styled.div`
  height: 20rem;
  color: #ffffff;
  text-align: justify;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 16rem;
    }
  }
`;

export const QuickAccess = styled.div`
  height: 20rem;

  table tr {
    display: flex;
    text-align: left;
    margin-bottom: 1.5rem;
  }

  table tr th {
    color: #ffffff;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    letter-spacing: 0.1rem;
    width: 17.5rem;
  }

  table tr td {
    display: flex;
    gap: 1rem;
    width: 17.5rem;
    color: #ffffff;
    font-size: 1.4rem;
    font-style: normal;
    line-height: 2.4rem;
    letter-spacing: 0.1rem;
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const Secondary = styled.div`
  height: 30%;
  border-top: 1.25px solid rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    display: flex;
    gap: 1rem;
    color: #ffffff;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }

  p a {
    color: #ffffff;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }

  @media (max-width: 1080px) {
    height: 45%;
    flex-direction: column-reverse;
    gap: 2rem;
    padding: 4rem 0 2rem 0;
  }
`;
