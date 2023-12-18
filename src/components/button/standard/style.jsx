import styled from "styled-components";

export const Button = styled.button`
  background-color: #ff7600;
  border: none;
  color: #ffffff;
  height: 4.5rem;
  font-size: 1.5rem;
  transition: 0.3s ease-in;

  &:hover {
    border: 2px solid #ff7600;
    background: transparent;
    color: #ff7600;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;
