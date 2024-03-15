import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Swiper.css'

function SwiperCard({title}) {
  return (
    <>
    <div className="card">
      <h3 className="cardTitle">{title}</h3>
    <Swiper className="mySwiper">
      <SwiperSlide className="slide"><img src="https://img.freepik.com/free-vector/startup-isometric-concept_1284-10902.jpg"/></SwiperSlide>
      <SwiperSlide className="slide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzy6b3AHfjsG18JkXF1BsJUg7A0wClZ1wR2w&usqp=CAU"/></SwiperSlide>
      <SwiperSlide className="slide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9a-NOhpKu8mZ9cqjsOUSZUrpFBUTwoKnuw&usqp=CAU"/></SwiperSlide>
      <SwiperSlide className="slide"><img src="https://img.freepik.com/free-vector/startup-isometric-concept_1284-10902.jpg"/></SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}

export default SwiperCard;
