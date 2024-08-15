import { FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, POST_DATA_REQUEST } from "../actions/api.action"

const initialState = {
    data: [],
    error: null,
    loading: false,
}

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: true,
                error: null
            }
        case POST_DATA_REQUEST:
            return {
                ...state,
                loading: false,
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
} 