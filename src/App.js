import "./App.css";
import "./assets/fonts/stylesheet.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Comics from "./containers/Comics";
import Character from "./containers/Character";
import Favorites from "./containers/Favorites";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Banner />
      <Switch>
        <Route path="/comics/:characterId">
          <Character />
        </Route>
        <Route path="/comics">
          <Comics search={search} />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/">
          <Home search={search} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
