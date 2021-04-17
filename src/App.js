import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import AddService from './Components/AddService/AddService'

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>
          <Route exact path="/">

            <Home></Home>

          </Route>
          <Route path="/addService">

            <AddService></AddService>


          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout/from/:serviceId">

            <Checkout></Checkout>

          </PrivateRoute>
          
        </Switch>
      </Router>

    </UserContext.Provider>

  );
}

export default App;
