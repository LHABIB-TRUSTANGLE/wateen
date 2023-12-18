import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper, PrimaryBtn } from "../";
import { Menu, Item, BurgerMenu, BurgerItem } from "./style.jsx";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Menu>
          <Item>
            <NavLink to="/">
              <img src="/images/logo-dark.svg" alt="" />
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/">Home</NavLink>
          </Item>
          <Item>
            <span>Solutions</span>
            <img src="/images/dropdown-arrow.svg" alt="" />
          </Item>
          <Item>
            <span>Products</span>
            <img src="/images/dropdown-arrow.svg" alt="" />
          </Item>
          <Item>
            <span>Integrations</span>
            <img src="/images/dropdown-arrow.svg" alt="" />
          </Item>
          <Item>
            <span>Resources</span>
            <img src="/images/dropdown-arrow.svg" alt="" />
          </Item>
          <Item>
            <NavLink to="/plans">Plans</NavLink>
          </Item>
          <Item>
            <NavLink to="/login">Login</NavLink>
          </Item>
          <Item>
            <NavLink to="/let's-talk">
              <PrimaryBtn
                name="Let's Talk"
                width="12.5rem"
                borderRadius="3rem"
              />
            </NavLink>
          </Item>
        </Menu>

        <BurgerMenu>
          <BurgerItem>
            <NavLink to="/">
              <img src="/images/burger-menu.svg" alt="" />
            </NavLink>
          </BurgerItem>
          <BurgerItem>
            <NavLink to="/">
              <img src="/images/logo-dark.svg" alt="" />
            </NavLink>
          </BurgerItem>
        </BurgerMenu>
      </Wrapper>
    </>
  );
};

export default Navbar;
