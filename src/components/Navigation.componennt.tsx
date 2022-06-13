import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Connexion from "./styles/connexion";
import Home from "./styles/home";
import Login from "./styles/login";
import Menu from "./styles/Menu";
import Page from "./styles/Page";

class Navigation extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" exact component={() => <Login  />} />
        <Route path="/" exact component={() => <Menu  />} />
        <Route path="/page" exact component={() => <Page  />} />
        <Route path="/connexion" exact component={() => <Connexion />} />
        <Route path="/home" exact component={() => <Home  />} />
      </Switch>
    );
  }
}
export default Navigation;
