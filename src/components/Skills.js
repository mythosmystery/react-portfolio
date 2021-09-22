import React from 'react';
function Skills() {
   return (
      <div className="container">
         <div className="col s12 m8">
            <div className="card" id="skills">
               <div className="card-content white-text">
                  <span className="card-title">My Skills</span>
                  <h5>Languages: </h5>
                  <ul className="list-group">
                     <li className="list-group-item">Javascript</li>
                     <li className="list-group-item">Java</li>
                     <li className="list-group-item">C#</li>
                  </ul>
                  <h5>Technologies: </h5>
                  <ul className="list-group">
                     <li className="list-group-item">Node</li>
                     <li className="list-group-item">React</li>
                     <li className="list-group-item">MongoDB</li>
                     <li className="list-group-item">MySQL</li>
                     <li className="list-group-item">Express</li>
                     <li className="list-group-item">GraphQL</li>
                     <li className="list-group-item">MongoDB</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Skills;
