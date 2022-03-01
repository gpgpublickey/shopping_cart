import './App.css';
import Navbar from './Components/Stateless/Navbar';
import { ItemListContainer } from './Components/Container/ItemListContainer';
import bgPrints from './images/bgPrints.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './Components/Container/ItemDetailContainer';
import FactWidget from './Components/Container/FactWidget';

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
      <BrowserRouter>
      <Navbar links={['Dogs', 'Cats', 'More']} />
      <Routes>
        <Route index element = {<ItemListContainer greeting="Beautyfull pets waiting for an owner!"/>}></Route>
        <Route path='details'>
          <Route path=':id' element={<ItemDetailContainer/>}></Route>
        </Route>
        <Route path='categories'>
          <Route path=':category' element={<ItemListContainer/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      <br/>
      <FactWidget/>
      <footer>by <a href='http://mapanimal.com'>@Mapanimal</a></footer>
      <i>DEBUG, Analytics on console log</i>
      <div style={styles.bgPrints}></div>
    </div>
  );
}

export default App;
