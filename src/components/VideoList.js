import React from 'react';
import VideoCard from './VideoCard';
import entheos from '../assets/images/entheos.PNG';
import leo from '../assets/images/leo.PNG';
function VideoList() {
   return (
      <div className="container" id="videos">
         <div className="row">
            <VideoCard
               title="Entheos Live Video"
               description="A video I filmed at a concert that I am extremely proud of."
               link="https://www.youtube.com/watch?v=BP8ec8usVwo"
               imgSrc={entheos}
            />
            <VideoCard
               title="Leo and the Libra Live"
               description="Another concert video that I worked very hard on."
               link="https://www.youtube.com/watch?v=MffBxF4gpfU"
               imgSrc={leo}
            />
         </div>
      </div>
   );
}
export default VideoList;
