import React from 'react'
import ItemList from './ItemList'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getDocuments, getDocumentsByAttribute } from '../../firebase/firebaseClient'

export const ItemListContainer = ({greeting}) => {
  const [pets, setPets] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    var pets = [];
    const query = category !== undefined && category !== "all" ? getDocumentsByAttribute("pets", "category", category) : getDocuments("pets");
    query.then(r => {
      r.forEach(pet => {
        pets.push({...pet.data(), id: pet.id});
      });
    }).catch(e => {
      console.error(e);
    }).finally(() => {
      setPets(pets);
    });
  }, [category])
  
  return (
    <>
      <h1 className='relative mt-5 mb-5 text-4xl text-red-500'>{greeting}</h1>
      <div className="flex justify-center">
        {pets.length === 0 ? <h1 className='text-xl p-10'>Loading...</h1> : <ItemList pets={pets}/>}
      </div>
    </>
  )
}
