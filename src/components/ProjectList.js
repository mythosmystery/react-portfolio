import React from 'react';
import Project from './Project';

import habitTracker from '../assets/images/project-2.PNG';
import weatherDash from '../assets/images/weather.PNG';
import techBlog from '../assets/images/tech.PNG';

function ProjectList() {
   return (
      <div className="container">
         <Project
            title="Tech Blog"
            imageURL={techBlog}
            deployLink="https://tech-blog-hb.herokuapp.com/"
            sourceLink="https://github.com/mythosmystery/tech-blog"
            description="This is a fullstack responsive and user friendly webapp. It is a simple blogging site. You can create and account and make
            posts, write comments, and view other users' posts. It is written in Javascript using Node.js, Express as a web framework,
            Handlebars for templating and server side rendering, and MySQL with Sequelize ORM for the database."
            technologies={['Node.js', 'Express', 'MySQL', 'MaterializeCSS', 'Sequelize', 'Handlebars.js']}
         />
         <div className="row">
            <Project
               title="Habit Tracker"
               imageURL={habitTracker}
               deployLink="https://habittracking-app.herokuapp.com/"
               sourceLink="https://github.com/ashak90/project-02-habit-tracker"
               description="A dynamic fullstack app using Node.js, Express, MySQL with Sequelize ORM, and Handlebars. You can login or create an account then
            add your habits to it and track each time you perform the habit. Habits can be removed or reset as well. It uses encryption to keep
            passwords safe and stores authentication in a cookie."
               technologies={['Node.js', 'Express', 'MySQL', 'Bulma', 'Sequelize', 'Handlebars.js']}
            />
            <Project
               title="Weather Dashboard"
               imageURL={weatherDash}
               deployLink="https://mythosmystery.github.io/weather-forecast/"
               sourceLink="https://github.com/mythosmystery/weather-forecast"
               description="A dynamic and responsive webapp made with jQuery and HTML and CSS. It uses the Open Weather Map API to get current and
                        accurate weather data for each city. It includes a forecast and saves the recent cities the user searches for."
               technologies={['Javascript', 'Openweather API', 'jQuery', 'Bootstrap']}
            />
         </div>
      </div>
   );
}
export default ProjectList;
