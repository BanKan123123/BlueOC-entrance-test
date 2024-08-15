import { FETCH_DATA_REQUEST, fetchDataError, fetchDataSuccess, POST_DATA_REQUEST } from "../actions/api.action"
import axios from 'axios'

export const apiMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    if (action.type === FETCH_DATA_REQUEST) {
        const state = getState();

        if (!state.data || state.data.length === 0) {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    dispatch(fetchDataSuccess(response.data));
                })
                .catch((err) => {
                    dispatch(fetchDataError(err.message));
                });
        }
    }
    if (action.type === POST_DATA_REQUEST) {
        const dataToSend = action.payload;

        axios.post('https://jsonplaceholder.typicode.com/posts', dataToSend)
            .then(res => {
                console.log('Data posted successfully:', res.data);
            })
            .catch((err) => {
                dispatch(fetchDataError(err.message))
            });
    }
    return next(action);
};

