import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products'
import * as filterActions from '../actions/catalogFilter'
import Navbar from '../components/Navbar/Navbar.jsx'



const mapStateToProps = (state) => ({
    countProducts: state.producst.items.length,
    cart: state.cart,
    filter: state.filter.items
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(productsActions, dispatch),
    ...bindActionCreators(filterActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)