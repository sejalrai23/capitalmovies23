import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import "./App.css";
import Home from "./Containers/Home/index";
import Popular from "./Containers/Popular/index";
import Latest from "./Containers/Latest/index";
import Signup from "./Containers/Signup/index";
import Login from "./Containers/Login/index";

function App() {
  return (
    <div className="app">
      <Switch>
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} /> */}
        <Route exact path="/">
          <Redirect to="/discover" />
        </Route>
        <Route exact path="/discover" component={Home} />
        <Route exact path="/discover/popular" component={Popular} />
        <Route exact path="/discover/latest" component={Latest} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>

    </div>
  );
}

export default App;
