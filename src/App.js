import './App.css';
import Navbar from './Components/Stateless/Navbar';
import { ItemListContainer } from './Components/Container/ItemListContainer';
import bgPrints from './images/bgPrints.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './Components/Container/ItemDetailContainer';
import FactWidget from './Components/Container/FactWidget';
import { CartContextProvider } from './Components/contexts/cartContext';
import { CartContext } from './Components/contexts/cartContext';
import { useContext } from 'react';

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
  const {pets, addItem} = useContext(CartContext);

  return (
      <div className="App">
        <CartContextProvider>
          <BrowserRouter>
          <Navbar links={['Dogs', 'Cats', 'All']} />
          <Routes>
            <Route index element = {<ItemListContainer greeting="Beautyfull pets waiting for an owner!"/>}></Route>
            <Route path='category'>
              <Route path=':category' element={<ItemListContainer greeting="Select your favourite pet:"/>}></Route>
            </Route>
            <Route path='item'>
              <Route path=':id' element={<ItemDetailContainer/>}></Route>
            </Route>
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
