import { SET_DATA , SET_KEY, SET_ALUMNI_KEY} from './actions'
const inittialstate = {
data : '',
key : '',
alumnikey:''
}
function userReducer(state = inittialstate, action) {

    switch (action.type) {
        case SET_DATA:
            console.log(action.payload.data)
            return { ...state, data: action.payload.data };
        case SET_KEY:
            console.log(action.payload.key)
            return { ...state, key: action.payload.key };
        case SET_ALUMNI_KEY:
            console.log(action.payload.key)
            return { ...state, alumnikey: action.payload.alumnikey };
       
        default:

            return state
    }
}


export default userReducer;



{
    /* 
    const { index1 } = action.payload;
    alert(index1)
    return {
        
        ...state,
       
        arr: [
            ...state.arr.slice(0, index1),
            ...state.arr.slice(index1 + 1)
        ],
            }
            
            
             case SET_ADDRES_LINE:


            {
                const { name, line, city, state, zip, country } = action.payload;
                //  return { ...state, number: action.payload };

                return {
                    ...state,
                    arr: [...state.arr, {
                        Name: name,
                        line: line,
                        city: city,
                        state: state,
                        zip: zip,
                        country: country
                    }]


                }
            }
            
            */
}