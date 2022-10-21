import React from 'react'

const slides = [
    { imageUrl: './react_app/images/logo1.png'},
    { imageUrl: './react_app/images/logo2.png'},
    { imageUrl: './react_app/images/logo3.png'},
    { imageUrl: './react_app/images/logo4.png'},
    { imageUrl: './react_app/images/logo5.png'}
]

const slideItems = slides.map(slide =>
  <div className="col-lg-2 d-flex justify-content-center" key={slide.imageUrl}>
      <img src={slide.imageUrl} alt="Logo" />
  </div>
);

const Slider = () => {
  return (
    <>
      <div className="col-lg-1"></div>
      {slideItems}
      <div className="col-lg-1"></div>
    </>
  )
}

export default Slider