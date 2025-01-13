import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'
function AddItems({newitem,SetNewItems,handleadditemsubmit}) {
  const inputref=useRef()
  return (
    <form className='addform' onSubmit={handleadditemsubmit}>
        <label htmlFor='Additems'>

        </label>
        <input 
        autoFocus
        ref={inputref}
        id="Additems"
        type='text'
        placeholder='add new item'
        required
        onChange={(e)=>{SetNewItems(e.target.value)}}
        value={newitem}
        />

        <button type='submit' 
        aria-label='Add items to form'
        onClick={()=>inputref.current.focus()}>
        <FaPlus 
        
        />
        </button>
    </form>
  )
}

export default AddItems