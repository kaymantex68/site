const initialState = {
    items: {}
}

const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT':
            return {
                items: action.payload,
                
            }
      
        default:
            return state;
    }
}

export default filter;