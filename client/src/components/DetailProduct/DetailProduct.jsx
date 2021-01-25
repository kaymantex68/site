import React from 'react';
import classes from './DetailProduct.module.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import youtubePic from './youtube.svg';
import { Helmet } from 'react-helmet'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components
import filter from 'lodash/filter'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);


function DetailProduct(props) {
    const { model } = props.match.params;
    const { products } = props;

    // console.info('DETAIL PROPS: ', props)

    const product = filter(products, function (item) {
        return item.model === model;
    })[0];

    // console.info('DETAIL Products: ', product)

    const slides = [];
    for (let i = 1; i < 5; i += 1) {
        if (true) {
            slides.push(
                <SwiperSlide key={`slide-detail-${i}`}>
                    <div className={classes.Container_pic}>
                        <img
                            alt={`${product.model}`}
                            key={`img-detail-${i}`}
                            src={`/img_products/${product.brand}/${product.model}/${i}.png`}
                        />
                    </div>
                </SwiperSlide>
            );
        }
    }


    return (
        <>
            <Helmet>
                <title>{`${product.brand} ${product.model} Видеонаблюдение Тамбов Кайман`}</title>
            </Helmet>
            <div className={classes.ContainerDetail}>
                {/* <div className={classes.Manual}>
                    <div className={classes.Direct}>
                    </div>
                </div> */}
                <div className={classes.DescriptionConteiner}>
                    {/* <div className={classes.Romb1}></div>
                    <div className={classes.Romb2}></div>
                    <div className={classes.Romb3}></div> */}
                    <div className={classes.Block}>
                        <div className={classes.Picture}>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                loop={true}
                                className={classes.Swiper_cont}
                            >
                                {slides}
                            </Swiper>
                        </div>
                        <div className={classes.Description}>
                            <img alt={`${product.model}`} className={classes.PicBrand} src={product.pic_brand} />
                            <div className={classes.UpInfo}>
                                <p className={classes.infoModel}>{product.model}</p>
                                <p className={classes.coastModel}>

                                    {product.old_coast !== false ?
                                        <div><span className={classes.Old_coast} >{`${product.old_coast} руб.`}</span><span className={classes.New_coast}>   {` ${product.coast} руб.`}</span></div> :
                                        `${product.coast} руб.`}
                                </p>
                            </div>
                            <p className={classes.infoDescription}>{product.description}</p>



                            <div className={classes.YoutubeLinks}>
                                {product.youtube_instruction !== undefined ?
                                    <>
                                        <a href={product.youtube_instruction}>
                                            <div className={classes.YoutubeContainer}>
                                                <div className={classes.YoutubeButton}>
                                                    <span className={classes.YoutubeText}>Инструкция</span>
                                                    <img alt={`${product.model}`} className={classes.youtubeIMG} src={youtubePic}></img>
                                                </div>
                                            </div>
                                        </a>
                                    </> :
                                    <></>}

                                {product.youtube !== undefined ?
                                    <>
                                        <a href={product.youtube}>
                                            <div className={classes.YoutubeContainer}>
                                                <div className={classes.YoutubeButton}>
                                                    <span className={classes.YoutubeText}>Видео</span>
                                                    <img alt={`${product.model}`} className={classes.youtubeIMG} src={youtubePic}></img>
                                                </div>
                                            </div>
                                        </a>
                                    </> :
                                    <></>}
                            </div>
                            <div className={classes.menu_description}>
                                {/* <div className={classes.Button_description} onClick={() => { setOpen(false) }}>Характеристики</div> */}
                                {/* {product.download && <div className={classes.Button_download} onClick={() => { setOpen(true) }}>Загрузка</div>} */}
                            </div>
                            <div className={classes.info_download}>
                                {/* <div className={open ? classes.Download_on : classes.Download}>
                                <div className={classes.download_links}>
                                    {
                                        product.download &&
                                        Object.keys(product.download).map((item, index) => {
                                            return (
                                                <a href={product.download[item][1]}><p className={classes.Link_text}>{product.download[item][0]}</p></a>
                                            )
                                        })
                                    }
                                </div>
                            </div> */}
                                {Object.keys(product.info).map((item, key) => {
                                    return (
                                        <div key={`detail-info-${key}`} className={classes.Stringe}>
                                            <div className={classes.Id}>
                                                <span className={classes.infoBold}>{product.info[item][0]}</span>
                                            </div>
                                            <div className={classes.Text}>
                                                <span className={classes.info}>{product.info[item][1]}</span>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default DetailProduct;