const initialState = {
    items: [],
    salesReady: false,
}

const sales = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SALES':
            return {
                ...state,
                items: action.payload.filter(item => item.rasprodaja === true),
                salesReady: true,
            }

        default:
            return state;
    }
}

export default sales;