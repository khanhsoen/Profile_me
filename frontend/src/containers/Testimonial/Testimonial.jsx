import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Testimonial.scss";

const Testimonial = () => {
   const [brands, setBrands] = useState([]);
   const [testimonials, setTestimonials] = useState([]);
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const query = '*[_type == "testimonials"]';
      const brandQuery = '*[_type == "brands"]';

      client.fetch(query).then((data) => {
         setTestimonials(data);
      });

      client.fetch(brandQuery).then((data) => {
         setBrands(data);
      });
   }, []);

   return (
      <>
         {testimonials.length && (
            <>
               {/* <div className="app__testimonial-item app__flex">
                  <img
                     src={urlFor(testimonials[currentIndex].imgurl)}
                     alt="testimonial"
                  ></img>
               </div> */}
            </>
         )}
      </>
   );
};

export default AppWrap(
   MotionWrap(Testimonial, "app__testimanials"),
   "testimonials",
   "app_primarybg"
);
