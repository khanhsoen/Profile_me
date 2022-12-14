import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap} from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
   const [activeFillter, setActiveFillter] = useState("All");
   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
   const [works, setWorks] = useState([]);
   const [fillerWork, setFillterWork] = useState([]);

   const handleWorkFillter = (item) => {
      setActiveFillter(item);
      setAnimateCard({ y: 100, opacity: 0 });

      setTimeout(() => {
         setAnimateCard({ y: 0, opacity: 1 });

         if(item === 'All') {
            setFillterWork(works)
         }else {
            setFillterWork(works.filter((work) => work.tags.includes(item)));
         }
      }, 500);
   };

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
            {fillerWork.map((work, index) => (
               <div className="app__work-item app__flex" key={index}>
                  <div className="app__work-img app__flex">
                     <img src={urlFor(work.imgUrl)} alt={work.title} />

                     <motion.div
                        whileHover={{ opacity: [0, 1] }}
                        transition={{
                           duration: 0.25,
                           ease: "easeInOut",
                           staggerChildren: 0.5,
                        }}
                        className="app__work-hover app__flex"
                     >
                        <a href={work.projectLink}>
                           <motion.div
                              whileInView={{ scale: [0, 1] }}
                              whileHover={{ opacity: [1, 0.8] }}
                              transition={{
                                 duration: 0.25,
                                 ease: "easeInOut",
                              }}
                              className="app__flex"
                           >
                              <AiFillEye />
                           </motion.div>
                        </a>

                        <a href={work.codeLink}>
                           <motion.div
                              whileInView={{ scale: [0, 1] }}
                              whileHover={{ opacity: [1, 0.9] }}
                              transition={{
                                 duration: 0.25,
                                 ease: "easeInOut",
                              }}
                              className="app__flex"
                           >
                              <AiFillGithub />
                           </motion.div>
                        </a>

                     </motion.div>
                  </div>

                  <div className="app__work-content app__flex">
                     <h4 className="bold-text">{work.title}</h4>
                     <p className="p-text" style={{ marginTop: 10 }}>
                        {work.description}
                     </p>

                     <div className="app__work-tag app__flex">
                        <p className="p-text">{work.tags[0]}</p>
                     </div>
                  </div>
               </div>
            ))}
         </motion.div>
      </>
   );
};

export default AppWrap(
   MotionWrap(Work, "app__work"),
   "work",
   "app__primarybg"
);

