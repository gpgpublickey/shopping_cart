import Item from '../Stateless/Item';

const ItemList = ({pets}) => {

  return (
    <div className='bg-slate-200'>
        {pets.map(p => <Item key={p.id} pet={p}/>)}
    </div>
  )
}

export default ItemList;