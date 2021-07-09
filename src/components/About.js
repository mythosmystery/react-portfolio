import React from 'react';
import me from '../assets/images/me.jpg';
function About() {
   return (
      <div className="container">
         <div className="row">
            <div className="col s12 m3">
               <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                     <img className="activator" src={me} alt="" />
                  </div>
                  <div className="card-content">
                     <span className="card-title activator white-text">
                        Who am I?<i className="material-icons right">more_vert</i>
                     </span>
                  </div>
                  <div className="card-reveal">
                     <span className="card-title white-text">
                        About Me<i className="material-icons right">close</i>
                     </span>
                     <p className="white-text">
                        My name is Hunter Barton and I am a 23 year old software developer, photographer, and musician. I am from Tucson Arizona and
                        currently live in Oklahoma City, Oklahoma.
                     </p>
                  </div>
               </div>
            </div>
            <div className="col s12 m8">
               <div className="card" id="aboutMe">
                  <div className="card-content white-text">
                     <span className="card-title">About Me</span>
                     <p>
                        My name is Hunter Barton and I am a 23 year old software developer, photographer and musician. In 2020 I moved to Oklahoma
                        City from Tucson, AZ. My first passion is music. When I was 10 years old I got a bass guitar for christmas and I've been
                        hooked ever since. I have been playing bass, and now other instruments like guitar and piano for the last 13 years. I have
                        been in several bands. I took a photography class in highschool and that got me interested in photography. About 4 years ago I
                        got my first real camera and started taking pictures of everything I could see. Not long after that I started recording video
                        too. I have filmed several concerts and would like to do more once live music is back. I have been programming for about 5
                        years, but I have had an interest since a young age because of my Dad who is also a programmer. I started with Java and have
                        moved on to learning the MERN stack. My passion for programming and computers has always drawn me to the industry. I
                        especially would like to merge all of my interests and do work on coding projects related to music or photo/video. I have
                        taken programming classes at Pima Community College in Tucson, AZ. I am currently working through the programming bootcamp at
                        GA Tech. As well as a passion for software I also have a passion for electronics. I worked as an audio electronics technician
                        for nearly 5 years. I have very diverse interests and skills, and I would like to merge them all together to become a truly
                        full stack developer and person.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default About;
