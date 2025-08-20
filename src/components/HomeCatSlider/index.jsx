import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Navigation } from 'swiper/modules';

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider pt-4 py-8 ">
      <div className="container">
        <Swiper
        slidesPerView={8}
        spaceBetween={10}
        navigation={true} 
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://toppng.com/uploads/preview/fashion-png-transparent-images-shopping-girl-115633192337e8cquuee3.png" className="w-[60px]"/>
            <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://cdn.imgbin.com/14/11/19/imgbin-basic-electricity-electronics-multimeter-others-760VBNe0TAzznTRjgucukxTrk.jpg" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://www.shutterstock.com/shutterstock/photos/2508696527/display_1500/stock-photo-luxury-clothes-store-in-shopping-mall-2508696527.jpg" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://www.shutterstock.com/shutterstock/photos/2508696527/display_1500/stock-photo-luxury-clothes-store-in-shopping-mall-2508696527.jpg" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://www.shutterstock.com/shutterstock/photos/2508696527/display_1500/stock-photo-luxury-clothes-store-in-shopping-mall-2508696527.jpg" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
          </div>
          </Link>
        </SwiperSlide>


        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://www.shutterstock.com/shutterstock/photos/2508696527/display_1500/stock-photo-luxury-clothes-store-in-shopping-mall-2508696527.jpg" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://www.shutterstock.com/shutterstock/photos/2508696527/display_1500/stock-photo-luxury-clothes-store-in-shopping-mall-2508696527.jpg" className="w-[60px] transition-all"/>
            <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
          </div>
          </Link>
        </SwiperSlide>
        

        
        
      </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider;