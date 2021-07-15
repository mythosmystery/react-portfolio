import React from 'react';
function VideoCard(props) {
   return (
      <div class="col s12 m6">
         <div class="card">
            <div class="card-image">
               <img src={props.imgSrc} />
               <span class="card-title">{props.title}</span>
            </div>
            <div class="card-content white-text">
               <p>{props.description}</p>
            </div>
            <div class="card-action">
               <a href={props.link}>Watch Here</a>
            </div>
         </div>
      </div>
   );
}
export default VideoCard;
