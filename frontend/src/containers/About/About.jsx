import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { images } from "../../constants";

const About = () => {
   const [abouts, setAbouts] = useState([]);

   useEffect(() => {
      const query = '*[_type == "abouts"]';
      client.fetch(query)
      .then((data) => setAbouts(data));
   }, []);

   return (
      <>
         <h2 className="head-text">
            I Know That
            <span> Good Dev </span>
            <br />
            means
            <span> Good Business</span>
         </h2>

         <div className="app__profiles">
            {abouts.map((about, index) => (
               <motion.div
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "tween" }}
                  key={about.title + index}
                  className="app__profile-item"
               >
                  <img src={urlFor(about.imgUrl)} alt={about.title}></img>
                  <h2 className="bold-text" stype={{ marginTop: 20 }}>
                     {about.title}
                  </h2>
                  <h2 className="p-text" stype={{ marginTop: 10 }}>
                     {about.description}
                  </h2>
               </motion.div>
            ))}
         </div>
      </>
   );
};

export default AppWrap(About, 'about');
