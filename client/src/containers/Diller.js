import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as dillerActions from '../actions/dillers'
import Diller from '../components/Diller/Diller.jsx'



const mapStateToProps =(state)=>({
    dillers : state.dillers.items,
})

const mapDispatchToProps =(dispatch)=>({
    ...bindActionCreators(dillerActions,dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(Diller)