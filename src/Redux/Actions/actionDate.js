import * as types from './actionConstants';
import indicators from './api'



export const createIndicators = () => async dispatch => {
    const response = await indicators.get('/messages')
    dispatch({ type: types.ADD_MENSSAGE, payload: response.data })

    console.log(payload)
};