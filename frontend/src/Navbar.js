import React, { useState } from "react";
import { Navbar, Container } from "react-bulma-components";

import { NavLink } from "react-router-dom";

import Home from "./Home";
import Posts from "./Posts";

const Navigationbar = () => {
  const [isactive, setActive] = useState(false);

  return (
    <Navbar active={isactive}>
      <Container>
        <Navbar.Brand>
          <NavLink className="navbar-item" to="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </NavLink>
          <Navbar.Burger
            
            onClick={() => setActive(prevActive => !prevActive)}
          />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <NavLink className="navbar-item" activeClassName="is-active" to="/blog">Blog</NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/">About</NavLink>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">🌓</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
