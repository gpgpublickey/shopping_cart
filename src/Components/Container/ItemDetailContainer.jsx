import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../Stateless/ItemDetail'
import { CounterContextProvider } from '../contexts/counterContext'

export const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(null);
  const {id} = useParams();
  
  useEffect(() => {
    console.log(`Id ${id} selected`);
    getItemDetail(id);
  }, [id]);

  const getItemDetail = (id) => {
    setTimeout(() => fetch("./../../../mocks/itemDetails.json")
      .then(r => r.json())
      .then(r => setItemDetail(r))
      .catch(e => {
        console.warn(e);
      }), 2000);
  }

  return (
    <CounterContextProvider>
      <div>{itemDetail ? <ItemDetail detail={itemDetail}/> : 'Loading...'}</div>
    </CounterContextProvider>
  )
}
