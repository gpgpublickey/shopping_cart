import { useParams } from 'react-router-dom';
import Item from '../Stateless/Item';

const ItemList = ({pets}) => {
  const {category} = useParams();
console.log(category)
  return (
    <div className='bg-slate-200'>
        {pets.map(p => category == undefined || category == "All" ? <Item key={p.id} pet={p}/> : '')}
        {pets.map(p => category === p.category ? <Item key={p.id} pet={p}/> : '')}
    </div>
  )
}

export default ItemList;