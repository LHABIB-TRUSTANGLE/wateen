import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper, StandardButton } from "..";
import useStore from "../../store";

import {
  Menu,
  Item,
  BurgerMenu,
  BurgerItem,
  SubMenu,
  SubItems,
} from "./style.jsx";

const values = {
  solutions: ["Restaurants", "Distributors"],
  products: {
    restaurants: [
      "Invoice Manager",
      "Order Manager",
      "AP Manager",
      "Restaurant Management Softaware",
      "Inventory Management",
      "Recipe Coasting Software",
      "Restaurant Vendor Payments ",
      "Purchasing & Order Management",
      "Expenses Tracking",
      "Multi Units & Chains",
      "Cookbook Software",
    ],
    distributors: ["AP Manager"],
  },
  integrations: {
    buyers: ["POS", "Accounting & ERP Systems", "Ecommerce", "Reachware"],
    suppliers: ["Accounting & ERP Systems"],
  },
  resources: ["About us", "Case Studies", "Blog", "News"],
};

const Navbar = () => {
  const { hoveredKey, handleHover, handleLeave } = useStore();

  const handleClick = (itemId) => {
    setYourState((prevState) => {
      const updatedState = { ...prevState };
      updatedState[itemId] = !updatedState[itemId];
      return updatedState;
    });
  };

  return (
    <>
      <Wrapper>
        <Menu onMouseLeave={handleLeave}>
          <Item>
            <NavLink to="/">
              <img src="/images/logo-dark.svg" alt="" />
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/">Home</NavLink>
          </Item>
          {Object.entries(values).map(([key, value]) => (
            <Item key={key} onMouseEnter={() => handleHover(key)}>
              <>
                <span>{key}</span>
                <span>
                  <img src="/images/dropdown-arrow.svg" alt="" />
                </span>
                {hoveredKey === key && value && (
                  <SubMenu
                    style={
                      !Array.isArray(value)
                        ? { display: "flex", gap: "5rem" }
                        : {
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                          }
                    }
                  >
                    {Array.isArray(value)
                      ? value.map((item) => (
                          <SubItems key={item}>
                            <NavLink
                              key={item}
                              to={`/solutions/${item}`.toLowerCase()}
                            >
                              {item}
                            </NavLink>
                          </SubItems>
                        ))
                      : Object.entries(value).map(([subKey, subValue]) => (
                          <div key={subKey}>
                            <SubItems style={{ pointerEvents: "none" }}>
                              <h2>{subKey}</h2>
                            </SubItems>
                            {subValue.map((item) => (
                              <SubItems key={item}>{item}</SubItems>
                            ))}
                          </div>
                        ))}
                  </SubMenu>
                )}
              </>
            </Item>
          ))}
          <Item>
            <NavLink to="/plans">Plans</NavLink>
          </Item>
          <Item>
            <NavLink to="/login">Login</NavLink>
          </Item>
          <Item>
            <NavLink to="/lets-talk">
              <StandardButton
                name="Let's Talk"
                width="12.5rem"
                borderRadius="3rem"
              />
            </NavLink>
          </Item>
        </Menu>

        <BurgerMenu>
          <main>
            <div>
              <NavLink to="/">
                <img src="/images/burger-menu.svg" alt="" />
              </NavLink>
            </div>
            <div>
              <NavLink to="/">
                <img src="/images/logo-dark.svg" alt="" />
              </NavLink>
            </div>
          </main>

          <BurgerItem
          // style={{
          //   height: "calc(100vh - 8rem)",
          //   width: "100%",
          // }}
          ></BurgerItem>
        </BurgerMenu>
      </Wrapper>
    </>
  );
};

export default Navbar;
