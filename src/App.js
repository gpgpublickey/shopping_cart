import './App.css';
import Navbar from './Components/Stateless/Navbar';
import { ItemListContainer } from './Components/Container/ItemListContainer';
import bgPrints from './images/bgPrints.png'

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
          <Navbar links={['Dogs', 'Cats', 'More']} />
          <ItemListContainer greeting="Catalog coming soon..."/>
          <br/>
          <footer>by <a href='http://mapanimal.com'>@Mapanimal</a></footer>
          <i>DEBUG, Analytics on console log</i>
          <div style={styles.bgPrints}></div>
    </div>
  );
}

export default App;
