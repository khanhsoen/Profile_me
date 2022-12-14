import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
   const [activeFillter, setActiveFillter] = useState("All");
   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
   const [works, setWorks] = useState([]);
   const [fillerWork, setFillterWork] = useState([]);

   const handleWorkFillter = (item) => {};

   useEffect(() => {
      const query = '*[_type == "works"]';

      client.fetch(query).then((data) => {
         setWorks(data);
         setFillterWork(data);
      });
   }, []);

   return (
      <>
         <h2 className="head-text">
            My Creative
            <span> Portfolio </span>
            Section
         </h2>

         <div className="app__work-fillter">
            {[
               "Web App",
               "Javascript",
               "PHP",
               "HTML",
               "CSS",
               "React JS",
               "All",
            ].map((item, index) => (
               <div
                  key={index}
                  onClick={() => handleWorkFillter(item)}
                  className={`app_work-filler-item app__flex p-text ${
                     activeFillter === item ? "item-active" : ""
                  }`}
               >
                  {item}
               </div>
            ))}
         </div>

         <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
         >
            {fillerWork.map((work, index) => {
               <div className="app__work-item app__flex" key={index}>
                  <div className="app__work-img app__flex">
                     <img src={urlFor(work.image)} alt={work.name} />
                  </div>
               </div>;
            })}
         </motion.div>
      </>
   );
};

export default Work;
