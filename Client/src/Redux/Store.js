import { createStore } from "redux";
import rootReducer from './reducer';

const store = createStore(
    rootReducer,
);


export default store;






// // import {createStore} from 'redux';
// import {createStore} from 'react-redux'
// import rootReducer from './Reducer'

//  const store = createStore(rootReducer);
 
//  export default store;