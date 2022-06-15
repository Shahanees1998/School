export const SET_DATA = "SET_DATA"

export const SET_KEY = "SET_KEY"



export const setData = data => dispatch => {

    dispatch({
        type: SET_DATA,
        payload: {
            data: data
        }
    });
}
export const setKey = key => dispatch => {

    dispatch({
        type: SET_KEY,
        payload: {
            key: key
        }
    });
}
export default setData;