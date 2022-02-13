import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { ItemListContainer } from './Components/Container/ItemListContainer';

function App() {
  return (
    <div className="App">
          <Navbar />
          <ItemListContainer greeting="Catalog coming soon..."/>
    </div>
  );
}

export default App;
