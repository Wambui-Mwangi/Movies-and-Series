// import React, { useState } from "react";
// import './style.css';

// const navigation = ({onSearch})=>{
//     const [searchValue, setSearchValue] = useState("")

//   const handleInput = (event) => {
//     setSearchValue(event.target.value);
//   };

//   const handleSearchClick = () => {
//     onSearch(searchValue);
//   };

//   return (
//     <div className="Navbar">
//       <nav className="nav">
//         <div>
//           <h1 className="logo">M<span>oo</span>vie</h1>
//         </div>
//         <div className="search">
//           <input
//             type="text"
//             value={searchValue}
//             onChange={handleInput}
//             placeholder="Search"
//           />
//           <button onClick={handleSearchClick}>Search</button>
//         </div>
//         <div className="links">
//           <li>Home</li>
//           <li>About</li>
//           <li>My list</li>
//           <button>Sign in</button>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default navigation;
