// Swiper.jsx
import React from 'react';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "../../Styles/ServiceSlide.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import img1 from "../../assets/transfer.jpg";
import img2 from '../../assets/checkbalance.jpg';
import img3 from '../../assets/history.jpg';
import img4 from '../../assets/accountdetails.jpg';
const images = [
   {
      text: "Transfer to other user",
      image: img1,
    },
    {
      text: "Check balance",
      image: img2,
    },
    {
      text: "Get history",
      image: img3,
    },
    {
      text: "Check self details",
      image: img4,
    }
];

const ServiceSlide = () => {
  return (
    <div className="ser-usr-main">
      <SwiperContainer
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
            0: {
              slidesPerView: 1, 
            },
            650: {
              slidesPerView: 2, 
            },
            1000: {
              slidesPerView: 2, 
            },
            1025: {
              slidesPerView: 3, 
            },
          }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="ser-usr-div">
              <img
                src={img.image}
                alt={`slide-${index}`}
                className="ser-usr-img"
              />
              <div className="ser-usr-cls">
              <h2 className="ser-usr-imtxt">{img.text}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperContainer>
      <div className="custom-pagination" />
    
      
      </div>
    
 
    
  );
};

export default ServiceSlide;
