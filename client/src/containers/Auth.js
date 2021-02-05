import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/auth'


import {Auth} from '../components/Authorization/Auth.jsx'




const mapStateToProps = (state) => {
    return {
        auth: state.auth.items,
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(authActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)