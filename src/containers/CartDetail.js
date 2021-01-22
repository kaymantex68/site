import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart'
import uniqBy from 'lodash/uniqBy'
import orderBy from 'lodash/orderBy'

import CartDetail from '../components/CartDetail/CartDetail.jsx'


const Unic = (cart) => {
    
    const unicCart =uniqBy(cart.items, o => o.model);
    const Cart=cart.items;
    let newUniCart=[];
    // console.info('unicCart', unicCart);
    // console.info('Cart', Cart);

    for (let i=0; i<unicCart.length;i++){
        let count=0;
        for(let j=0; j<Cart.length;j++){
            if(unicCart[i].model === Cart[j].model) {
                count++;
            }
        }
        newUniCart.push({...unicCart[i],count: count})
        count=0;
    }
    // console.info('NEW UNICART',newUniCart)
    return newUniCart
}


const mapStateToProps = ({ cart }) => {
    return {
        cartUniq: orderBy(Unic(cart), o=> o.model),
        cartCount: cart.items.length,
        cartSumm: cart.items.reduce((count, product) => count + product.coast, 0)
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)