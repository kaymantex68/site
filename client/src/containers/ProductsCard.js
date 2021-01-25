import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart'
import ProductsCard from '../components/ProductsCard/ProductsCard.jsx'



const mapStateToProps = ({ cart }, { model }) => ({
    addedCount: cart.items.reduce(
        (count, product) => count + (product.model === model ? 1 : 0), 0
    ),
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCard)