import React from "react";
import { Link } from "react-router-dom";
import { Box, Content, About, QuickAccess, Primary, Secondary } from "./style";
import { Wrapper } from "..";

const Footer = () => {
  return (
    <>
      <Box>
        <Wrapper>
          <Content>
            <Primary>
              <About>
                <img src="/images/logo-light.svg" alt="" />
                <br />
                <br />
                <p>
                  Wateen is a B2B online marketplace and inventory management
                  platform for restaurants and distributors, making it easy to
                  manage orders, billing, and payments, all in one platform.
                </p>
              </About>
              <QuickAccess>
                <table>
                  <thead>
                    <tr>
                      <th>Solutions</th>
                      <th>Integrations</th>
                      <th>Support</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="/images/side-arrow.svg" alt="" />
                        <p>Restaurants</p>
                      </td>
                      <td>
                        <img src="/images/side-arrow.svg" alt="" />
                        <p>Suppliers</p>
                      </td>
                      <td>
                        <img src="/images/side-arrow.svg" alt="" />
                        <p>About</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="/images/side-arrow.svg" alt="" />
                        <p>Distributors</p>
                      </td>
                      <td>
                        <img src="/images/side-arrow.svg" alt="" />
                        <p>Buyers</p>
                      </td>
                      <td>
                        <img src="/images/side-arrow.svg" alt="" />
                        <p>Careers</p>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <img src="/images/side-arrow.svg" alt="" />
                        <p>Request a Demo</p>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <img src="/images/side-arrow.svg" alt="" />
                        <p>Contact Us</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </QuickAccess>
            </Primary>
            <Secondary>
              <p>© 2023 Wateen | Customer Support: 1-975-522-4865</p>
              <p>
                <Link to="">Privacy Policy</Link>
                <span>.</span>
                <Link to="">Terms & Conditions</Link>
              </p>
              <ul>
                <li>
                  <Link to="">
                    <img src="/images/twitter.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src="/images/instagram.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src="/images/youtube.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src="/images/facebook.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src="/images/linkedin.svg" alt="" />
                  </Link>
                </li>
              </ul>
            </Secondary>
          </Content>
        </Wrapper>
      </Box>
    </>
  );
};

export default Footer;
