import styled from "styled-components";

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  height: 10rem;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 0.25rem;
  cursor: pointer;

  &:first-child {
    margin-right: 5rem;
  }

  &:nth-last-child(2) {
    margin-left: 5rem;
  }
`;

export const BurgerMenu = styled.ul`
  height: 8rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1081px) {
    display: none;
  }
`;

export const BurgerItem = styled.li`
  &:first-child img {
    width: 2rem;
  }

  &:last-child img {
    width: 10rem;
  }
`;
