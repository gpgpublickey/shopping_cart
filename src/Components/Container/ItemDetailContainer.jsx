import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../Stateless/ItemDetail'
import { CounterContextProvider } from '../contexts/counterContext'
import { getDocumentsById } from '../../firebase/firebaseClient'

export const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(null);
  const {id} = useParams();
  
  useEffect(() => {
    getItemDetail(id);
  }, [id]);

  async function getItemDetail(id) {
      try {
        const query = await getDocumentsById("details", id);
        console.log(query.docs)
        setItemDetail(query.docs[0]?.data());
        console.log('Details loaded')
      }
      catch(e) {
        console.error(e);
      }
  }

  return (
    <CounterContextProvider>
      <div>{itemDetail ? <ItemDetail detail={itemDetail}/> : 'Loading...'}</div>
    </CounterContextProvider>
  )
}
