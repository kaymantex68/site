
import React from 'react';
import classes from './ImgSlide.module.css';



function ImgSlide({ obj }) {



    return (
        <div className={classes.Main} style={obj.backPicture != undefined ? { backgroundImage: `url(${obj.backPicture})`, backgroundPosition: 'center', backgroundSize: 'auto', backgroundRepeat: 'no-repeat', } : { backgroundColor: obj.backColor }}>
            <div className={classes.ContainerSlide}>
                <div className={classes.SlidePicture}>
                    <img src={obj.pic} className={classes.Picture} />
                    {obj.new && <p className={classes.Novinka}>новинка</p>}
                </div>
                <div className={classes.Slideinfo}>
                    <div>
                        <p className={classes.Slider_title} style={{ color: obj.colorTitle }}>{obj.title}</p>
                        {obj.description && <p className={classes.Slider_description} style={{ color: obj.colorText }}>{obj.description}</p>}
                        {Object.keys(obj.info).map((item, index) => {
                            return (
                                <p className={classes.Slider_p} key={index} style={{ color: obj.colorText }}>{obj.info[item]}</p>
                            )
                        })}
                        {obj.coast && <h2 className={classes.Slider_coast} style={{ color: obj.colorText }}>{`${obj.coast} руб.`}</h2>}
                    </div>
                </div>
            </div>
        </div>
    );

}
export default ImgSlide;