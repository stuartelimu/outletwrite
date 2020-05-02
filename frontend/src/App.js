import React from "react";
import "./App.css";

import { Route, HashRouter } from "react-router-dom";

import Navigationbar from "./Navbar";
import Home from "./Home";
import Posts from "./Posts";

import { Hero } from "react-bulma-components";

function App() {
  return (
    <HashRouter>
      <Hero size="fullheight">
        <Hero.Head renderAs="header">
          <Navigationbar />
        </Hero.Head>

        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Posts} />

        <Hero.Footer>
          <footer></footer>
        </Hero.Footer>
      </Hero>
    </HashRouter>
  );
}

export default App;
