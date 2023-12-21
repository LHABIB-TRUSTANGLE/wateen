import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Wrapper, PrimaryBtn } from "../";
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
  const navigate = useNavigate();

  const [hoveredKey, setHoveredKey] = useState(null);

  const handleHover = (key) => {
    setHoveredKey(key);
  };

  const handleLeave = () => {
    setHoveredKey(null);
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
                          <SubItems
                            key={item}
                            onClick={navigate(`solutions/${item}`)}
                          >
                            {/* <NavLink to={`solutions/${item}`} key={item}> */}
                            {item}
                            {/* </NavLink> */}
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
          {/* <Item>
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
          </Item> */}
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
