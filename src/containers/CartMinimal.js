import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart'
import uniqBy from 'lodash/uniqBy'

import CartMinimal from '../components/Navbar/CartMinimal.jsx'




const mapStateToProps = ({ cart }) => {
    return {
        cartCount: cart.items.length,
        cartSumm: cart.items.reduce((count, product) => count + product.coast,0)
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartMinimal)