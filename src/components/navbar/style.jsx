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
  text-transform: capitalize;

  &:first-child {
    margin-right: 5rem;
  }

  &:nth-last-child(2) {
    margin-left: 5rem;
  }
`;

export const SubMenu = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 1;
  text-align: left;
  margin-top: 6.1rem;
  padding: 2rem;
  background-color: rgba(255, 246, 229, 0.75);
  backdrop-filter: blur(10px);
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  min-width: 25rem;
`;

export const SubItems = styled.li`
  padding: 0.75rem 1.5rem 0.75rem 1.5rem;
  transition: 0.3s ease;
  border-radius: 1rem;

  &:hover {
    background-color: white;
  }
`;

export const BurgerMenu = styled.ul`
  list-style: none;

  main {
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div:first-child img {
      width: 2rem;
    }

    div:last-child img {
      width: 10rem;
    }

    @media (min-width: 1081px) {
      display: none;
    }
  }
`;

export const BurgerItem = styled.li``;
