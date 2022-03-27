import {useContext} from 'react';
import { CartContext } from '../contexts/cartContext';
import { Brief } from './Brief';

export const Checkout = ({
  onSubmit,
  onChange,
  showSubmit,
  setters,
  name,
  surname,
  phone,
  email,
  emailVerification,
  isCheckoutCompleted,
  orderId,
  isValidCheckoutForm
  }) => {
  const {totalPrice} = useContext(CartContext);
  const validationErrorStyle = 'border-2 p-1 border-red-700 bg-red-300';
  const validationSuccessStyle = 'border-2 p-1 border-green-700 bg-green-300';

  return (
    <div>{totalPrice > 0 && <h1>Fill the form to complete the checkout</h1>}
      {!isCheckoutCompleted ? <div>
        {totalPrice > 0 && <form>
          <br/>
          {!isValidCheckoutForm ? <span className={validationErrorStyle}><small>Please look for errors in the form</small></span> :
            <span className={validationSuccessStyle}><small>The order form is correctly filled</small></span>}
          <br/><br/>
          <fieldset>
            <legend>Name</legend>
            <input className='border-2 mb-2 p-1' type="text" placeholder='Input your name' value={name} onChange={(e) => onChange(e.target.value, setters.setName)}/>
          </fieldset>
          <fieldset>
            <legend>Lastname</legend>
            <input className='border-2 mb-2 p-1' type="text" placeholder='Input your surname' value={surname} onChange={(e) => onChange(e.target.value, setters.setSurname)}/>
          </fieldset>
          <fieldset>
            <legend>Phone</legend>
            <input className='border-2 mb-2 p-1' type="text" placeholder='Input your phone' value={phone} onChange={(e) => onChange(e.target.value, setters.setPhone)}/>
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input className='border-2 mb-2 p-1' type="text" placeholder='Input your email' value={email} onChange={(e) => onChange(e.target.value, setters.setEmail)}/>
          </fieldset>
          <fieldset>
            <legend>Email verification</legend>
            <input className='border-2 mb-2 p-1' type="text" placeholder='Input your email again' value={emailVerification} onChange={(e) => onChange(e.target.value, setters.setEmailVerification)}/>
          </fieldset>
        </form>}
        <Brief total={totalPrice}/>
        <br/>
        {totalPrice !=0 && isValidCheckoutForm && <input className="float-right mt-2 mr-20 ml-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        type = "submit" value="Buy" onClick={() => onSubmit()} disabled={!showSubmit}/>}<br/><br/>
      </div> :
      <div><h1 className='text-green-600'>Checkout completed! order Id: {orderId}</h1></div>}
    </div>

  )
}
