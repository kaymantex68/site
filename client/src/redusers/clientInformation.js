const initialState = {
    items: [],
    clientReady: false,
}

const client = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CLIENT':
            return {
                ...state,
                items: action.payload,
                clientReady: true,
            }
        default:
            return state;
    }
}

export default client;