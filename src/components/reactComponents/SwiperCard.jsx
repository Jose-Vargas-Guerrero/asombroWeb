import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Swiper.css'

function SwiperCard({title}) {
  return (
    <>
    <div className="card">
      <h3 className="cardTitle">{title}</h3>
    <Swiper className="mySwiper">
      <SwiperSlide className="slide"><img src="https://img.freepik.com/free-photo/person-using-laptop-using-artificial-intelligence-generate-images_23-2150905286.jpg?size=626&ext=jpg"/></SwiperSlide>
      <SwiperSlide className="slide"><img src="https://img.freepik.com/free-photo/person-using-ai-tool-job_23-2150711488.jpg?size=626&ext=jpg"/></SwiperSlide>
      <SwiperSlide className="slide"><img src="https://img.freepik.com/free-photo/person-using-laptop-using-artificial-intelligence-generate-images_23-2150905296.jpg?size=626&ext=jpg"/></SwiperSlide>
      <SwiperSlide className="slide"><img src="https://img.freepik.com/free-photo/person-laptop-using-artificial-intelligence-generate-image_23-2150571014.jpg?size=626&ext=jpg"/></SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}

export default SwiperCard;
