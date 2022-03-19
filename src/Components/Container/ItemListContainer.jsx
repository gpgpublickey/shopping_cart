import React from 'react'
import ItemList from './ItemList'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getDocuments, getDocumentsByAttribute } from '../../firebase/firebaseClient'

export const ItemListContainer = ({greeting}) => {
  const [pets, setPets] = useState([]);
  const {category} = useParams();

  async function getPets() {
    try {
      var pets = [];
      const query = category != undefined && category != "All" ? await getDocumentsByAttribute("pets", "category", category) : await getDocuments("pets");
      query.forEach(pet => {
        pets.push({...pet.data(), id: pet.id});
      });
      console.log(pets);
      setPets(pets);
      console.log(`${pets.length} Pet(s) loaded`)
    }
    catch(e) {
      console.error(e);
    }
}

useEffect(() => {
    getPets();
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
