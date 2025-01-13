import { FaTrashAlt } from 'react-icons/fa'

const Lineitems=({item,handleclick,handledelete}) =>{
  return (
    <li className="item">
    <label
      style={(item.checked) ? { textDecoration: 'line-through' } : null}
        >
      <input type="checkbox"
        checked={item.checked} onChange={() => handleclick(item.id)}/>
      {item.item}
    </label>
    <FaTrashAlt role="button" onClick={() => handledelete(item.id)} />
  </li>
  )
}

export default Lineitems