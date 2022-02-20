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
      <h2>Popular MYTINERARIES!</h2> 

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



      { cities.map(ciudad =>

        <SwiperSlide> 
          {/* <img src={process.env.PUBLIC_URL + `./imgCiudades${ciudad.image}`}/> */}
          <img className="imgCarousel" src={ciudad.image}/>
        </SwiperSlide>
        
        )}
      </Swiper>
    </div>
  );
}


/*                                                                                                  */