import React from 'react'
import classes from './CartToPdf.module.css'
import ReactToPrint from 'react-to-print'
import logo from '../../Logo/logo.svg'

const CartToPdf = (props) => {
    const { cartUniq } = props;
    const componentRef = React.useRef();
    console.log(props)

    return (
        <div className={classes.container}>

            <div className={classes.column}>
                <div className={classes.CartDetail_global_operation}>

                    <ReactToPrint
                        trigger={() => <button className={classes.pdf}>распечатать/сохранить</button>}
                        content={() => componentRef.current}
                    />
                </div>
                <div ref={componentRef}>
                    <div className={classes.block_pdf}>
                        <div>
                        <div className={classes.header}>
                            <div className={classes.logo}>
                                <img src={logo} className={classes.img_logo} />
                            </div>
                            <div className={classes.info1}>

                            </div>
                            <div className={classes.info2}>
                                <p className={classes.p_info}><span className={classes.span_info}>Системы безопасности "Кайман"</span></p>
                                <p className={classes.p_info}><span className={classes.span_info}>г.Тамбов, ул.Агапкина 25А</span></p>
                                <p className={classes.p_info}><span className={classes.span_info}>тел: 8 (4752) 42-47-27</span></p>
                                <p className={classes.p_info}><span className={classes.span_info}>тел/watsApp: +7 (920) 233-34-34</span></p>
                                <p className={classes.p_info}><span className={classes.span_info}>mail: info@kaymantex.ru</span></p>
                                <p className={classes.p_info}><span className={classes.span_info}>пн-пт: 9:00-18:00, сб: 9:00-16:00, вс: выходной</span></p>
                            </div>

                        </div>
                        <div className={classes.description_text}>
                            <div><span className={classes.span_description_text}>{`Коммерческое предложение`}</span></div>
                        </div>
                        <div className={classes.description_info}>
                            <div><span className={classes.span_description_info}>{`Итого: ${cartUniq.reduce((a, b) => a + (b.coast * b.count), 0)} руб.`}</span></div>
                        </div>
                        <div className={classes.ProductCard_shapka}>
                                    <div className={classes.ProductCard_picture}>
                                       Фото
                                    </div>
                                    <div className={classes.ProductCard_description}>
                                        <p className={classes.Model_name_shapka}>Наименование</p>
                                    </div>
                                    <div className={classes.ProductCard_count}>
                                    <p className={classes.Model_name}>Кол-во</p>
                                    </div>
                                    <div className={classes.ProductCard_coast}>
                                    <p className={classes.Model_name}>Цена</p>
                                    </div>
                                    <div className={classes.ProductCard_summ}>
                                    <p className={classes.Model_name}>Сумма</p>
                                    </div>
                                </div>
                        {cartUniq.map((product, key) => {
                            return (
                                <div className={classes.ProductCard_container}>
                                    <div className={classes.ProductCard_picture}>
                                        <img className={classes.ProducCard_picture_img} alt={product.model} src={`/img_products/${product.brand}/${product.model}/1.png`} />
                                    </div>
                                    <div className={classes.ProductCard_description}>
                                        <p className={classes.Model_name}>{product.model}</p>
                                        <p className={classes.Model_description}>{product.type[0]}</p>
                                        <p className={classes.Model_description}>{product.info.text}</p>
                                        <p className={classes.Model_description}>{product.info.text1}</p>
                                    </div>
                                    <div className={classes.ProductCard_count}>
                                        <input className={classes.count_input} value={product.count} min="1" />
                                    </div>
                                    <div className={classes.ProductCard_coast}>
                                        <p className={classes.Model_description_coast}>{`${product.coast} руб.`}</p>
                                    </div>
                                    <div className={classes.ProductCard_summ}>
                                        <p className={classes.Model_description_summ}>{`${product.coast * product.count} руб.`}</p>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CartToPdf;




