/**
 * Combine all reducers in this file and export the combined reducers.
 */
// import { combineReducers } from 'redux-immutable';
// import dateReducer from '../modules/dateReducers'

// /**
//  * Creates the main reducer with the dynamically injected ones
//  */
// export default function createReducer(injectedReducers = {}) {
//     const rootReducer = combineReducers({
//         indicador: dateReducer,
//         ...injectedReducers,
//     });
//     // console.log(date)
//     return rootReducer;
// }


// import Loading from './Loading'
// import Modal from './Modal'
// import DataClient from './DataClient'
import dateReducer from '../modules/dateReducers'


import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    dateReducer,
})

export default rootReducer