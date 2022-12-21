/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line no-unused-vars
import React, { useState, useReducer } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

import reducer, { initState } from "./store/reducer.js";
import { SET_ACTIVE, SET_UNACTIVE } from "./store/actions.js";

//initState
//action
//reduce
//dispath

const Navbar = () => {
   // const [toggle, setToggle] = useState(false);
   const [active, dispath] = useReducer(reducer, initState);

   return (
      <nav className="app__navbar">
         <div className="app__navbar-logo">
            <img src={images.logo} alt="logo"></img>
         </div>
         <ul className="app__navbar-links">
            {["home", "about", "work", "skills", "testimonial", "contact"].map(
               (items) => (
                  <li className="app__flex p-text" key={`link-${items}`}>
                     <div></div>
                     <a href={`#${items}`}>{items}</a>
                  </li>
               )
            )}
         </ul>

         <div className="app__navbar-menu">
            {/* <HiMenuAlt4 onClick={() => setToggle(true)} /> */}
            <HiMenuAlt4 onClick={() => dispath(SET_ACTIVE)} />
            {active && (
               <motion.div
                  whileInView={{ x: [300, 0] }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
               >
                  <HiX onClick={() => dispath(SET_UNACTIVE)} />
                  <ul>
                     {[
                        "home",
                        "about",
                        "work",
                        "skills",
                        "testimonial",
                        "contact",
                     ].map((items) => (
                        <li key={items}>
                           <a href={`#${items}`}> {items}</a>
                        </li>
                     ))}
                  </ul>
               </motion.div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
