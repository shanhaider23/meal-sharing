import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import MealDiaplay from "./components/MealDiaplay";
import Footer from "./components/Footer";
import Error from "./components/Error";
import MealDetail from "./components/MealDetail";
import Reservation from "./components/Reservation";
import AddMeals from "./components/AddMeals";
function App() {
  return (
    <Router>
      <MainHeader />
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/meals" component={MealDiaplay}></Route>
          <Route exact path="/meals/:id" children={<MealDetail />}></Route>
          <Route exact path="/reservation" component={Reservation}></Route>
          <Route exact path="/Addmeals" component={AddMeals}></Route>
          <Route exact path="/contact" component={ContactUs}></Route>
          <Route path="*">
            <Error />
          </Route>
          <Route exact path="/test-component">
            <TestComponent></TestComponent>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
