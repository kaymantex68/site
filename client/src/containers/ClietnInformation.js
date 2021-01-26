import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as clientActions from '../actions/clientInformation'


import { ClientInformation } from '../components/CartDetail/ClientInformation'




const mapStateToProps = ({ client }) => {
    return {
        clientInformation: client.items,
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(clientActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientInformation)