const initialState = {
    items: [],
    productsReady: false,
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload,
                productsReady: true,
            }
        default:
            return state;
    }
}

export default products;