import React from 'react'
import classes from './CartDetail.module.css'
import ProductCardInCart from './ProductCardInCart'
import axios from 'axios'

const sendMail = async (message) => {
    await axios.post('/SendOrder', message).then(response => console.log(response.data.message))
}


const CartDetail = (props) => {
    const { cartUniq, cartSumm } = props;
    const { clearCart } = props;

    let message = [`Сумма заказа: ${cartSumm}`]
    message = [...message, ...cartUniq.map((model, key) => {
        return `${model.model} | количество: ${model.count} | цена: ${model.coast}`
    })]

    // console.info('MESSAGE: ', message)
    // console.info('CART DETAIL PROPS: ', props)
    // console.info('CART DETATIL: ', cartUniq)
    return (
        <div className={classes.CartDetail_container}>
            <div className={classes.CartDetail_block}>
                <div className={classes.CartDetail_global_operation}>
                    <span className={classes.Сheckout} onClick={() => sendMail(message)}>оформить заказ</span>
                    <span className={classes.Summa_fixed}>{`сумма: ${cartSumm} руб.`}</span>
                    <span className={classes.Remove_all_button_span} onClick={() => clearCart([])}>очистить корзину</span>
                </div>
                <div className={classes.CartDetail_container_list_products}>
                    {cartUniq.map((product, key) => {
                        return (
                            <ProductCardInCart key={`Product_${key}`} {...product} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CartDetail;