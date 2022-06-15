export const SET_DATA = "SET_DATA"




export const setData = data => dispatch => {

    dispatch({
        type: SET_DATA,
        payload: {
            data: data
        }
    });
}
export default setData;