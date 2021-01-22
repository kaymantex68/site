import React from 'react';
import classes from './Diller.module.css';


function Diller(props) {
    const { dillers } = props;
    // console.info('DILLERS NEW PROPS: ', props)
    return (    
        dillers ?
        < div className={classes.Main} >
            <div className={classes.Text}>Мы являемся дилерами</div>

            <div className={classes.Container}>
                {dillers.map((item, key) => {
                    return (
                        <a href={item.link} key={`diller_card_${key}`}>
                            <div className={classes.Diller_container}>
                                <div className={classes.Diller}>
                                    <div className={classes.Picture}>
                                        <img className={classes.Image} src={item.picture} />
                                    </div>
                                    <div className={classes.Text_item}>
                                        {item.LTD}
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div >
        :
        <>
        </>
    )

}

export default Diller;