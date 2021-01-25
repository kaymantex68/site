import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products'
import ProductsSlider from '../components/ProductsSlider/ProductsSlider.jsx'



const mapStateToProps =(state)=>({
    Description: 'РАСПРОДАЖА',
    Items: state.sales.items,
})

const mapDispatchToProps =(dispatch)=>({
    ...bindActionCreators(productsActions,dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(ProductsSlider)