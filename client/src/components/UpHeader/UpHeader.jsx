import React from 'react';
import classes from './UpHeader.module.css';

function UpHeader() {
    return (
        <div className={classes.upHeader}>
            <div className={classes.upHeader_container}>
                <div className={classes.upHeader_container_Mail}><span className={classes.span_info}>info@kaymantex.ru</span></div>
                <div className={classes.upHeader_container_Phone}><span className={classes.span_info}>8 (4752) 42-47-27</span> <span className={classes.span_info}>+7 920 233-34-34</span> </div>
                <div className={classes.upHeader_container_Raspisanie}><span className={classes.span_info}>пн-пт 9:00-18:00</span> <span className={classes.span_info}>сб 9:00-16:00 / вс выходной</span> </div>
                <div className={classes.upHeader_container_Info}><span className={classes.span_info}>Тамбов, ул.Агапкина 25А</span></div>
            </div>
        </div>
    )
};

export default UpHeader;