import React, { useState, useEffect } from 'react';
import classes from './Footer.module.css'
import logo from '../../Logo/LogoCopyright.svg'
import instagramLogo from '../../Logo/instagram.svg'
function Footer() {

    return (
        <div className={classes.Main}>
            <div className={classes.info}>
                <div className={classes.block}>
                    <p className={classes.Adress}> г.Тамбов, Агапкина 25А</p>
                    <p className={classes.Adress}> пн-пт 9:00-18:00 / сб 9:00-16:00</p>
                    <p className={classes.Adress}> 8 (4752) 42-47-27</p>
                    <p className={classes.Adress}> +7 920 233-34-34</p>
                </div>

            </div>
            <div className={classes.Social}>
            
                <a className={classes.inst} href="https://www.instagram.com/cayman_security/">
                <span>Instagram</span>
                    <img className={classes.Icon} src={instagramLogo} />
                </a>

            </div>
            <div className={classes.Logo}>

                <img src={logo} />
            </div>

        </div>
    )
}

export default Footer;