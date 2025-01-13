import Header from './Header.js';
import AddItems from './AddItems.js';
import SearchItem from './Searchitem.js';
import Content from './Content.js';
import Footer from './Footer.js';
import { useState,useEffect } from 'react';
import ApiRequest from './ApiRequest.js';

function App() {
  const API_URL='http://localhost:3500/items'

  const [items, setItems] = useState([]);
  const [newitem,SetNewItems]=useState('');
  const [search,setsearch]=useState('');
  const [fetchError,setFetchError]=useState(null);
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    const fetchitems=async ()=>{
      try{
      const response=await fetch(API_URL)
      if(!response.ok) throw Error('Did not receive the repected data')
      const listitems=await response.json()
      setItems(listitems)
      setFetchError(null)
    }
catch(err){
  setFetchError(err.message)
}
finally{
  setIsLoading(false)
}
};

setTimeout(()=>{
    fetchitems()
},2000
)
  },[])

  const handleclick = async (id) => {
    const changeditem = items.map((item) => (
      id === item.id ? { ...item, checked: !item.checked } : item
    ))
    setItems(changeditem)
   const myItem=changeditem.filter((item)=>
    item.id===id
   )
   console.log(myItem)
   const updateOption={
    method:'PATCH',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify({checked:myItem[0].checked})
   }
   const reqUrl=`${API_URL}/${id}`;
   const result=await ApiRequest(reqUrl,updateOption);
   if(result) setFetchError(result)
  }

  const handledelete = async (id) => {
    const changeditem = items.filter((item) => (
      item.id!==id
    ))
    setItems(changeditem)
    const deleteOption={method:'DELETE'}
    const reqUrl=`${API_URL}/${id}`
    const result=await ApiRequest(reqUrl,deleteOption)
    if(result) setFetchError(result)
  }

  const handleaddItem=async (e)=>{    
    const item=e
    const id=items.length>0?(items[items.length-1].id)+1:1
    const checked=false
    const mynewitem={id,item,checked}
    const changeditem=[...items,mynewitem]
    setItems(changeditem)
    const postObject={
      method:'POST',
      headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(mynewitem)
  }
    const result=await ApiRequest(API_URL,postObject)
    if(result) setFetchError(result)
  }

  const handleadditemsubmit=(e)=>{
    e.preventDefault()
    if(!newitem) return
    handleaddItem(newitem)
    SetNewItems('')    
  }

    return (
        <div className="App">
        <Header 
        title={"Groceries List"}
        />

        <AddItems 
        newitem={newitem}
        SetNewItems={SetNewItems}
        handleadditemsubmit={handleadditemsubmit}
        />

        <SearchItem
        search={search}
        setsearch={setsearch}
        />
        
      <main>
        {isLoading && <p>Loading...</p>}
        {fetchError && <p style={{color:"red"}}>{`Error:${fetchError}`} </p>}
        {!fetchError && !isLoading &&
        <Content items={items.filter((item)=>(
          (item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleclick={handleclick}
        handledelete={handledelete}/>
}
</main>
        <Footer length={items.length}/>
      </div>
    )
}

export default App