import React, { useState, useEffect } from 'react';
import hero from '../assets/images/hero.JPG';
import M from 'materialize-css';
function Parallax() {
   useEffect(() => {
      M.AutoInit();
   }, []);
   return (
      <div className="parallax-container">
         <div className="parallax">
            <img src={hero} alt=""></img>
         </div>
      </div>
   );
}
export default Parallax;
