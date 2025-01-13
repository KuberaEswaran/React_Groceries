

const SearchItem=({search,setsearch}) =>{
    return (
      <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="search">
          </label>
  
          <input id="search"
                  value={search}
                  onChange={(e)=>{setsearch(e.target.value)}}
                  placeholder='Search'
                  type='text'
                  role='searchbox'
              />
      </form>
    )
  }
  
  export default SearchItem