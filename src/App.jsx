import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "./containers/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import appRoute from "./pages/routes";
import LogUser from './pages/LogUser';
import LogWarn from './pages/LogWarn';
import LogDrone from './pages/LogDrone';
import LogProblem from './pages/LogProblem';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route>
          <MainLayout>{appRoute()}</MainLayout>
        </Route>
        <Route path="/log-user" component={LogUser} />
        <Route path="/log-drone" component={LogDrone} />
        <Route path="/log-warn" component={LogWarn} />
        <Route path="/log-problem" component={LogProblem} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
