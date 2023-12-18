import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${(props) =>
    props.theme === "#ffffff" ? "#52006a" : "#ffffff"};
  overflow: hidden;
  width: 32rem;
  height: 22rem;
  border: 1px solid #52006a;
  border-radius: 1rem;
  display: flex;
  gap: 1.5rem;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  cursor: default;

  &:before {
    position: absolute;
    z-index: -1;
    top: 8.75%;
    left: 4.5%;
    width: 13%;
    height: 19%;
    content: "";
    background-color: ${(props) => props.theme};
    border: none;
    border-radius: 50%;
    transform-origin: center;
    transform: scale(1);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scale(16.5);
  }

  div:first-child {
    background: ${(props) => props.theme};
    width: 4rem;
    height: 4rem;
    display: flex;
    padding: 0.75rem;
    border: none;
    border-radius: 50%;
    transition: transform 0.3s ease;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  div:last-child {
    h2 {
      color: ${(props) => (props.theme === "#ffffff" ? "#ffffff" : "#52006a")};
      font-size: 1.7rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2.2rem;
    }

    p {
      color: ${(props) => (props.theme === "#ffffff" ? "#ffffff" : "#52006a")};
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 300;
      line-height: 1.9rem;
    }
  }

  &:hover {
    div:last-child {
      h2 {
        color: ${(props) =>
          props.theme === "#ffffff" ? "#52006a" : "#ffffff"};
      }
      p {
        color: ${(props) =>
          props.theme === "#ffffff" ? "#52006a" : "rgba(255, 255, 255, 0.75)"};
      }
    }
  }
`;
