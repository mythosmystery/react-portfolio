import React from 'react';
function Project(props) {
   return (
      <div className="col s12 m6">
         <div className="card sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
               <img className="activator" src={props.imageURL} alt="" />
            </div>
            <div className="card-content">
               <span className="card-title activator white-text">
                  {props.title}
                  <i className="material-icons right">more_vert</i>
               </span>
            </div>
            <div className="card-action">
               <a href={props.deployLink}>Check it out!</a>
               <a href={props.sourceLink}>View repository</a>
            </div>
            <div className="card-reveal">
               <span className="card-title grey-text text-darken-4">
                  {props.title}
                  <i className="material-icons right">close</i>
               </span>
               <p>{props.description}</p>
               <ul className="collection with-header">
                  <li className="collection-header">
                     <h4>Technologies Used</h4>
                  </li>
                  {props.technologies.map((tech) => {
                     return <li className="collection-item">{tech}</li>;
                  })}
               </ul>
            </div>
         </div>
      </div>
   );
}
export default Project;
