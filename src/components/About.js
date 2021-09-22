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
                     <span className="card-title">
                        About Me<i className="material-icons right">close</i>
                     </span>
                     <p>
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
                        City from Tucson, AZ. I have been programming for about 5 years, but I have had an interest since a young age because of my
                        Dad who is also a programmer. I started with Java and have since learned Javascript, Typescript, and I am learning C#
                        currently. My passion for programming and computers has always drawn me to the industry. I have taken programming classes at
                        Pima Community College in Tucson, AZ. I completed the Georgia Tech full-stack coding bootcamp with straight A's. I was the
                        lead programmer on our final project, which was a social media app. Prior to attending the GA Tech bootcamp I managed Google
                        ads and a Squarespace website for my employer. At that job I also troubleshot and repaired electronic equipment, this gave me
                        a strong background for logically debugging systems.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default About;
