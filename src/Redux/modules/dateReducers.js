import { ADD_MENSSAGE } from '../Actions/actionConstants';


const INITIAL_STATE = {
    data: [],
    loading: true,
    error: null,
}

/* Reducer */

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload)
    switch (action.type) {
        case ADD_MENSSAGE:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };

        default:
            return state;
    }

}





