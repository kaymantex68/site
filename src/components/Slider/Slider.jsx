import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import ImgSlide from './ImgSlide';
import classes from './Slider.module.css';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Slider = (props) => {
    const { Slides } = props;
    const slidesArr = [];
    /**
     * формируем массив слайдов, в массив добавлем компоненту ImgSlider 
     * которая отрисовывет нам один слайд
     */
    Slides.map((item, index) => {
        slidesArr.push(
            <SwiperSlide key={`slide-${index}`}>
                {item.link_a &&
                    <a key={`link-nav-${index}`} href={item.link_a}>
                        <ImgSlide key={index} obj={item} />
                    </a>
                }
                {item.link_b &&
                    <Link to={item.link_b}>
                        <ImgSlide key={index} obj={item} />
                    </Link>
                }
            </SwiperSlide>
        );
    })


    return (
        <div className={classes.slider_container}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={{ clickable: true }}
                pagination={{ clickable: false }}
                loop={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                className={classes.slider_container_pagination}
            >
                {slidesArr}
            </Swiper>
        </div>
    )
}

export default Slider;