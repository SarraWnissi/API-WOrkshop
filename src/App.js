import logo from './logo.svg';
import './App.css';
import AlbumsListe from './components/AlbumsListe';
import { Route, Routes } from 'react-router-dom';
import ImageDetail from './components/ImageDetail';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<AlbumsListe/>} />
      <Route path='/detail/:id' element={<ImageDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
