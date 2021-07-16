import React from 'react';
function Footer() {
   return (
      <footer className="page-footer">
         <div className="container">
            <div className="row">
               <div className="col l6 s12">
                  <h5 className="white-text">Contact Me</h5>
                  <p className="grey-text text-lighten-4">Links to all of the places you can find me</p>
               </div>
               <div className="col l4 offset-l2 s12">
                  <h5 className="white-text" id="links">
                     Links
                  </h5>
                  <ul>
                     <li>
                        <a className="grey-text text-lighten-3" href="https://github.com/mythosmystery">
                           Github
                        </a>
                     </li>
                     <li>
                        <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/hunter-barton-2972701b0/">
                           LinkedIn
                        </a>
                     </li>
                     <li>
                        <a className="grey-text text-lighten-3" href="https://www.youtube.com/c/TheAxiys">
                           Youtube
                        </a>
                     </li>
                     <li>
                        <a className="grey-text text-lighten-3" href="tel:520-780-9324">
                           (520)780-9324
                        </a>
                     </li>
                     <li>
                        <a className="grey-text text-lighten-3" href="mailto:hunterblakebarton@gmail.com">
                           hunterblakebarton@gmail.com
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="footer-copyright">
            <div className="container">© 2021 Hunter Barton</div>
         </div>
      </footer>
   );
}
export default Footer;
