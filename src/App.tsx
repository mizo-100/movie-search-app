import { Routes,Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import './App.css'

//APIKEY 5a0a40e293932ee117f50bcb79efcf26
//VITE_TMDB_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTBhNDBlMjkzOTMyZWUxMTdmNTBiY2I3OWVmY2YyNiIsIm5iZiI6MTc2NTQ3MDYyOC4xMzUsInN1YiI6IjY5M2FmMWE0YzlmNTk5ZDM1NDFmZjQ3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9F2LNZ3LEvVL1Jk7hH6MFVJUsg6mt-CkQ5AnKOas30w

const App = () => {
  return (
      <Routes>
        {/*映画一覧ページ*/}
        <Route path="/" element={<MovieList/>}/>

        {/*映画詳細ページ*/}
        <Route path="/movie/:id" element={<MovieDetail/>}/>
      </Routes>
  );
};


export default App;
