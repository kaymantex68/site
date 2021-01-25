import React from 'react'
import classes from './ProductCardInCart.module.css'
import { Link } from 'react-router-dom'

const ProductCardInCart = (props) => {
    // console.info('CART PRODUct: ', props)
    const { model, brand, type, info, count, coast } = props;
    const { addProductToCart, removeProductFromCart, removePositionFromCart } = props;


    const [changeInput, setChangeInput] = React.useState(false);
    const reloadPages = (e) => {
        if (e.target.value > count) {
            for (let i = 0; i < e.target.value - count; i++) addProductToCart(props)
        }
        if (e.target.value < count && e.target.value >= 1) {
            for (let i = 0; i < count - e.target.value; i++) removeProductFromCart(props.model)

        }
        setChangeInput(!changeInput);
    }

    return (
        <div className={classes.ProductCard_container}>

            <div className={classes.ProductCard_picture}>
                <img className={classes.ProducCard_picture_img} alt={model} src={`/img_products/${brand}/${model}/1.png`} />
            </div>

            <div className={classes.ProductCard_description}>
                <Link to={`${props.link}/${props.model}`}>
                    <p className={classes.Model_name}>{model}</p>
                    <p className={classes.Model_description}>{type[0]}</p>
                    <p className={classes.Model_description}>{info.text}</p>
                    <p className={classes.Model_description}>{info.text1}</p>
                </Link>
            </div>

            <div className={classes.ProductCard_count}>
                {/* <p className={classes.Model_description_count}>{count}</p> */}
                <input className={classes.count_input} onChange={(e) => reloadPages(e)} value={count}  min="1" />
            </div>
            <div className={classes.ProductCard_coast}>
                <p className={classes.Model_description_coast}>{`${coast} руб.`}</p>
            </div>
            <div className={classes.ProductCard_summ}>
                <p className={classes.Model_description_summ}>{`${coast * count} руб.`}</p>
            </div>
            <div className={classes.Buttons}>
                <div className={classes.ProductCard_button_minus}>
                    <p className={classes.button_minus} onClick={() => removeProductFromCart(props.model)}>-</p>
                </div>
                <div className={classes.ProductCard_button_plus}>
                    <p className={classes.button_plus} onClick={() => addProductToCart(props)}>+</p>
                </div>
                <div className={classes.ProductCard_button_remove}>
                    <p className={classes.button_remove} onClick={() => removePositionFromCart(props.model)}>удалить</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCardInCart;
