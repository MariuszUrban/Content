import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";
import NavigationBar from "./UI/NavigationBar/NavigationBar";
import { Login } from "./app/Login/Login";
import { SignIn } from "./app/SignIn/SignIn";
import About from "./UI/About/About";
import Welcome from "./UI/Welcome/Welcome";
import Footer from "./UI/Footer/Footer.jsx";
import TryItOut from "./app/TrItOut/TryItOut";
import Dashboard from "./UI/Dashboard/Dashboard";
import Survey from "./UI/Survey/Survey";
import RecentActivity from "./UI/RecentActivity/RecentActivity";

function App() {
  let routes = (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/try-it">
        <TryItOut />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/survey">
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
