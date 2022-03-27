import './App.css';
import React from 'react';
import { ItemListContainer } from './Components/Container/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './Components/Container/ItemDetailContainer';
import { CartContextProvider } from './Components/contexts/cartContext';
import FactWidget from './Components/Container/FactWidget';
import Cart from './Components/Container/Cart';
import bgPrints from './images/bgPrints.png';
import { NavBarContainer } from './Components/Container/NavBarContainer';

function App() {
  const styles = {
    bgPrints: {
      backgroundImage: `url(${bgPrints})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      minWidth: '200px',
      minHeight: '200px',
      position: 'relative',
      left: '-100px'
    }
  }
  
  return (
      <div className="App">
        <CartContextProvider>
          <BrowserRouter>
          <NavBarContainer/>
          <Routes>
            <Route index element = {<ItemListContainer greeting="Beautyfull pets waiting for an owner!"/>}></Route>
            <Route path='category'>
              <Route path=':category' element={<ItemListContainer greeting="Select your favourite pet:"/>}></Route>
            </Route>
            <Route path='item'>
              <Route path=':id' element={<ItemDetailContainer/>}></Route>
            </Route>
            <Route path='cart' element={<Cart/>}></Route>
          </Routes>
          </BrowserRouter>
          <br/>
          <FactWidget/>
          <footer>by <a href='http://mapanimal.com'>@Mapanimal</a></footer>
          <i>DEBUG, Analytics on console log</i>
          <div style={styles.bgPrints}></div>
        </CartContextProvider>
      </div>
  );
}

export default App;
