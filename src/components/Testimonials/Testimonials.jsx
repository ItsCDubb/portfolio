import TestimonialsData from "../../assets/data/TestimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonals">
      <h5>Testimonials</h5>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {TestimonialsData.map(
          ({ id, picture, name, title, testimonial, url }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="person__avatar">
                  <a href={url} target="_blank" rel="noreferrer">
                    <img src={picture} alt={name} />
                  </a>
                </div>
                <h5 className="person__name">{name}</h5>
                <h6 className="person__title">{title}</h6>
                <small className="person__testimonial">{testimonial}</small>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default Testimonials;
