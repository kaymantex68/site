import {combineReducers} from 'redux'
import producst from './products'
import liders from './liders'
import sales from './sales'
import slider from './slider'
import dillers from './dillers'
import cart from './cart'
import client from './clientInformation'
import filter from './catalogFilter'


const rootReducers=combineReducers({
    producst,
    liders,
    sales,
    slider,
    dillers,
    cart,
    client,
    filter
})

export default rootReducers;