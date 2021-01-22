const initialState = {
    items: [],
    dillersReady: false,
}

const dillers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DILLERS':
            return {
                ...state,
                items: action.payload,
                dillersReady: true,
            }
        default:
            return state;
    }
}

export default dillers;