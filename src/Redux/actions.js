export const SET_DATA = "SET_DATA"

export const SET_KEY = "SET_KEY"

export const SET_ALUMNI_KEY = "SET_ALUMNI_KEY"

export const SET_ALUMNI_SCHOOLNAME = "SET_ALUMNI_SCHOOLNAME"



export const setAlumniSchoolName = alumniSchoolname => dispatch => {

    dispatch({
        type: SET_ALUMNI_SCHOOLNAME,
        payload: {
            alumniSchoolname: alumniSchoolname
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