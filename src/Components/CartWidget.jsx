import React from 'react'
import petsImg from '../images/pets.png'

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

const cartWidget = () => {
  return (
    <button style={styles.petsButton} className={classnames.headerContainerButtonMyPets}>
        <img src={petsImg} style={styles.petsImgHeader} />My Pets
    </button>
  );
}

export default cartWidget;