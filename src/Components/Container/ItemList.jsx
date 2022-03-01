import { useParams } from 'react-router-dom';
import Item from '../Stateless/Item';

const ItemList = ({pets}) => {
  const {category} = useParams();

  return (
    <div className='bg-slate-200'>
        {pets.map(p => category == null || category == "All" ? <Item key={p.id} pet={p}/> : '')}
        {pets.map(p => category === p.category ? <Item key={p.id} pet={p}/> : '')}
    </div>
  )
}

export default ItemList;