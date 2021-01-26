import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products'


import Catalog from '../components/Catalog/Catalog'




const mapStateToProps = (state) => {
    return {
        products: state.producst.items,
        sort: state.filter.items
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(productsActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)