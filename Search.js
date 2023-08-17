import React from 'react'
import { FiSearch} from "react-icons/fi"; 
import "../../assets/styles/mobile/Search.css";
function Search() {
  return (
    <div>
       <div className="top-search">
         
           <input 
            className="search-text"
            type="text"
            placeholder="Search for Salon Parlour or more"
          />
           <button className='search-icon'> <FiSearch/></button>   
        </div>
    </div>
  )
}

export default Search
