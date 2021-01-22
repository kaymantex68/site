

const initialState = {
    items: [],
}


const delOneProduct = (cart, payload) => {
    console.info('delOneProduct', cart)
    console.info('payload', payload)
    let flag = 0;
    cart = cart.filter((item) => {
        if (item.model === payload && flag === 0) { flag = 1; return false }
        else return true
    })
    console.info('cart', cart)
    return cart
}


const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART':
            return {
                items: [],
            }
        case 'CLEAR_CART':
            return {
                items: [],
            }
        case 'ADD_PRODUCT_TO_CART':
            return {
                items: [...state.items, action.payload],
            }
        case "REMOVE_PRODUCT_FROM_CART":
            return {
                items: delOneProduct(state.items, action.payload)
            }
        case "REMOVE_POSITION_FROM_CART":
            return {
                items: state.items.filter(item => item.model != action.payload)
            }
        default:
            return state;
    }
}

export default cart;