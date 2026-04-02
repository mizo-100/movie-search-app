import { Routes,Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import './App.css'

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
