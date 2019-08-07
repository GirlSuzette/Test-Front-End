import { ADD_MENSSAGE } from '../Actions/actionConstants';


const INITIAL_STATE = {
    indicador: [],
    loading: true,
    error: null,
}


export default (state = INITIAL_STATE, action) => {
    // console.log(action.data)
    switch (action.type) {
        case ADD_MENSSAGE:
            return {
                ...state,
                indicador: action.payload,
                loading: false,
                error: null,
            };

        default:
            return state;
    }

}