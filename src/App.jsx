
import './App.css'
import {Routes,Route} from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Favorites from './components/Favorites';


export const basePath="/booksApp";

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path={`${basePath}/`} element={<BookList/>}/>
          <Route path={`${basePath}/books/:id`} element={<BookDetails/>}/>
          <Route path={`${basePath}/favorites`} element={<Favorites/>}/>
        </Routes>
        <Footer/>
      </div>
      
      
      
    </>
  )
}

export default App
