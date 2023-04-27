import React from 'react'

export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const ORDER_FAVORITES = "ORDER_FAVORITES";
export const FILTER_FAVORITES = "FILTER_FAVORITES";


export const addFavorites = (character) => {
  return ({type: ADD_FAVORITES, payload: character});
}
export const deleteFavorite = (character) => {
    return ({type: DELETE_FAVORITES, payload: id});
  }
export const orderFavorite = (character) => {
    return ({type: ORDER_FAVORITES, payload: id});
  }
export const filterFavorite = (character) => {
    return ({type: FILTER_FAVORITES , payload: id});
  }
      