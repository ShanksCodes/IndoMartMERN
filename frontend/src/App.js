
import './App.css';
import Header from "./component/layout/Header/Header.js";
//import { BrowserRouter as Router,Route} from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import WebFont from "webfontloader";
import React from 'react';
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";



function App() {

  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    })
  },[]);

  return (
      <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      </Routes>
      <Footer />
      </Router>
    

  );
  
}

export default App;
