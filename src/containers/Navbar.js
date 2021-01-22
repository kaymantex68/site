import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products'
import Navbar from '../components/Navbar/Navbar.jsx'



const mapStateToProps = (state) => ({

    countProducts: state.producst.items.length,
    cart: state.cart,
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(productsActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)