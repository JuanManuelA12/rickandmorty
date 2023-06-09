import {useState} from "react";
// import styles from './SearchBar.module.css'

// let {searchform, imgSearch, btnSearch} = styles;

export default function SearchBar(props) {
   const [character, setCharacter] = useState('');
   
   const handleChange = (e) => {
      e.preventDefault();
      setCharacter(e.target.value);
   }

   return (
      <div >            
            <div>
               <button onClick={()=> props.onSearch(Math.floor(Math.random() * 826))}>Ramdom</button>
               <button onClick={()=> props.onSearch(character)}>Agregar</button>
               <input type='search' onChange={handleChange} value={character}/>
            </div>
         <div >
            <button onClick={props.logOut}>LogOut</button>
         </div>
      </div>
   );
}