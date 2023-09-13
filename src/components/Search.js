import React, { useState } from 'react';
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'

function Search({ onSearch, loading }) {
  const [query, setQuery] = useState('');


  const handleSearch = () => {
    onSearch(query);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    handleSearch();
  };

  return (
    
    <form className="search-container" onSubmit={handleSubmit}>
      <div className=' flex ml-2 items-center rounded-lg border-2 lg:w-96 p-1'>
        
        <input 
          className=' flex ml-2 bg-transparent outline-none w-full font text-white placeholder-white flex-shrink' 
          type="text" 
          value={query}
            onChange={(e) => setQuery(e.target.value)}
          placeholder='What do you want to watch?' 
          
        />
        <button
          type="button" // Specify the button type as "button"
          onClick={handleSearch}
        >
            <MagnifyingGlassIcon onClick={() => {  handleSearch(); } } className=' cursor-pointer h-6 text-white ' />
        </button>
      </div>
      
    </form>
  );
}

export default Search;
