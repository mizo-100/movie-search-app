import { Routes,Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import './App.css'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MovieList/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
      </Routes>
  );
};


export default App;
