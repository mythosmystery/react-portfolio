import React from 'react';
function Project(props) {
   return (
      <div class="col s12 m6">
         <div class="card sticky-action">
            <div class="card-image waves-effect waves-block waves-light">
               <img class="activator" src="assets/images/project-2.PNG" alt="" />
            </div>
            <div class="card-content">
               <span class="card-title activator white-text">
                  {props.title}
                  <i class="material-icons right">more_vert</i>
               </span>
            </div>
            <div class="card-action">
               <a href="https://habittracking-app.herokuapp.com/">Check it out!</a>
               <a href="https://github.com/ashak90/project-02-habit-tracker">View repository</a>
            </div>
            <div class="card-reveal">
               <span class="card-title grey-text text-darken-4">
                  {props.title}
                  <i class="material-icons right">close</i>
               </span>
               <p>
                  A dynamic fullstack app using Node.js, Express, MySQL with Sequelize ORM, and Handlebars. You can login or create an account then
                  add your habits to it and track each time you perform the habit. Habits can be removed or reset as well. It uses encryption to keep
                  passwords safe and stores authentication in a cookie.
               </p>
               <ul class="collection with-header">
                  <li class="collection-header">
                     <h4>Technologies Used</h4>
                  </li>
                  <li class="collection-item">Node.js</li>
                  <li class="collection-item">Express.js</li>
                  <li class="collection-item">MySQL</li>
                  <li class="collection-item">Bulma</li>
                  <li class="collection-item">Sequelize</li>
                  <li class="collection-item">Handlebars</li>
               </ul>
            </div>
         </div>
      </div>
   );
}
export default Project;
