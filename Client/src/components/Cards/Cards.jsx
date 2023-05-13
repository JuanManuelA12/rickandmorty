import React from 'react';
import Card from '../Card/Card';
//import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;

   return (
   <div>
      {characters?.map(character =>
      <Card
         id={character.id}
         key={character.id}   
         character={character}     
         onClose={() => onClose(character.id)}
        />)}
   </div>
   )
}