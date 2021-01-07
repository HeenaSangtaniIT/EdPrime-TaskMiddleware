import {SHOW_CARD_LOADING, SHOW_CARD_SUCCESS, SHOW_CARD_ERROR } from '../redux/actions';

const initialState = {
    loading: false,
    error: false,
    cardData: []
}

const cardReducer = (state = initialState, action) => {
    const { payload } = action
    console.log("card payload", action);
    switch (action.type) {
        case SHOW_CARD_LOADING:
            return {
                ...state,
                loading: true,
                error: false
            }

        case SHOW_CARD_SUCCESS:
            return {
                ...state,
                loading: false,
                cardData: payload.responseObject,
                error: false
            }

        case SHOW_CARD_ERROR:
            return {
                ...state,
                loading: false,
                cardData: "Error",
                error: true
            }
        default:
            return state
    }
}
export default cardReducer;
