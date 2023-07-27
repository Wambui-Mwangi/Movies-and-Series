// import React, { useState } from "react";
// import "./style.css"

// const search = ({onSearch})=>{
//     const [searchValue, setSearchValue] = useState("");

//     const handleInput = (event) =>{
//         setSearchValue(event.target.value);
//     }

//     const handleSearch = ()=>{
//         onSearch(searchValue);
//     }

//     return(
//         <div>
//             <input
//             className="search"
//             type="text"
//             placeholder="Search"
//             value={searchValue}
//             onChange={handleInput}/>

//             <button onClick={handleSearch}>Search</button>

//         </div>
//     )
// };

// export default search;


// searchBar.js

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
