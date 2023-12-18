import styled from "styled-components";

export const Button = styled.button`
  width: 19rem;
  height: 6rem;
  border: none;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-color: ${(props) =>
    props.theme === "#52006a" ? "#ffffff" : "#ff7600"};

  &:before {
    position: absolute;
    z-index: -1;
    left: 72.5%;
    width: 20%;
    height: 64%;
    content: "";
    background-color: ${(props) =>
      props.theme === "#52006a" ? "#52006a" : "#ffffff"};
    border: none;
    border-radius: 50%;
    transform-origin: center;
    transform: scale(1);
    transition: transform 0.3s ease;
  }

  span:first-child {
    color: ${(props) => (props.theme === "#52006a" ? "#52006a" : "#ffffff")};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  span:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-45deg);
    transition: transform 0.3s ease;

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  &:hover {
    span:first-child {
      color: ${(props) => (props.theme === "#52006a" ? "#ffffff" : "#ff7600")};
    }

    span:last-child {
      transform: rotate(0deg);
    }
  }

  &:hover::before {
    transform: scale(8.5);
  }
`;
