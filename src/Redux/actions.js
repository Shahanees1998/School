export const SET_DATA = "SET_DATA"

export const SET_KEY = "SET_KEY"

export const SET_ALUMNI_KEY = "SET_ALUMNI_KEY"

export const SET_ALUMNI_SCHOOLNAME = "SET_ALUMNI_SCHOOLNAME"
export const SET_USE_TYPE = "SET_USE_TYPE"

export const SET_AMOUNT = "SET_AMOUNT"


export const setAmount = amount => dispatch => {

    dispatch({
        type: SET_AMOUNT,
        payload: {
            amount: amount
        }
    });
}


export const setAlumniSchoolName = alumniSchoolname => dispatch => {

    dispatch({
        type: SET_ALUMNI_SCHOOLNAME,
        payload: {
            alumniSchoolname: alumniSchoolname
        }
    });
}
export const setLoginUserType = userType => dispatch => {

    dispatch({
        type: SET_USE_TYPE,
        payload: {
            userType: userType
        }
    });
}
export const setLogedinEmail = data => dispatch => {

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

export const setAlumniKey = alumnikey => dispatch => {

    dispatch({
        type: SET_ALUMNI_KEY,
        payload: {
            alumnikey: alumnikey
        }
    });
}


export default setLogedinEmail;