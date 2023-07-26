import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element = {<MovieList/>}/>
    <Route path='/MovieDetails' element = {<MovieDetails/>}/>

    {/* <Link to="/">MovieList</Link>
    <Link to="/MovieDetails">MovieDetails</Link> */}

  </Routes>
  </BrowserRouter>
}

export default App;
