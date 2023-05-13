import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
//import styles from './Favorite.module.css'
import {  orderFavorite, filterFavorite } from "../../Redux/actions";


export default function Favorites() {
    const dispatch = useDispatch()
    const myFavorites = useSelector(state => state.myFavorites);

    function handleOrder(e){
        dispatch(orderFavorite(e.target.value))
      }
    
      function handleFilter(e){
        dispatch(filterFavorite(e.target.value))
      }
    
    //   function handleReset(e){
    //     dispatch(reset());
    //   }
    
    // const handleChange = (e)=>{
    //     const{name, value} = e.target;
    //     name === 'orden' && dispatch(orderFavorite(value));
    //     name === 'filtro' && dispatch(filterFavorite(value));                
    // }

    return (
        <div>
        <select onChange={handleOrder} name="orden" >
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter} name="filtro">
            {/* <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option> */}
            {["Male", "Female", "unknown", "Genderless"].map((gender) =>(
            <option value= {gender}> {gender} </option>
         ))}
        </select>
        
        <div >
            {myFavorites?.map((character)=>(
                <Card
                id={character.id}
                key={character.id}        
                // name={name}
                // species={species}
                // gender={gender}
                // image={image}
                character ={character}
                />
            ))}
        </div>
        </div>
    )
};

// const mapStateToProps = (state)=>{
//     return {myFavorites: state.myFavorites}
// }


// export default connect(mapStateToProps,null)(Favorites)