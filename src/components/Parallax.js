import React, { useState, useEffect } from 'react';
import hero from '../assets/images/hero.JPG';
import M from 'materialize-css';
function Parallax() {
   useEffect(() => {
      M.AutoInit();
   }, []);
   return (
      <div class="parallax-container">
         <div class="parallax">
            <img src={hero} alt=""></img>
         </div>
      </div>
   );
}
export default Parallax;
