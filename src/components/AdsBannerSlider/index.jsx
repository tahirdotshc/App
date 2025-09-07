
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
            <Swiper
            slidesPerView={props.items}
            spaceBetween={10}
            navigation={true} 
            modules={[Navigation]}
            className="smlBtn"
          >
            <SwiperSlide>
              <BannerBox img={'https://img.freepik.com/free-vector/futuristic-shopping-online-landing-page-template_23-2148540345.jpg'} link={'/'}/>
            </SwiperSlide>

            <SwiperSlide>
              <BannerBox img={'https://img.freepik.com/free-vector/futuristic-shopping-online-landing-page-template_23-2148540345.jpg'} link={'/'}/>
            </SwiperSlide>

            <SwiperSlide>
              <BannerBox img={'https://img.freepik.com/free-vector/futuristic-shopping-online-landing-page-template_23-2148540345.jpg'} link={'/'}/>
            </SwiperSlide>

            <SwiperSlide>
              <BannerBox img={'https://img.freepik.com/free-vector/futuristic-shopping-online-landing-page-template_23-2148540345.jpg'} link={'/'}/>
            </SwiperSlide>

            <SwiperSlide>
              <BannerBox img={'https://img.freepik.com/free-vector/futuristic-shopping-online-landing-page-template_23-2148540345.jpg'} link={'/'}/>
            </SwiperSlide>

            <SwiperSlide>
              <BannerBox img={'https://img.freepik.com/free-vector/futuristic-shopping-online-landing-page-template_23-2148540345.jpg'} link={'/'}/>
            </SwiperSlide>
            
            </Swiper>
   </div>
  )
}

export default AdsBannerSlider;
