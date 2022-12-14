import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Skill.scss";

const Skill = () => {
   const [experience, setExperience] = useState([]);
   const [skill, setSkills] = useState([]);

   useEffect(() => {
      const query = '*[_type == "experiences"]';
      const skillQuery = '*[_type == "skills"]';

      client.fetch(query).then((data) => {
         setExperience(data);
      });

      client.fetch(skillQuery).then((data) => {
         setSkills(data);
      });
   }, []);

   return (
      <>
         <h2 className="head-text"> Skill & Experience</h2>
         <div className="app__skils-container">
            <motion.div className="app__skills-list">
               {skill.map((skill, index) => (
                  <motion.div
                     whileInView={{ opacity: [0, 1] }}
                     transition={{ duration: 0.5 }}
                     className="app__skills-item app__flex"
                     key={skill.name + index}
                  >
                     <div
                        className="app__flex"
                        stype={{ backgroundColor: skill.bgColor }}
                     >
                        <img src={urlFor(skill.icon)} alt={skill.name} />
                     </div>
                     <p className="p-text">{skill.name}</p>
                  </motion.div>
               ))}
            </motion.div>

            <motion.div className="app__skills-exp">
               {experience?.map((experience) => (
                  <motion.div
                     className="app__skills-exp-item"
                     key={experience.year}
                  >
                     <div className="app__skills-exp-year">
                        <p className="bold-text">{experience.year}</p>
                     </div>

                     <motion.div className="app__skills-exp-works">
                        {experience.works.map((work) => (
                           <>
                              <motion.div
                                 whileInView={{ opacity: [0, 1] }}
                                 transition={{ duration: 0.5 }}
                                 className="app__skills-exp-work"
                                 data-tip
                                 data-for={work.name}
                                 key={work.name}
                              >
                                 <h4 className="bold-text">{work.name}</h4>
                                 <p className="p-text">{work.company}</p>
                              </motion.div>

                              {/* <ReactTooltip
                                 key={work.name}
                                 id={work.name}
                                 effect="solid"
                                 arrowColor="#fff"
                                 className="skills-tooltip"
                              >
                                 {work.desc}
                              </ReactTooltip> */}
                           </>
                        ))}
                     </motion.div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </>
   );
};

export default AppWrap(
   MotionWrap(Skill, "app__skills"),
   "skill",
   "app__whitebg"
);


