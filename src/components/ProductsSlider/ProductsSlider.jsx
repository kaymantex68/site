import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import ProductCard from '../../containers/ProductsCard'
import classes from './ProductsSlider.module.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth]);
        };
        window.addEventListener("resize", handleResize);
    }, []);
    if (window.innerWidth > 1700) { return 8 }
    if (window.innerWidth < 1700 && window.innerWidth > 1500) { return 7 }
    if (window.innerWidth < 1500 && window.innerWidth > 1400) { return 6 }
    if (window.innerWidth < 1400 && window.innerWidth > 1100) { return 5 }
    if (window.innerWidth < 1100 && window.innerWidth > 900) { return 4 }
    if (window.innerWidth < 900 && window.innerWidth > 700) { return 3 }
    if (window.innerWidth < 700) { return 2 }
    // return size;
}



const Liders = (props) => {
    let url2 ='';
    const { Items, Description } = props;
    const itemsArr = [];
    Items.map((item, index) => {
        url2 ='';
        url2 = `catalog/${item.type[1]}/${item.type[2]}/${item.brand}`
        itemsArr.push(
            <SwiperSlide key={`slider_${index}`}>
                <ProductCard {...item} link={url2} />
            </SwiperSlide>
        );
    })


    return (
        <div className={classes.swiper_container}>
            <div className={classes.swiper_container_description}>
                <span>{Description}</span>
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={useWindowSize()}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                className={classes.swiper_container_products}
            >
                {itemsArr}
            </Swiper>
        </div>
    )

}
export default Liders;