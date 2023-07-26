import React from "react";
import './style.css'

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

// const ImageContainer = ({data, props}) =>{
//     if (!data) {
//         return(
//             <div key={props.id} className="images">
//                 <img src={`${IMAGE_BASE_URL}${props.poster_path}`} alt= {props.title}/>
//             </div>
//     )
//   }

//   else{
//     const { id, title, poster_path, overview } = data;
//     return(
//         <div key={props.id} >
//             <img src={`${IMAGE_BASE_URL}${props.poster_path}`} alt= {props.title}/>
//             <h2>{title}</h2>
//             <p>{overview}</p>
//         </div>
//     )
//   }
// }


// export default ImageContainer;


const ImageContainer = ({ data }) => {
  // Ensure the "data" prop is not undefined before accessing its properties
  if (!data) {
    return <div>Loading...</div>;
  }

  const { title, poster_path, overview } = data;
  return (
    <div key={data.id}>
      <img src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>{overview}</p>
      {/* Display other movie details here */}
    </div>
  );
};




export default ImageContainer;
