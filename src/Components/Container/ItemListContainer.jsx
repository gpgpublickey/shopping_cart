import React from 'react'
import ItemList from './ItemList'
import {useEffect, useState} from 'react'

export const ItemListContainer = ({greeting}) => {
  const [pets, setPets] = useState([]);

  function getPets() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                // TODO create a cdn for pet pictures, just a placeholder for now
                {id: 1, qualities: ['friendship'], name: 'Fido', isAvailable: true, description: 'The best friend you can desire, Fido is the best wingman', conditions: 'Tracing required', pictureUrl: null},
                {id: 2, qualities: ['funny'], name: 'Dido', isAvailable: false, description: 'A cat really funny', conditions: 'Adoption contract required', pictureUrl: undefined},
                {id: 3, qualities: ['calm', 'relax', 'prrr'], name: 'Chocolin', isAvailable: true, description: 'A food lover', conditions: 'No Tracing required', pictureUrl: null},
                {id: 4, qualities: ['ultra jumping', 'prrr'], name: 'Piolin', isAvailable: false, description: 'Like a jumping stick but with pet shape', conditions: 'Partial tracing required', pictureUrl: undefined}
            ]);
        }, 2000);
    }).then(response => {
        setPets(response);
        console.log('Pets loaded')
    }).catch(error => {
        console.warn(error);
    }).finally(() => {
        console.info('Load Pets stage finished');
    });
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
        {pets.length === 0 &&
          <h1 className='text-xl p-10'>Loading...</h1>
        }
          <ItemList pets={pets}/>
      </div>
    </>
  )
}
