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
import AddReview from './Components/Home/ReviewInfo/AddReview/AddReview';
import Review from './Components/Home/Review/Review';
import Admin from './Components/Admin/Admin';
import AddAdmin from './Components/AddAdmin/AddAdmin';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <h1>Repair World</h1>
      <h3>{loggedInUser.email}</h3>

      <Router>
        <Switch>
          <Route exact path="/">

            <Home></Home>

          </Route>
          <Route  path="/home">

            <Home></Home>

          </Route>
          <PrivateRoute path="/admin">

            <Admin></Admin>


          </PrivateRoute>
           <PrivateRoute path="/addReview">

            <AddReview></AddReview>


          </PrivateRoute>
          <Route path="/addAdmin">

            <AddAdmin></AddAdmin>


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
