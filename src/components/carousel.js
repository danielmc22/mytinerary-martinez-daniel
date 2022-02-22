import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../styles/carousel.css"; 
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cities from "../ciudades.js"

// import required modules

import { Autoplay, Pagination, Navigation, Grid } from "swiper";

export default function Carousel() {
  return (

    <div className="containerCarousel">
      <div className="titleCarousel">
        <h2>Popular MyTineraries!</h2> 
      </div>

      <Swiper 
        slidesPerView={2}
        grid={{
          rows:2
        }}
        slidesPerGroup={2}
        
        spaceBetween={30}
        /*centeredSlides={true}*/
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Grid]}
        className="mySwiper"
      >



      {cities.map(ciudad =>

        <SwiperSlide>  
            <img className="imgCarousel" src={ciudad.image}/>
            <p className="nombreImagen">{ciudad.name}</p> 
        </SwiperSlide>
        
        )}
      </Swiper>
    </div>
  );
}


/*                                                                                                  */