import {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import petsImg from '../../images/pets.png'
import { CartContext } from '../contexts/cartContext';

const styles = {
    petsButton:{
        marginRight: 10,
        borderRadius: 50,
    },
    petsImgHeader: {
        width: 30,
        height: 30,
        marginRight: 10,
        display: 'inline'
    }
};

const classnames = {
    headerContainerButtonMyPets: 'inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0',
};

const CartWidget = () => {
    const {itemsInCart} = useContext(CartContext);


    useEffect(() => {
    }, [itemsInCart]);

  return (
    <Link to='cart'>
        {
            <button style={styles.petsButton} className={classnames.headerContainerButtonMyPets}>
                <img src={petsImg} style={styles.petsImgHeader} />My Pets ({itemsInCart})
            </button>
        }
    </Link>
  );
}

export default CartWidget;