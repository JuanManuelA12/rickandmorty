import { ADD_FAVORITES, DELETE_FAVORITES, ORDER_FAVORITES, FILTER_FAVORITES } from "./Actions";

const initialState = {characters:[],myFavorites:[]};

const rootReducer = (state = initialState, action) => {

switch(action,type) {
case ADD_FAVORITES:
    return {...state,myFavorites:[...state.myFavorites, action.payload]};

case DELETE_FAVORITES:
   const eliminarFavorites = state.myFavorites.filter(
    favorite => favorite.id !== action.payload.id
   ) 
return {...state, myFavorites: eliminarFavorites};

case ORDER_FAVORITES:
    const ordenarFavoritos = state.myFavorites.filter(
        favorite => favorite.id !== action.payload.id
       ) 
return {...state, myFavorites:ordenarFavoritos};  

case FILTER_FAVORITES:
    const filtrarFavoritos = state.myFavorites.filter(
        favorite => favorite.id !== action.payload.id
       ) 
return {...state,myFavorites: filtrarFavoritos}; 

default: return {...state};
}
}
export default rootReducer;