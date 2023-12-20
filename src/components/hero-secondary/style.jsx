import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/images/hero-secondary.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 50rem;
`;

export const Hero = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 45rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 490px) {
      width: 93vw;
    }
  }

  h2 {
    color: #ff7600;
    text-align: center;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }

  h3 {
    color: #ffffff;
    text-align: center;
    font-size: 2.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 4.5rem;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 28px;
  border: 0.5px solid #ff32d7;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(30px);
  padding: 1rem 2rem 1rem 2rem;
  list-style-type: none;
  width: 100%;
`;

export const StyledListItem = styled.li`
  color: #ffffff;
  text-align: center;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.14rem;
  text-transform: capitalize;
`;
