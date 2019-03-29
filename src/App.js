import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  Home,
  Detail,
  Create,
  SignIn,
  SignUp,
  History,
  Rewards,
  Setting
} from "./components/index";
// Nav
import TopNav from "./components/nav/TopNav";

class App extends Component {
  state = {
    join: {
      userName: "username",
      password: "password"
    }
  };
  render() {
    return (
      <Fragment>
        <TopNav />
        <Route exact path="/" component={Home} />
        <Route path="/detail/:cardId" component={Detail} />
        <Route path="/create" component={Create} />
        <Route path="/history" component={History} />
        <Route path="/rewards" component={Rewards} />
        <Route path="/setting" component={Setting} />
        <Route exact path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
      </Fragment>
    );
  }
}

export default App;
