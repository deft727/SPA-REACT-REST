import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navigation/Navbar";
import CategoryDetail from "./components/Category/CategoryDetail";
import PostDetail from "./components/Posts/PostDetail";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/post/:id" exect component={PostDetail} />
                <Route path="/category/:id" exect component={CategoryDetail} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
