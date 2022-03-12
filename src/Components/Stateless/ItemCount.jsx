import { useContext } from 'react'
import { CounterContext } from '../contexts/counterContext'

export const ItemCount = ({onAdd, onRemove}) => {
  const {count, addCounter, removeCounter} = useContext(CounterContext);

  return (
    <div className='items-center mt-10'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={(event, decrement = onRemove) => removeCounter(event, decrement)}>-</button>
        <span className='mr-5 ml-5'>{count}</span>  
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={(event, increment = onAdd) => addCounter(event, increment)}>+</button>
    </div>
  )
}
