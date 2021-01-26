import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/catalogFilter'


import CatalogFilter from '../components/Catalog/CatalogFilter'




const mapStateToProps = (state) => {
    return {
        products: state.producst.items,
        filter: state.filter.items
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(filterActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CatalogFilter)