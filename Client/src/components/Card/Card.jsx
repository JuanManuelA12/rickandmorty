import { useState, useEffect } from "react";
//import styles from './Card.module.css';
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorite } from "../../Redux/actions";
import { connect } from "react-redux";



// let {link, card, btn, btn2, imgContainer, textNombre, genreSpecies} = styles;
// {id, name, species, gender, image, onClose, myFavorites, deleteFavorite, addFavorite}
function Card(props) {
   
   const [isFav, setIsFav] = useState(false);
   const { character, myFavorites, onClose } = props;
   
   const handleFavorite = () => {
      if (isFav) {
        setIsFav(false);
        if (character && character.id) { // Verificar si character tiene la propiedad id
          props.deleteFavorite(character.id);
        }
      } else {
        setIsFav(true);
        props.addFavorites(character);
      }
    };
   
   useEffect(() => {
      if(myFavorites){
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }
   }, [myFavorites, character.id]);

   return (
      <div>
         <button  onClick={onClose}>X</button>
         {isFav ? (
         <button  onClick={handleFavorite}>❤️</button>
         ) : (
         <button  onClick={handleFavorite}>🤍</button>
         )}
         <Link to={`/detail/${props.id}`} >
         <h2>{character.name} </h2>
         <h2 >{character.species} </h2>
         <h2>{character.gender} </h2>
         <img  src={character.image} alt="imagen"/>

      
      </Link>
      </div>      
      
   );
}

const mapStateToProps = (state)=>{
   return{
   myFavorites: state.myFavorites
}
};

const mapDispatchToProps = (dispatch)=>{
   return{
      addFavorites: (character)=> dispatch(addFavorites(character)),
      deleteFavorite: (characterId)=> dispatch(deleteFavorite(characterId))      
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)