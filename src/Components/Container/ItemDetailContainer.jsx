import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../Stateless/ItemDetail'
import { CounterContextProvider } from '../contexts/counterContext'
import { getDocumentsById } from '../../firebase/firebaseClient'

export const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(null);
  const [showNotFound, setshowNotFound] = useState(false);

  const {id} = useParams();
  
  useEffect(() => {
    getItemDetail(id);
  }, [id]);

  async function getItemDetail(id) {
      try {
        const query = await getDocumentsById("details", id);
        if (query.docs.length === 0) {
          setshowNotFound(true);
        }
        setItemDetail(query.docs[0]?.data());
      }
      catch(e) {
        console.error(e);
      }
  }

  return (
    <CounterContextProvider>
      <div>
        <br/>
        {itemDetail ? <ItemDetail detail={itemDetail}/> : showNotFound ? `Id ${id} not found` : 'Loading...'}
      </div>
    </CounterContextProvider>
  )
}
