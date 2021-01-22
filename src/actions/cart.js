export const addProductToCart = obj => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: obj
})

export const removeProductFromCart = model => ({
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: model
})

export const removePositionFromCart = model => ({
    type: 'REMOVE_POSITION_FROM_CART',
    payload: model
})

export const setCart = product => ({
    type: 'SET_CART',
    payload: product
})

export const clearCart = cart => ({
    type: 'CLEAR_CART',
    payload: cart
})
