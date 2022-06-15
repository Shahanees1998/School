import { SET_DATA } from './actions'
const inittialstate = {
data : ''
}
function userReducer(state = inittialstate, action) {

    switch (action.type) {
        case SET_DATA:
            console.log(action.payload.data)
            return { ...state, data: action.payload.data };
   
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