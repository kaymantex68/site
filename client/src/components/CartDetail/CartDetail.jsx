import React from 'react'
import ReactToPrint from 'react-to-print'
import classes from './CartDetail.module.css'
import ProductCardInCart from './ProductCardInCart'
import ClientInformation from '../../containers/ClietnInformation'
import ModalWindow from '../../containers/ModalWindowOrder'
import axios from 'axios'
import { saveAs } from 'file-saver'

import CartToPdf from './CartToPdf'

const CartDetail = (props) => {
    const { cartUniq, cartSumm, clientInformation } = props;
    const { clearCart } = props;

    const [pdf, setPDF] = React.useState(null)
    const [messageRes, setMessageRes] = React.useState(null)
    const [openModal, setOpenModal] = React.useState(false)
    const componentRef = React.useRef();
    /**
     * =============================================================================== отправка письма
     */
    let wrongDataClient = true
    const sendMail = async (message) => {
        await axios.post('/api/sendMail', message).then(response => console.log(response.data.message))

        setMessageRes(message)
    }
    /**
     * =============================================================================== создание PDF
     */
    // const createAndDownloadPdf = (message) => {
    //     let messageFilter = []
    //     message.map(e => {
    //         console.log(e.model)
    //         messageFilter.push({ model: e.model, count: e.count, brand: e.brand })
    //     })
    //     console.log('messageFilter', messageFilter)
    //     axios.post('api/pdf', { data: JSON.stringify(messageFilter) })
    //         .then(() => {
    //             // axios.get('api/get_pdf', { responseType: 'blob' })
    //             console.log('req ok')
    //             return 0
    //         }
    //         )
    // .then((res) => {
    //     const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

    //     saveAs(pdfBlob, 'newPdf.pdf');
    //     
    // })

    // }







    if (clientInformation.length !== 0 && clientInformation.name.length !== 0 && clientInformation.email.length !== 0 && clientInformation.phone.length !== 0) {
        wrongDataClient = false
    }
    const client = `${clientInformation.name} ${clientInformation.email} ${clientInformation.phone}\n${clientInformation.area}`
    let message = [`Сумма заказа: ${cartSumm}`]
    message = [client, ...message, ...cartUniq.map((model, key) => {
        return `${model.model} |--------------- количество: ${model.count} |--------------- цена: ${model.coast}`
    })]

    return (
        <div className={classes.CartDetail_container}>
            <div className={classes.CartDetail_block}>
                <div className={classes.CartDetail_global_operation}>
                    {cartSumm > 0 &&
                        <ReactToPrint
                            trigger={() => <button className={classes.pdf}>pdf</button>}
                            content={() => componentRef.current}
                        />
                    }
                    {cartSumm > 0 && <button className={classes.Сheckout} onClick={() => { setOpenModal(!openModal) }}>оформить заказ</button>}
                    <span className={classes.Summa_fixed}>{`сумма: ${cartSumm} руб.`}</span>
                    <span className={classes.Remove_all_button_span} onClick={() => clearCart([])}>очистить корзину</span>
                </div>
                <div className={classes.CartDetail_container_list_products}>
                    {
                        cartSumm == 0 && <div className={classes.cart_empty}>перед оформлением заказа положите что-нибудь в корзину...</div>
                    }
                    {/* {
                        cartSumm > 0 && <ClientInformation message={wrongDataClient} response={messageRes} />
                    } */}

                    


                    {cartUniq.map((product, key) => {
                        return (
                            <ProductCardInCart key={`Product_${key}`} {...product} {...props} />
                        )
                    })}

                    {/* <div ref={componentRef}>
                        {cartUniq.map((product, key) => {
                            return (
                                <CartToPdf key={`Product_${key}`} {...product} {...props} />
                            )
                        })}
                    </div> */}
                </div>
            </div>
            <ModalWindow active={openModal} setActive={setOpenModal}>
                {
                    <>
                        <ClientInformation message={wrongDataClient} response={messageRes} />
                        <div className={classes.modal_button_box}>
                            <button className={classes.Сheckout} onClick={() => !wrongDataClient && sendMail(message)}>оформить заказ</button>
                            <button className={classes.Сheckout} onClick={() => setOpenModal(!openModal)}>закрыть</button>
                        </div>
                    </>
                }
            </ModalWindow>





        </div>



    )
}

export default CartDetail;
