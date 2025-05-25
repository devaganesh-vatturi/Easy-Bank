import React from 'react';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "../../Styles/OperationSlide.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import img1 from "../../assets/createuser.jpg";
import img2 from "../../assets/deposit.jpg";
import img3 from "../../assets/withdraw.jpg";
import img4 from '../../assets/transfer.jpg';
import img5 from '../../assets/history.jpg';
import img6 from '../../assets/deleteuser.jpg';
import img7 from '../../assets/accountdetails.jpg';
const images = [
    {
        text: "Create User",
        image: img1,
    },
    {
        text: "Deposit cash",
        image: img2,
    },
   {
      text: "Withdraw cash",
      image: img3,
    },
    {
      text: "Transfer",
      image: img4,
    },
    {
      text: "Print History",
      image: img5,
    },
    {
      text: "Delete User",
      image: img6 ,
    },
    {
        text: "Get user details",
        image: img7,
      }
];

const OperationSlide= () => {
  return (
    <div className="ser-emp-main">
      <SwiperContainer
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
            clickable: true,
            el: '.emp-custom-pagination',
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
            <div className="ser-emp-div">
              <img
                src={img.image}
                alt={`slide-${index}`}
                className="ser-emp-img"
              />
              <div className="ser-emp-cls">
              <h2 className="ser-emp-imtxt">{img.text}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperContainer>
      <div className="emp-custom-pagination" />
    
      
      </div>
    
 
    
  );
};

export default OperationSlide;
