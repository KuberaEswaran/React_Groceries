import ItemList from './ItemList'

const Content = ({items,handleclick,handledelete}) => {
  return (
    <>
        {items.length ? (
          <ItemList
            items={items}
            handleclick={handleclick}
            handledelete={handledelete}
          />
        ) : "empty list"}
    </>
  );
}

export default Content;