import React, { Component } from "react";
import Slider from "react-slick";



export default class Fade extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      fade: true,
      infinite: true,
      speed: 4000,
      slidesToShow:4,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>
            <img src="/images/ofertas/cursosOferta1.jpg"/>
          </div>
          <div>
            <img src="/images/ofertas/cursosOferta2.jpg"/>
          </div>
          <div>
            <img src="/images/ofertas/cursosOferta3.jpg"/>
          </div>
          <div>
            <img src="/images/ofertas/cursosOferta4.jpg"/>
          </div>
          
        </Slider>
      </div>
    );
  }
}