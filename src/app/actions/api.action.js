export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
})

export const postDataRequest = (data) => ({
    type: POST_DATA_REQUEST,
    payload: data
})

export const fetchDataError = () => ({
    type: FETCH_DATA_ERROR,
})