import React from 'react'
import bgPrints from '../../images/bgPrints.png'
const styles = {
    catalogImg: {
        position: 'relative',
        bottom: -10,
        width: '50%'
    }
}

export const ItemListContainer = ({greeting}) => {
  return (
    <div className='relative top-52 text-4xl text-red-500'>{greeting}
        <img src={bgPrints} style={styles.catalogImg}/>
    </div>
  )
}
