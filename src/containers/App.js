import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products'
import * as sliderActions from '../actions/slider'
import * as dillersActions from '../actions/dillers'
import * as cartActions from '../actions/cart'

import App from '../components/App'




const mapStateToProps = (state) => {
    return {
        products: state.producst.items,
        slides: state.slider.items,
        // dillers: state.dillers.items,
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(productsActions, dispatch),
    ...bindActionCreators(sliderActions, dispatch),
    ...bindActionCreators(dillersActions, dispatch),
    ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)