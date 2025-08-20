import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  return (
    

      <div className="homeSlider py-4">
        <div className="container">
          <Swiper 
          spaceBetween={10}
          navigation={true} 
          modules={[Navigation, Autoplay]} 
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          className="sliderHome">
      <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden"><img src="https://www.shutterstock.com/shutterstock/photos/2152276101/display_1500/stock-vector-home-page-landing-white-gray-web-landing-page-template-digital-website-landing-page-design-concept-2152276101.jpg" alt="Banner slide" className="w-full"/></div>
      </SwiperSlide>
      <SwiperSlide><div className="item rounded-[20px] overflow-hidden"><img src="https://www.shutterstock.com/shutterstock/photos/2152477645/display_1500/stock-vector-home-page-landing-white-gray-web-landing-page-template-digital-website-landing-page-design-concept-2152477645.jpg" alt="Banner slide" className="w-full"/></div></SwiperSlide>
      <SwiperSlide><div className="item rounded-[20px] overflow-hidden"><img src="https://www.shutterstock.com/shutterstock/photos/2490726331/display_1500/stock-vector-abstract-wave-futuristic-design-of-landing-page-retro-gradient-mesh-website-design-2490726331.jpg" alt="Banner slide" className="w-full"/></div></SwiperSlide>
      <SwiperSlide><div className="item rounded-[20px] overflow-hidden"><img src="https://www.shutterstock.com/shutterstock/photos/2385156455/display_1500/stock-vector-powerpoint-presentation-templates-set-use-for-modern-keynote-presentation-background-brochure-2385156455.jpg" alt="Banner slide" className="w-full"/></div></SwiperSlide>
      <SwiperSlide><div className="item rounded-[20px] overflow-hidden"><img src="https://www.shutterstock.com/shutterstock/photos/2522071443/display_1500/stock-vector-creative-powerpoint-presentation-templates-set-use-for-modern-keynote-presentation-background-2522071443.jpg" alt="Banner slide" className="w-full"/></div></SwiperSlide>
      <SwiperSlide><div className="item rounded-[20px] overflow-hidden"><img src="https://www.shutterstock.com/shutterstock/photos/2545529029/display_1500/stock-vector-education-presentation-powerpoint-design-slide-template-kids-back-to-school-brochure-cover-slide-2545529029.jpg" alt="Banner slide" className="w-full"/></div></SwiperSlide>
      <SwiperSlide><div className="item rounded-[20px] overflow-hidden"><img src="https://www.shutterstock.com/shutterstock/photos/1852812145/display_1500/stock-vector-company-presentation-and-pitch-deck-customizable-vector-template-1852812145.jpg" alt="Banner slide" className="w-full"/></div></SwiperSlide>

      </Swiper>
        </div>
      </div>
  )
}

export default HomeSlider;
