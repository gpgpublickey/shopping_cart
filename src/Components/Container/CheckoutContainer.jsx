import { useState, useContext } from 'react'
import { Checkout } from '../Stateless/Checkout';
import { addDocument } from '../../firebase/firebaseClient';
import { getUTCDatetimeString } from '../../Helpers/DatetimeHelper';
import { CartContext } from '../contexts/cartContext';

export const CheckoutContainer = ({items}) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [surnameInputValue, setSurnameInputValue] = useState("");
  const [phoneInputValue, setPhoneInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [emailVerificationInputValue, setEmailVerificationInputValue] = useState("");
  const [isCheckoutCompleted, setIsCheckoutCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const {resetCart} = useContext(CartContext);
  let emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  const setters = {
    setName: setNameInputValue,
    setSurname: setSurnameInputValue,
    setPhone: setPhoneInputValue,
    setEmail: setEmailInputValue,
    setEmailVerification: setEmailVerificationInputValue
  };

  const handleChange = (value, setter) => {
    setter(value);
  };

  const isNotEmpty = (value) => {
    return value.trim() != ""
  };

  const showSubmit = () => {
    return isNotEmpty(nameInputValue) &&
    isNotEmpty(surnameInputValue) &&
    isNotEmpty(phoneInputValue) &&
    isNotEmpty(emailInputValue) &&
    isNotEmpty(emailVerificationInputValue);
  };

  const isValidCheckoutForm = () => {
    return emailInputValue === emailVerificationInputValue &&
    emailRegex.test(emailInputValue) && emailRegex.test(emailVerificationInputValue) &&
    showSubmit();
  };

  const submit = async () => {
    try {
      var order = await addDocument("orders", {
        items: items,
        date: getUTCDatetimeString(),
        status: "generated",
        name: nameInputValue,
        surname: surnameInputValue,
        phone: phoneInputValue,
        email: emailInputValue
      });
      setIsCheckoutCompleted(true);
      setOrderId(order.id);
      resetCart();
    }
    catch(e) {
      console.error(e);
    }
  }

  return (
    <Checkout
      onSubmit={submit} 
      onChange={handleChange}
      showSubmit={showSubmit()}
      name={nameInputValue}
      surname={surnameInputValue}
      phone={phoneInputValue}
      email={emailInputValue}
      emailVerification={emailVerificationInputValue}
      setters={setters}
      isCheckoutCompleted={isCheckoutCompleted}
      orderId={orderId}
      isValidCheckoutForm={isValidCheckoutForm()}
      />
  )
}
