import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../Reducer/Actions";
import { connect } from "react-redux";

let { link, card, btn, btn2, imgContainer, textNombre, genreSpecies } = styles;

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  myFavorites,
  deleteFavorite,
  addFavorite,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({ id, name, species, gender, image, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div>
      <div>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        {isFav ? null : <button onClick={onClose}>X</button>}
      </div>

      <Link to={`/detail/${id}`}>
        <div>
          <img src={image} alt={name} />
          <h2>{name}</h2>
        </div>

        <div>
          <h2>{species}</h2>
          <h2>{gender}</h2>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (char) => dispatch(addFavorite(char)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
