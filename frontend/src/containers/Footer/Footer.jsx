import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });
   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
   const [loading, setLoading] = useState(false);

   const { name, email, message } = formData;

   const handleChangeInput = (e) => {
      const { name, value } = e.target;

      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = () => {
      setLoading(true);

      const contact = {
         _type: "contact",
         name: name,
         email: email,
         message: message,
      };

      client.create(contact).then(() => {
         setLoading(false);
         setIsFormSubmitted(true);
      });
   };

   return (
      <>
         <h2 className="head-text">Take a coffe & chat with me</h2>

         <div className="app__footer-cards">
            <div className="app__footer-card ">
               <img src={images.email} alt="Email" />
               <a href="mailto:hello@gmail.com" className="p-text">
                  {" "}
                  Hello world
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.mobile} alt="Mobile" />
               <a href="tel: +84 919 292-938" className="p-text">
                  +84 919 292-938
               </a>
            </div>
         </div>
         {!isFormSubmitted ? (
            <div className="app___footer-form app__flex">
               <div className="app__flex">
                  <input
                     className="p-text"
                     type="text"
                     placeholder="Enter your name"
                     name="name"
                     value={name}
                     onChange={handleChangeInput}
                  ></input>
               </div>
               <div className="app__flex">
                  <input
                     className="p-text"
                     type="email"
                     placeholder="Enter your email"
                     name="email"
                     value={email}
                     onChange={handleChangeInput}
                  ></input>
               </div>
               <div>
                  <textarea
                     className="p-text"
                     placeholder="Your message"
                     value={message}
                     name="message"
                     onChange={handleChangeInput}
                  ></textarea>
               </div>
               <button type="button" className="p-text" onClick={handleSubmit}>
                  {loading ? "Sending" : "Send Message"}
               </button>
            </div>
         ) : (
            <div>
               <h3 className="head-text">Thank you for getting</h3>
            </div>
         )}
      </>
   );
};

export default AppWrap(
   MotionWrap(Footer, "app__footer"),
   "contact",
   "app__whitebg"
);
