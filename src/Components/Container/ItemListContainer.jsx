import React from 'react'
import ItemList from './ItemList'
import {useEffect, useState} from 'react'

export const ItemListContainer = ({greeting}) => {
  const [pets, setPets] = useState([]);

  function getPets() {
    setTimeout(() => fetch("./../../../mocks/itemList.json")
      .then(r => r.json())
      .then(r => {
        setPets(r);
        console.log('Pets loaded')
      }).catch(e => {
          console.warn(e);
      }).finally(() => {
          console.info('Load Pets stage finished');
      }), 2000);
}

useEffect(() => {
    console.log('Action');
    getPets();
  
    return () => {
      console.log('Cleaner');
    }
  }, [])
  
  console.log('Render');

  return (
    <>
      <h1 className='relative mt-5 mb-5 text-4xl text-red-500'>{greeting}</h1>
      <div className="flex justify-center">
        {pets.length === 0 ? <h1 className='text-xl p-10'>Loading...</h1> : <ItemList pets={pets}/>}
      </div>
    </>
  )
}
