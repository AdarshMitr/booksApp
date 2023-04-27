import React from "react";
import { useState, useEffect } from "react";
import "../App";
import { API_URL } from "../API";
import axios from "axios";
import { useAppContext } from "./context/appContext";

const BookList = () => {
  const [books, setBooks] = useState([]);


  const {favorites,addToFavorites,removeFromFavorites}=useAppContext();


console.log('favorites are:', favorites);

const favoritesChecker=(id)=>{
  const boolean=favorites.some((book)=>book.id===id);
  return boolean;
}

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <div>
            
            <h4>{book.title}</h4>
          </div>
          <div><img src={book.image_url} alt='#'/> </div>
          <div>
          {favoritesChecker(book.id)?
           <button onClick={()=>removeFromFavorites(book.id)}> Remove from Favorites</button>
           :  <button onClick={()=>addToFavorites(book)}>Add to Favorites</button>
          }
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
