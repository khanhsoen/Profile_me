/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
   const [toggle, setToggle] = useState(false);

   return (
      <nav className="app__navbar">
         <div className="app__navbar-logo">
            <img src={images.logo} alt="logo"></img>
         </div>
         <ul className="app__navbar-links">
            {["home", "about", "work", "skill", "contact"].map((items) => (
               <li className="app__flex p-text" key={`link-${items}`}>
                  <div></div>
                  <a href={`#${items}`}> {items}</a>
               </li>
            ))}
         </ul>

         <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            {toggle && (
               <motion.div
                  whileInView={{ x: [300, 0] }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
               >
                  <HiX onClick={() => setToggle(false)} />
                  <ul>
                     {["home", "about", "work", "skill", "contact"].map(
                        (items) => (
                           <li key={items}>
                              <a href={`#${items}`}> {items}</a>
                           </li>
                        )
                     )}
                  </ul>
               </motion.div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
