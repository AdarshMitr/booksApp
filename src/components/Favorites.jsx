import React from 'react'
import '../App';
import { useAppContext } from './context/appContext';
import { useNavigate } from "react-router-dom";
import { basePath } from "../App";


const Favorites = () => {

  const {favorites,addToFavorites,removeFromFavorites}=useAppContext();

  const navigate=useNavigate();

  console.log('favorites are:', favorites);
  
  const favoritesChecker=(id)=>{
    const boolean=favorites.some((book)=>book.id===id);
    return boolean;
  }

  return (
    <div className='favorites'>

      {favorites.length>0 ?favorites.map((book) => (
        <div className="book" key={book.id}>
          <div>
            
            <h4>{book.title}</h4>
          </div>
          <div><img src={book.image_url} alt='#' onClick={()=>navigate(`${basePath}/books/${book.id}`)}/> </div>
          <div>
          {favoritesChecker(book.id)?
           <button onClick={()=>removeFromFavorites(book.id)}> Remove from Favorites</button>
           :  <button onClick={()=>addToFavorites(book)}>Add to Favorites</button>
          }
            
          </div>
        </div>
      )): <h1>You don't have any favorite books yet!</h1> }
      
    </div>
  )
}

export default Favorites