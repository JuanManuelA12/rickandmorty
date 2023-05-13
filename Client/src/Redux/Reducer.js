import { ADD_FAVORITES, DELETE_FAVORITES, ORDER_FAVORITES, FILTER_FAVORITES } from "./actions";

const initialState = {allCharacters:[],myFavorites:[]};

const rootReducer = (state = initialState, action) => {

switch(action.type) {
case ADD_FAVORITES:
    return {...state, myFavorites:[...state.myFavorites, action.payload]};

case DELETE_FAVORITES:
   const eliminarFavorites = state.myFavorites.filter(
    favorite => favorite.id !== action.payload.id
   ) 
return {...state, myFavorites: eliminarFavorites};

case ORDER_FAVORITES:
//     const ordenarFavoritos = state.myFavorites.filter(
//         favorite => favorite.id !== action.payload.id
//        ) 
// return {...state, myFavorites:ordenarFavoritos};  
let sorted;
        if(action.payload === 'Ascendente'){
            sorted = state.myFavorites.sort((a, b)=> (a.id > b.id ? 1 : -1));
        } else if (action.payload === 'Descendente') {
            sorted = state.myFavorites.sort((a, b)=> (a.id < b.id ? 1 : -1));
        }
            return{
                ...state,
                myFavorites: [...sorted]
            }

case FILTER_FAVORITES:
//     const filtrarFavoritos = state.myFavorites.filter(
//         favorite => favorite.id !== action.payload.id
//        ) 
// return {...state,myFavorites: filtrarFavoritos}; 
return{
    ...state,
    myFavorites: state.allCharacters.filter(
        (character) => character.gender === action.payload
    ),
};

default: return {...state};
}
}
export default rootReducer;