import React from 'react'
import classes from './CartDetail.module.css'
import ProductCardInCart from './ProductCardInCart'
import ClientInformation  from '../../containers/ClietnInformation'
import axios from 'axios'

const sendMail = async (message) => {
    await axios.post('/api/sendMail', message).then(response => console.log(response.data.message))
    console.log(message)
}


const CartDetail = (props) => {
    const { cartUniq, cartSumm, clientInformation} = props;
    const { clearCart } = props;
    const client= `${clientInformation.name} ${clientInformation.email} ${clientInformation.phone}`
   

    let message = [`Сумма заказа: ${cartSumm}`]
    message = [client,...message,...cartUniq.map((model, key) => {
        return `${model.model} | количество: ${model.count} | цена: ${model.coast}`
    })]

    return (
        <div className={classes.CartDetail_container}>
            <div className={classes.CartDetail_block}>
                <div className={classes.CartDetail_global_operation}>
                    {cartSumm > 0 && <button className={classes.Сheckout} onClick={() => sendMail(message)}>оформить заказ</button>}
                    <span className={classes.Summa_fixed}>{`сумма: ${cartSumm} руб.`}</span>
                    <span className={classes.Remove_all_button_span} onClick={() => clearCart([])}>очистить корзину</span>
                </div>
                <div className={classes.CartDetail_container_list_products}>
                    {
                        cartSumm == 0 && <div className={classes.cart_empty}>перед оформлением заказа положите что-нибудь в корзину...</div>
                    }
                    {
                        cartSumm > 0 && <ClientInformation />
                    }
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