import React from 'react'

const BannerBox = (props) => {
  return (
    <div className="box bannerBox">
                <img src={props.img} className="w-full" alt="banner"/>
              
              </div>
  )
}

export default BannerBox;
