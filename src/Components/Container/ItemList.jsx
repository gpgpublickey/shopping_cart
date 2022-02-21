import Item from '../Stateless/Item';

const ItemList = ({pets}) => {

  return (
    <div className='bg-slate-200'>
        {
        pets.map(p => 
            <Item key={p.id}
                id={p.id}
                name={p.name}
                description={p.description}
                conditions={p.conditions}
                pictureUrl={p.pictureUrl}
                isAvailable={p.isAvailable}
                qualities={p.qualities}/>)
        }
    </div>
  )
}

export default ItemList;