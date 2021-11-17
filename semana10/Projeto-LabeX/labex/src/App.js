import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import TripDetailsPage from "./pages/TripDetailsPage/TripDetailsPage";
import ListTripsPage from "./pages/ListTripsPage/ListTripsPage"
import CreateTripPage from "./pages/CreateTripPage/CreateTripPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage"
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage"
import {BrowserRouter, Switch, Route} from "react-router-dom";


const App = () => {


  return (
    <BrowserRouter>
    <Switch>
      <Route exact path={"/"}>
      <HomePage/>
      </Route>

      <Route exact path={"/trips/list"}>
      <ListTripsPage/>
      </Route>

      <Route exact path={"/trips/application"}>
      <ApplicationFormPage/>
      </Route>

      <Route exact path={"/login"}>
      <LoginPage/>
      </Route>
      
      <Route exact path={"/admin/trip/list"}>
      <AdminHomePage/>
      </Route>

      <Route exact path={"/admin/trips/create"}>
      <CreateTripPage/>
      </Route>
     
      <Route exact path={"/admin/trips"}>
      <TripDetailsPage/>
      </Route>
      
    
      
     
      
      
      
    </Switch>
    </BrowserRouter>
  );
}


export default App;
