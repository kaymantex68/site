const initialState = {
    items: [],
    sliderReady: false,
}

const slider = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SLIDER':
            return {
                items: action.payload,
                sliderReady: true,
            }

        default:
            return state;
    }
}

export default slider;