import React from "react";
import "./App.css";

import { Route, BrowserRouter } from "react-router-dom";

import Navigationbar from "./Navbar";
import Home from "./Home";
import Posts from "./Posts";
import Post from "./Post";


import { Hero } from "react-bulma-components";

function App() {
  return (
    <BrowserRouter>
      <Hero size="fullheight">
        <Hero.Head renderAs="header">
          <Navigationbar />
        </Hero.Head>

        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Posts} />
        <Route exact path="/:articleID" component={Post} />

        <Hero.Footer>
          <footer></footer>
        </Hero.Footer>
      </Hero>
    </BrowserRouter>
  );
}

export default App;
