const initialState = {
    items: [],
    lidersReady: false,
}

const liders = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LIDERS':
            return {
                ...state,
                items: action.payload.filter(item=>item.lider===true),
                lidersReady: true,
            }
        default:
            return state;
    }
}

export default liders;