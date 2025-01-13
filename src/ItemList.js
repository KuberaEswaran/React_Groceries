import Lineitems from './Lineitems'

const ItemList = ({items,handleclick,handledelete}) => {
  return (
    <ul>
          {
            items.map((item) => (
              <Lineitems
              key={item.id}
              item={item}
              handleclick={handleclick}
              handledelete={handledelete}
              />
            ))
          }
    </ul>
  )
}

export default ItemList