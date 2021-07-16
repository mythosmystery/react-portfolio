import React, { useState } from 'react';
function NavBar() {
   const [selected, setSelected] = useState();

   return (
      <div className="navbar-fixed">
         <nav>
            <div className="nav-wrapper">
               <a href="#" className="brand-logo">
                  <i className="material-icons">child_care</i>Hunter Barton Portfolio
               </a>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                     <a href="#">Home</a>
                  </li>
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
                  <li>
                     <a
                        class="waves-effect waves-light btn"
                        href="https://docs.google.com/document/d/1dYFOCygbHpLh4Au3UYtiVKhidQzTet0mkds7MHchD9k/edit?usp=sharing"
                     >
                        Resume
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
}
export default NavBar;
