import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AddService from './components/Dashboard/Admin/AddService/AddService';
import OrderServiceLists from './components/Dashboard/Admin/AdminService/OrderServiceLists';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import Order from './components/Dashboard/Customer/Order/Order';
import Reviews from './components/Dashboard/Customer/Reviews/Reviews';
import ServiceList from './components/Dashboard/Customer/ServiceList/ServiceList';
import Dashboard from './components/Dashboard/DashboardCommon/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
export const AdminContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdming, setIsAdmin] = useState(false);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, isAdming, setIsAdmin]}>
      <AdminContext.Provider value={[isAdming, setIsAdmin]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/service-lists">
            <ServiceList/>
          </PrivateRoute>
          <PrivateRoute path="/reviews">
            <Reviews/>
          </PrivateRoute>
          <PrivateRoute path="/add-service">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path="/order-lists">
            <OrderServiceLists/>
          </PrivateRoute>
          <PrivateRoute path="/make-admin">
            <MakeAdmin/>
          </PrivateRoute>
        </Switch>
      </Router>
      </AdminContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
