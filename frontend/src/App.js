import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./app.css";

import AdminPage from "./components/Admin/AdminPage";
import Apparel from "./components/Apparel";
import Beats from "./components/Beats";
import Faqs from "./components/Faqs";
import Account from "./components/Account";
import LandingPage from "./components/LandingPage";
import Header from "./components/UI/Header";
import Checkout from "./components/Checkout/Checkout";
import Lease from "./components/Checkout/Lease";
import Purchase from "./components/Checkout/Purchase";
import Login from "./components/Authentication/Login"
import Register from "./components/Authentication/Register"

const App = () => {
  const [selectedTrack, setSelectedTrack] = useState({});
  console.log(selectedTrack);
  return (
    <div className="bg-black">
      <Router>
        <Header className=""></Header>
        <Switch>
          <Route path="/" exact>
            <LandingPage
              setSelectedTrack={setSelectedTrack}
              selectedTrack={selectedTrack}
            ></LandingPage>
          </Route>
          <Route path="/admin" component={AdminPage}></Route>
          <Route path="/apparel" component={Apparel}></Route>
          <Route path="/beats" component={Beats}></Route>
          <Route path="/faqs" component={Faqs}></Route>

          <Route path="/account" component={Account}></Route>

          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route
            path="/checkout"
            component={Checkout}
            setSelectedTrack={setSelectedTrack}
            selectedTrack={selectedTrack}
          ></Route>
          <Route path="/lease">
            <Lease
              setSelectedTrack={setSelectedTrack}
              selectedTrack={selectedTrack}
            ></Lease>
          </Route>
          <Route
            path="/purchase"
            component={Purchase}
            setSelectedTrack={setSelectedTrack}
            selectedTrack={selectedTrack}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
