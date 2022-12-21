import React from "react";
// import ReactDOM from "react-dom";

import { About, Footer, Header, Skill, Work, Testimonial } from "./containers";
import { Navbar } from "./components";

import './App.scss'

const App = () => {
   return (
      <div className="app">
         <Navbar></Navbar>
         <Header></Header>
         <About></About>
         <Work></Work>
         <Skill></Skill>
         <Testimonial></Testimonial>
         <Footer></Footer>
      </div>
   );
};

export default App;
