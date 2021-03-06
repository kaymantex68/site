import React from 'react'
import ReactToPrint from 'react-to-print'
import classes from './CartDetail.module.css'
import ProductCardInCart from './ProductCardInCart'
import ClientInformation from '../../containers/ClietnInformation'
import ModalWindow from '../../containers/ModalWindowOrder'
import axios from 'axios'
import { saveAs } from 'file-saver'
import { Link } from 'react-router-dom'



const CartDetail = (props) => {
	const { cartUniq, cartSumm, clientInformation } = props;
	const { clearCart } = props;
	const [pdf, setPDF] = React.useState(null)
	const [messageRes, setMessageRes] = React.useState(null)
	const [openModal, setOpenModal] = React.useState(false)
	/**
	 * =============================================================================== отправка письма
	 */
	let wrongDataClient = true
	const sendMail = async (message) => {
		await axios.post('/api/sendMail', message).then(response => console.log(response.data.message))
		setMessageRes(message)
	}
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
					<Link to="/docs/pdf"> <button className={classes.pdf}>pdf</button></Link>
					}
					{cartSumm > 0 && <button className={classes.Сheckout} onClick={() => { setOpenModal(!openModal) }}>оформить заказ</button>}
					<span className={classes.Summa_fixed}>{`сумма: ${cartSumm} руб.`}</span>
					<span className={classes.Remove_all_button_span} onClick={() => clearCart([])}>очистить корзину</span>
				</div>
				<div className={classes.CartDetail_container_list_products}>
					{
						cartSumm == 0 && <div className={classes.cart_empty}>перед оформлением заказа положите что-нибудь в корзину...</div>
					}
					<div>
						{cartUniq.map((product, key) => {
							return (
								<ProductCardInCart key={`Product_${key}`} {...product} {...props} />
							)
						})}
					</div>
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
