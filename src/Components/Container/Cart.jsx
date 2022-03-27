import {useContext, useEffect, useState} from 'react';
import { CartContext } from '../contexts/cartContext';
import emptyHome from '../../images/emptyHome.jpg';
import { Link } from 'react-router-dom';
import { CheckoutContainer } from './CheckoutContainer';

const Cart = () => {
  const {pets, removeItem} = useContext(CartContext);
  const [internalPets, setInternalPets] = useState();

  useEffect(() => {
  }, [internalPets])

  function sendBack(id) {
    removeItem(id);
    setInternalPets({...pets});
  }

  return (
    <div className="text-4xl mt-10" >
      <CheckoutContainer items={pets}/>{
      pets.map(x=> 
      <span key={x.item.id}>Name: {x.item.name} | Qty: {x.quantity}
      {pets != [] && pets?.length > 0 ? <button onClick={() => sendBack(x.item.id)} className="ml-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Send back</button> : ''}
      <br/><br/>
      </span>
    )}
    <br/>
    {pets?.length <= 0 ? <div><img alt='Empty home' className="inline-flex content-center" src={emptyHome}/><br/>Your home doesn't have pets yet</div> : ''}
    <br/>
    <Link to={"/"}><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">Back to Home page</button></Link>
    </div>
  )
}

export default Cart;