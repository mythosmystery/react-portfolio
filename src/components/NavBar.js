import React, { useState } from 'react';
function NavBar() {
   return (
      <nav>
         <div class="nav-wrapper">
            <a href="#" class="brand-logo">
               <i class="material-icons">child_care</i>Hunter Barton Portfolio
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
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
