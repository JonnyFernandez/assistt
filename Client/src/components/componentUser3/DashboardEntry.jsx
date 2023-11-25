import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './DashboardEntry.module.css';
import image1 from '../../assets/image/Home.jpg';
import image2 from '../../assets/image/Cover.jpg';
import image3 from '../../assets/image/Cover2.jpg';

const DashboardEntry = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div >
      <div className={style.dashboardEntry}>
        <Slider {...settings}>
          <div className={style.entryImage}>
            <img src={image1} alt="Entry 1" className={style.slideImage} />
          </div>
          <div className={style.entryImage}>
            <img src={image2} alt="Entry 2" className={style.slideImage} />
          </div>
          <div className={style.entryImage}>
            <img src={image3} alt="Entry 3" className={style.slideImage} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default DashboardEntry;



  
