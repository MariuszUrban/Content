import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";
import NavigationBar from "./UI/NavigationBar/NavigationBar";
import { Login } from "./app/Login/Login";
import { SignIn } from "./app/SignIn/SignIn";
import About from "./UI/About/About";
import Welcome from "./UI/Welcome";
import Footer from "./UI/Footer/Footer.jsx";
import TryItOut from "./app/TrItOut/TryItOut";
import Dashboard from "./UI/Dashboard/Dashboard";
import Survey from "./UI/Survey/Survey";

function App() {
  let routes = (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/try-it">
        <TryItOut />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/sign-in">
        <SignIn />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/survey">
        <Survey />
      </Route>
    </Switch>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <main className="content-container">{routes}</main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
