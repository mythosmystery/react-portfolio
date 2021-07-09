import React, { useState } from 'react';
function NavBar() {
   return (
      <nav>
         <div className="nav-wrapper">
            <a href="#" className="brand-logo">
               <i className="material-icons">child_care</i>Hunter Barton Portfolio
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li>
                  <a href="#projects">Projects</a>
               </li>
               <li>
                  <a href="#photography">Photograpy Portfolio</a>
               </li>
               <li>
                  <a href="#aboutMe">About Me</a>
               </li>
               <li>
                  <a href="#videos">Videos</a>
               </li>
               <li>
                  <a href="#links">Links</a>
               </li>
            </ul>
         </div>
      </nav>
   );
}
export default NavBar;
