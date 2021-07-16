import React from 'react';
import trees from '../assets/images/dead-trees.JPG';
import dog from '../assets/images/dog.JPG';
import flare from '../assets/images/lens-flare.JPG';
import desert from '../assets/images/night-desert-1.JPG';
import flower from '../assets/images/red-flower.JPG';
import moonlight from '../assets/images/moonlight.JPG';
import city from '../assets/images/night-city.JPG';

function Carousel() {
   const images = [trees, dog, flare, desert, flower, moonlight, city];
   return (
      <div class="carousel carousel-slider" id="photography">
         {images.map((image) => {
            return (
               <a class="carousel-item" href={image}>
                  <img src={image} alt="" />
               </a>
            );
         })}
      </div>
   );
}
export default Carousel;
