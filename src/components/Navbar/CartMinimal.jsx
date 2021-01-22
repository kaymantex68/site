import React from 'react'
import classes from './CartMinimal.module.css'
import cart from '../../../src/Img_products/cart.svg'

function cartMinimal(props) {
    const { cartCount, cartSumm } = props;
    // console.info('CART MINIMAL PROPS', props)
    // console.info('CART MINIMAL', cartCount)
    return (
        <div className={classes.cartMini_container}>
            <div className={classes.cartMini_container_block}>
                <div className={classes.Count_products}>{cartCount}</div>
                <img alt="cart" src={cart} className={classes.cart_img} />
                <span className={classes.cart_text}>корзина</span>
                <div className={classes.block_cart_summ}>
                    <span className={classes.cart_summ}>{`${cartSumm} руб.`}</span>
                </div>
            </div>
        </div>

    )
}

export default cartMinimal;