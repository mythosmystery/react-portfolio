import React from 'react';
import Project from './Project';

import devCrowd from '../assets/images/devcrowd.png';
import techBlog from '../assets/images/tech.PNG';
import weather from '../assets/images/weather.png';

function ProjectList() {
   return (
      <div className="container" id="projects">
         <Project
            title="Dev Crowd"
            imageURL={devCrowd}
            deployLink="https://dev-crowd.herokuapp.com/"
            sourceLink="https://github.com/ashak90/project-03-dev-crowd"
            description="A full-stack, mobile responsive social media site. Using React and Bootstrap for the frontend. 
            On the backend this site uses Express, MongoDB, and GraphQL. 
            A responsive and user-friendly UI experience is paired with a fully featured backend for future features."
            technologies={['Node.js', 'Express', 'React', 'Bootstrap', 'MongoDB', 'GraphQL', 'Apollo']}
         />
         <div className="row">
            <Project
               title="Tech Blog"
               imageURL={techBlog}
               deployLink="https://tech-blog-hb.herokuapp.com/"
               sourceLink="https://github.com/mythosmystery/tech-blog"
               description="This is a full-stack responsive and user friendly webapp. It is a simple blogging site. You can create and account and make
            posts, write comments, and view other users' posts. It is written in Javascript using Node.js, Express as a web framework,
            Handlebars for templating and server side rendering, and MySQL with Sequelize ORM for the database."
               technologies={['Node.js', 'Express', 'MySQL', 'MaterializeCSS', 'Sequelize', 'Handlebars.js']}
            />
            <Project
               title="React Weather"
               imageURL={weather}
               deployLink="https://mythosmystery.github.io/weather-react/"
               sourceLink="https://github.com/mythosmystery/weather-react"
               description="This is react based single-page application.
               It fetches current and future weather data from the Open Weather API.
               It uses React-query to handle the data and displays it in an attractive Bootstrap UI."
               technologies={['React', 'React-query', 'Bootstrap', 'Open Weather API']}
            />
         </div>
      </div>
   );
}
export default ProjectList;
