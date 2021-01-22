import React from 'react'
import classes from './MainPage.module.css'

import Liders from '../../containers/Liders'
import Sales from '../../containers/Sales'
import Diller from '../../containers/Diller'
import Slider from '../../containers/Slider/Slider'

const MainPage = (props) => {
    // console.info('MAINPAGE PROPS: ', props)
    return (
        <div className={classes.mainPage_container}>
            <Slider />
            <Liders />
            <Sales />
            <Diller />
        </div>
    )
}

export default MainPage;